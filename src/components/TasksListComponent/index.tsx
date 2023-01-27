import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../store/context';
import { InputTask, RowTask } from './styles';
import { TaskType } from './types';

const TasksListComponent = () => {
  const [taskWrited, setTaskWrited] = useState('');

  const { listTasks, setListTasks, setButtonInstruction } = useContext(AppContext);

  console.log(listTasks);

  const handleChangeTaskList = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskWrited(event.target.value);
  };

  const verifyIfHaveTaskWithSameDescription = () => {
    if (taskWrited) {
      setListTasks((prevstate: any) => [
        ...prevstate,
        { taskDescription: taskWrited, taskSelected: false, taskCompleted: false },
      ]);
      setTaskWrited('');
      setButtonInstruction('stop');
    } else window.alert('Insira uma descrição na tarefa');
  };

  const incrementListTask = () => {
    if (listTasks.find((item) => item.taskDescription === taskWrited)) {
      window.alert('Não é possível inserir tarefa com a mesma desrição');
    } else {
      verifyIfHaveTaskWithSameDescription();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      incrementListTask();
    }
  };

  const handleRemoveTask = (event: any) => {
    const id = event.target.id;
    setListTasks(listTasks.filter((item) => item.taskDescription !== id));
  };

  const updateListTask = (index: number, checked: boolean, obj: any) => {
    const updatedListTask = [...listTasks];
    updatedListTask[index] = {
      taskDescription: obj.taskDescription,
      taskSelected: checked,
      taskCompleted: obj.taskCompleted,
    };
    setListTasks(updatedListTask);
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;

    const sameobj = listTasks.find((item) => item.taskDescription === id);
    const index = listTasks.indexOf(sameobj, 0);

    updateListTask(index, checked, sameobj);
    setButtonInstruction('stop');
  };

  return (
    <>
      <InputTask
        id="input-task"
        onKeyDown={handleKeyDown}
        onChange={handleChangeTaskList}
        placeholder="Adicione uma nova tarefa"
        value={taskWrited}
      />
      {listTasks.map((taskItem, index) => (
        <RowTask key={index}>
          <span id={String(taskItem.taskDescription)} onClick={handleRemoveTask}>
            x
          </span>
          <input
            id={taskItem.taskDescription}
            onChange={handleChangeCheckbox}
            type="checkbox"
            key={taskItem}
            checked={taskItem.taskSelected}
          />
          <p>{taskItem.taskDescription}</p>
        </RowTask>
      ))}
    </>
  );
};

export default TasksListComponent;

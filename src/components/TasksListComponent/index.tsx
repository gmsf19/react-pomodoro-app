import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../store/context';
import { InputTask, RowTask } from './styles';
import { TaskType } from './types';

const TasksListComponent = () => {
  const [taskWrited, setTaskWrited] = useState('');

  const { listTasks, setListTasks, setButtonInstruction, selectedTask, setSelectedTask } =
    useContext(AppContext);

  const handleChangeTaskList = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskWrited(event.target.value);
  };

  const verifyIfHaveTaskWithSameDescription = () => {
    if (taskWrited) {
      setListTasks((prevstate: string[]) => [
        ...prevstate,
        { taskDescription: taskWrited },
      ]);
      setTaskWrited('');
      setButtonInstruction('stop');
    } else window.alert('Insira uma descrição na tarefa');
  };

  const updateListTask = () => {
    if (listTasks.find((item) => item.taskDescription === taskWrited)) {
      window.alert('Não é possível inserir tarefa com a mesma desrição');
    } else {
      verifyIfHaveTaskWithSameDescription();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      updateListTask();
    }
  };

  const handleRemoveTask = (event: any) => {
    const id = event.target.id;
    setListTasks(listTasks.filter((item) => item.taskDescription !== id));
  };

  const conditionsToSetSelectedTasks = (
    checked: boolean,
    containSameTaskInState: TaskType,
    id: string,
  ) => {
    if (checked === true && !containSameTaskInState) {
      setSelectedTask((prevstate) => [...prevstate, { checked, id }]);
    } else if (checked === false && containSameTaskInState) {
      setSelectedTask((prevstate) => [...prevstate.filter((task) => task.id !== id)]);
    }
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;
    const containSameTaskInState = selectedTask.find((task) => task.id === id);
    conditionsToSetSelectedTasks(checked, containSameTaskInState, id);
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
          />
          <p>{taskItem.taskDescription}</p>
        </RowTask>
      ))}
    </>
  );
};

export default TasksListComponent;

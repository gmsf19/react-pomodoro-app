import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../store/context';
import { InputTask, RowTask } from './styles';

const TasksListComponent = () => {
  const [taskWrited, setTaskWrited] = useState('');

  const { listTasks, setListTasks, setButtonInstruction } = useContext(AppContext);

  const handleChangeTaskList = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskWrited(event.target.value);
  };

  const verifyIfHaveTaskWrited = () => {
    if (taskWrited) {
      setListTasks((prevstate: string[]) => [
        ...prevstate,
        { taskDescription: taskWrited },
      ]);
      setTaskWrited('');
      setButtonInstruction('stop');
    } else window.alert('Não é possível inserir tarefa sem descrição');
  };

  const updateListTask = () => {
    if (listTasks.find((item) => item.taskDescription === taskWrited)) {
      window.alert('Não é possível inserir tarefa com a mesma desrição');
    } else {
      verifyIfHaveTaskWrited();
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
          <p>{taskItem.taskDescription}</p>
        </RowTask>
      ))}
    </>
  );
};

export default TasksListComponent;

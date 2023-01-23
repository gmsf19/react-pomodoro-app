import { useContext, useState } from 'react';

import { AppContext } from '../../store/context';
import { InputTask } from './styles';

const TasksListComponent = () => {
  const [taskWrited, setTaskWrited] = useState('');

  const { listTasks, setListTasks } = useContext(AppContext);

  const handleChangeTaskList = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskWrited(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setListTasks((prevstate: string[]) => [...prevstate, taskWrited]);
      setTaskWrited('');
    }
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
        <p key={index}>{taskItem}</p>
      ))}
    </>
  );
};

export default TasksListComponent;

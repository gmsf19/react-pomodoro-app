import { InputTask } from './styles';

const TasksListComponent = () => {
  const handleKeyDown = (event: any) => {
    console.log(event);
  };
  return (
    <>
      <InputTask
        id="input-task"
        onKeyDown={handleKeyDown}
        placeholder="Adicione uma nova tarefa"
      />
    </>
  );
};

export default TasksListComponent;

import ActionButtons from '../../components/ActionButtons';
import TasksListComponent from '../../components/TasksListComponent';
import Timer from '../../components/Timer';
import TimeSelect from '../../components/TimeSelect';
import { BoxContainer } from './styles';

const ReactPomodoroScreen = () => {
  return (
    <BoxContainer>
      <TasksListComponent />
      <TimeSelect />
      <ActionButtons />
      <Timer />
    </BoxContainer>
  );
};

export default ReactPomodoroScreen;

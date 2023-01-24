import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { TaskType } from '../../components/TasksListComponent/types';

interface StatesContextType {
  listTasks: any[];
  setListTasks: Dispatch<SetStateAction<any>>;
  selectedTime: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
  timeCountDown: any;
  setTimeCountDown: Dispatch<SetStateAction<number>>;
  buttonInstruction: string;
  setButtonInstruction: Dispatch<SetStateAction<any>>;
  selectedTask: any[];
  setSelectedTask: Dispatch<SetStateAction<TaskType[]>>;
  intervalTimeCountdown: number;
  setIntervalTimeCountdown: Dispatch<SetStateAction<number>>;
  timeCountdownMode: string;
  setTimeCountdownMode: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext({} as StatesContextType);

export const ContextProvider = ({ children }: any) => {
  const [listTasks, setListTasks] = useState([]);

  const [selectedTime, setSelectedTime] = useState('');

  const [timeCountDown, setTimeCountDown] = useState(5);

  const [intervalTimeCountdown, setIntervalTimeCountdown] = useState(5);

  const [buttonInstruction, setButtonInstruction] = useState('stop');

  const [selectedTask, setSelectedTask] = useState<TaskType[]>([]);

  const [timeCountdownMode, setTimeCountdownMode] = useState('work');

  return (
    <AppContext.Provider
      value={{
        listTasks,
        setListTasks,
        selectedTime,
        setSelectedTime,
        timeCountDown,
        setTimeCountDown,
        buttonInstruction,
        setButtonInstruction,
        selectedTask,
        setSelectedTask,
        intervalTimeCountdown,
        setIntervalTimeCountdown,
        timeCountdownMode,
        setTimeCountdownMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

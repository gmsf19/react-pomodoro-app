import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface StatesContextType {
  listTasks: any[];
  setListTasks: Dispatch<SetStateAction<any>>;
  selectedTime: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
  timeCountDown: any;
  setTimeCountDown: Dispatch<SetStateAction<number>>;
  buttonInstruction: string;
  setButtonInstruction: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext({} as StatesContextType);

export const ContextProvider = ({ children }: any) => {
  const [listTasks, setListTasks] = useState([]);

  const [selectedTime, setSelectedTime] = useState('');

  const [timeCountDown, setTimeCountDown] = useState(5);

  console.log(timeCountDown);

  const [buttonInstruction, setButtonInstruction] = useState('stop');
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

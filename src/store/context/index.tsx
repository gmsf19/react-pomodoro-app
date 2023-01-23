import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface StatesContextType {
  listTasks: any[];
  setListTasks: Dispatch<SetStateAction<any>>;
  selectedTime: string;
  setSelectedTime: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext({} as StatesContextType);

export const ContextProvider = ({ children }: any) => {
  const [listTasks, setListTasks] = useState([]);

  const [selectedTime, setSelectedTime] = useState('');
  return (
    <AppContext.Provider
      value={{ listTasks, setListTasks, selectedTime, setSelectedTime }}
    >
      {children}
    </AppContext.Provider>
  );
};

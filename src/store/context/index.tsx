import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface StatesContextType {
  listTasks: any[];
  setListTasks: Dispatch<SetStateAction<any>>;
}

export const AppContext = createContext({} as StatesContextType);

export const ContextProvider = ({ children }: any) => {
  const [listTasks, setListTasks] = useState([]);
  return (
    <AppContext.Provider value={{ listTasks, setListTasks }}>
      {children}
    </AppContext.Provider>
  );
};

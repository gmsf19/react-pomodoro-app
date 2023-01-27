import { useContext } from 'react';

import { AppContext } from '../../store/context';
import { SelectTime } from './styles';

const TimeSelect = () => {
  const { setSelectedTime } = useContext(AppContext);
  const handleChangeOption = (optionSelected: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(optionSelected.target.value);
  };
  return (
    <>
      <p>selecione um horário</p>
      <SelectTime onChange={handleChangeOption}>
        <option>00:30</option>
        <option>01:00</option>
        <option>01:30</option>
        <option>02:00</option>
      </SelectTime>
    </>
  );
};

export default TimeSelect;

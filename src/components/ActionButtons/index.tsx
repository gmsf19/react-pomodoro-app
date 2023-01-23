import { useContext } from 'react';

import { AppContext } from '../../store/context';
import { ContainerButtons } from './styles';

const ActionButtons = () => {
  const { setButtonInstruction } = useContext(AppContext);
  const handleClickPlay = () => {
    setButtonInstruction('play');
  };
  const handleClickStop = () => {
    setButtonInstruction('stop');
  };

  const handleClickPause = () => {
    setButtonInstruction('pause');
  };
  return (
    <ContainerButtons>
      <button onClick={handleClickPlay}>play</button>
      <button onClick={handleClickPause}>pause</button>
      <button onClick={handleClickStop}>stop</button>
    </ContainerButtons>
  );
};

export default ActionButtons;

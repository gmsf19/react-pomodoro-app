import { useContext, useEffect } from 'react';

import { AppContext } from '../../store/context';

const Timer = () => {
  const { timeCountDown, setTimeCountDown, buttonInstruction, listTasks } =
    useContext(AppContext);

  const initTimerCountdown = () => {
    if (timeCountDown === 0 || listTasks.length === 0) {
      return;
    }
    setTimeout(() => {
      setTimeCountDown((prev) => prev - 1);
    }, 1000);
  };

  const stopTimerCountDown = () => {
    setTimeCountDown(5);
  };

  const pauseTimerCountdown = () => {
    setTimeCountDown((prev) => prev);
  };

  const updateTimeCountdown = () => {
    switch (buttonInstruction) {
      case 'stop':
        stopTimerCountDown();
        break;
      case 'play':
        initTimerCountdown();
        break;
      case 'pause':
        pauseTimerCountdown();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    updateTimeCountdown();
  }, [buttonInstruction, timeCountDown, listTasks]);
  return <h1>{timeCountDown}</h1>;
};

export default Timer;

import { useContext, useEffect } from 'react';

import { AppContext } from '../../store/context';

const Timer = () => {
  const {
    timeCountDown,
    setTimeCountDown,
    buttonInstruction,
    listTasks,
    selectedTask,
    setButtonInstruction,
    intervalTimeCountdown,
    setIntervalTimeCountdown,
    setTimeCountdownMode,
    timeCountdownMode,
  } = useContext(AppContext);

  const messageIfNotHaveTasksSelected = () => {
    window.alert('Insira e selecione ao menos uma tarefa');
    setButtonInstruction('stop');
  };

  const confirmInitIntervalTime = (result: boolean) => {
    if (result === true) {
      setTimeCountdownMode('interval');
    }
  };

  const startIntervalTime = () => {
    const result = confirm('Faça um descanso de 5 minutos');
    setIntervalTimeCountdown(5);
    confirmInitIntervalTime(result);
  };

  const reduceTimeSecondPerSecond = () => {
    setTimeout(() => {
      setTimeCountDown((prev) => prev - 1);
    }, 1000);
  };

  const initTimerCountdown = () => {
    if (listTasks.length === 0 || selectedTask.length === 0) {
      messageIfNotHaveTasksSelected();
      return;
    }

    if (timeCountDown <= 0) {
      startIntervalTime();

      return;
    } else {
      reduceTimeSecondPerSecond();
    }
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

  const initIntervalTimerCountdown = () => {
    if (
      intervalTimeCountdown <= 0 ||
      listTasks.length === 0 ||
      selectedTask.length === 0
    ) {
      setButtonInstruction('stop');
      setTimeCountdownMode('work');
      window.alert('volte ao trabalho');
      return;
    }
    setTimeout(() => {
      console.log('CAIU NO TIMEOUT');
      setIntervalTimeCountdown((prev) => prev - 1);
    }, 1000);
  };

  const stopIntervalimerCountDown = () => {
    setIntervalTimeCountdown(5);
  };

  const pauseIntervalTimerCountdown = () => {
    setIntervalTimeCountdown((prev) => prev);
  };

  const updateIntervalTimeCountdown = () => {
    switch (buttonInstruction) {
      case 'stop':
        stopIntervalimerCountDown();
        break;
      case 'play':
        initIntervalTimerCountdown();
        break;
      case 'pause':
        pauseIntervalTimerCountdown();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (timeCountdownMode === 'work') {
      updateTimeCountdown();
    }

    if (timeCountdownMode === 'interval') {
      updateIntervalTimeCountdown();
    }
  }, [
    buttonInstruction,
    timeCountDown,
    intervalTimeCountdown,
    listTasks,
    timeCountdownMode,
  ]);

  return (
    <>
      <h1>{timeCountDown}</h1>
      <h1>{intervalTimeCountdown}</h1>
    </>
  );
};

export default Timer;

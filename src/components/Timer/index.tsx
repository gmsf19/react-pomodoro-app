import { useContext, useEffect } from 'react';

import { AppContext } from '../../store/context';

const Timer = () => {
  const {
    timeCountDown,
    setTimeCountDown,
    buttonInstruction,
    listTasks,
    setButtonInstruction,
    intervalTimeCountdown,
    setIntervalTimeCountdown,
    setTimeCountdownMode,
    timeCountdownMode,
    completedCicle,
    setCompletedCicle,
  } = useContext(AppContext);

  // AJUSTAR LÓGICA PARA CONFERIR SE HÁ TASKS SELECIONADAS
  const containSelectedTask = listTasks.find((item) => item.taskSelected === true);

  const initIntervalTimerCountdown = () => {
    console.log(containSelectedTask);
    if (intervalTimeCountdown === 0 || listTasks.length === 0 || !containSelectedTask) {
      setButtonInstruction('stop');
      setTimeCountdownMode('work');
      setCompletedCicle(true);
      window.alert('volte ao trabalho');

      return;
    }
    setTimeout(() => {
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

  // IN THIS CODE BELOW, INIT A FLUX OF UPDATE AND COUNTDOWN TIMER OF INTERVAL

  const startIntervalTime = () => {
    const result = confirm('Faça um descanso de 5 minutos');
    setIntervalTimeCountdown(5);
    confirmInitIntervalTime(result);
  };

  const confirmInitIntervalTime = (result: boolean) => {
    if (result === true) {
      setTimeCountdownMode('interval');
    }
  };

  const messageIfNotHaveTasksSelected = () => {
    window.alert('Insira e selecione ao menos uma tarefa');
    setButtonInstruction('stop');
  };

  const reduceTimeSecondPerSecond = () => {
    setTimeout(() => {
      setTimeCountDown((prev) => prev - 1);
    }, 1000);
  };

  const initTimerCountdown = () => {
    // ON THIS 'IF' THE TIMER CAN'T PLAY IF NOT HAVE TASKS LISTED OR SELECTED
    if (listTasks.length === 0 || !containSelectedTask) {
      messageIfNotHaveTasksSelected();
      return;
    }

    if (timeCountDown === 0) {
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

  // IN THIS CODE BELOW, THE FUNCTIONS ARE CALLED TO CONTROL TIMER BETWEEN VALUE OF CLICKED BUTTON

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

  // IN THIS USE EFFECT BELOW, WILL INIT FLUX OF UPDATE TIMER IN MODALITY 'WORK' AND 'INTERVAL'

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

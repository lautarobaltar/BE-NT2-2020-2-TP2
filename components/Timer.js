import React, { useEffect, useState } from 'react';
import "./Timer.css"

const initialMinute = 0;
const initialSecond = 3;
const breakMinutes = 0;
const breakSeconds = 3;
const maxSeconds = 59;
let idInterval;
let internalSeconds = initialSecond;
let internalMinutes = initialMinute;


export default function Timer({active,toggle,isBreak,setBreak, reset, setReset, initial, setInitial}) {
  
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSecond);

  const reiniciarTimer = () => {
    setMinutes(initialMinute); 
    setSeconds(initialSecond);
    internalMinutes = initialMinute;
    internalSeconds = initialSecond;
  }

  const discountSecond = () => {
    internalSeconds--
    setSeconds(internalSeconds);
  }

  const discountMinute = () => {
    internalMinutes--;
    setMinutes(internalMinutes);
    if (internalSeconds < 0){
      internalSeconds = maxSeconds;
      setSeconds(internalSeconds);
    }
  }

  const iniciarBreak = () => {
    setMinutes(breakMinutes); 
    setSeconds(breakSeconds);
    toggle(true);
    setBreak(true);
    internalMinutes = breakMinutes;
    internalSeconds = breakSeconds;
  }

  const triggerVibration = () => {
    if (!isBreak) {
      iniciarBreak();
    } else {
      setBreak(false);
      reiniciarTimer()
    }
  }

  useEffect(() => {
    if (active){
      idInterval = setInterval(() => {
        discountSecond();
      }, 1000);
    } else {
      clearInterval(idInterval);
    }
  }, [active])

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      triggerVibration();
    } else if (minutes > 0  && seconds < 0){
      discountMinute();
    }
  }, [seconds])

  useEffect( () => {
    if(reset){
      reiniciarTimer();
      setInitial(!initial);
      toggle(false);
      setReset(false);
    }
  },[reset])

  const leftPad = (num) => {
    return num < 10 ? '0'+num : num;
  }

  return (
    <div className="timer">
      <h2>{leftPad(minutes)}:{leftPad(seconds)}</h2>
    </div>
  );
}
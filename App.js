import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Timer from './components/Timer';


export default function App() {

  const [active, setActive] = useState(false);
  const [isBreak, setBreak] = useState(false);
  const [reset, setReset] = useState(false);
  const [initial,setInitial] = useState(true)

  return (
    <div className="app">

      {/* HEADER */}
      <Header 
        isBreak = {isBreak}
        active={active}
        initial={initial}
      />
      
      {/* TIMER */}
      <Timer 
        isBreak = {isBreak}
        setBreak = {setBreak}
        active={active}
        toggle={setActive}
        reset={reset}
        setReset={setReset}
        initial={initial}
        setInitial={setInitial}
      />
      
      {/* BUTTONS */}
      <Buttons 
        active={active}
        toggle={setActive}
        setReset={setReset}
      />

    </div>
  );
}

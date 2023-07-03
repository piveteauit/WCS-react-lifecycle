import React, { useEffect, useState } from 'react'
import {getElapsedTime, startTime, startHms, getHms, getTickerStep, addMissing0 } from './_';

import './App.css'

function App() {
  const [count, setCount] = useState(1);
  const [clock, setClock] = useState(startTime);
  const [tickerStep, setTickerStep] = useState(clock.getSeconds() % 2 ? 'Tic' : 'Tac');
  
  const hms = getHms(clock);
  const spentHms = getElapsedTime(clock);

  const tick = () => {
    const d = new Date(clock.getTime() + 1_000);
    setTickerStep(getTickerStep(d));
    setClock(d);
  }
  
  useEffect(tick, [count])
  
  useEffect(() => {
    const ticker = setInterval(() => {
      setCount((c) => c + 1);
    }, 1_000);
    console.log("Ticker id is: %s", ticker);
  }, [])

  return (
    <div className="App">
      <span>
        {tickerStep}
      </span>

      <span>
        Started at:
        {" "}
        {startHms.map(addMissing0).join(":")}
      </span>

      <span>
        Current time is:
        <br /> 
        {hms.map(addMissing0).join(":")}
      </span>

      <span>
        Spent time:
        <br /> 
        {spentHms.map(addMissing0).join(":")}
      </span>

      <span>
        Count:
        <br /> 
        {count}
      </span>

      
    </div>
  )
}

export default App

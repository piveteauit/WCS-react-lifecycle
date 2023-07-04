import React, { useEffect, useState } from 'react'
import {getElapsedTime, startTime, startHms, getHms, getTickerStep, addMissing0, safeCheckTicker, hasBeenForced } from './_';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [clock, setClock] = useState(startTime);
  const [tickerStep, setTickerStep] = useState(clock.getSeconds() % 2 ? 'Tic' : 'Tac');
  
  const hms = getHms(clock);
  const spentHms = getElapsedTime(count);

  const tick = () => {
    const d = new Date();
    setTickerStep(getTickerStep(d));
    setClock(d);
  }
  
  useEffect(tick, [count])
  
  useEffect(() => {
    if (hasBeenForced()) {
      alert("Something is really wrong with this component and we had to force reload :(\n We'll refresh the page to bring you at starting point");
      document.location = "/"
      return;
    }

    const ticker = setInterval(() => {
      if (!safeCheckTicker(ticker)) return;
      
      setCount((currentCount) => {
        return currentCount + 1;
        
      });
    
    }, 1_000);
    
    console.log("Ticker id is: %s", ticker);

    return () => {
      clearInterval(ticker);
    };

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
        {`${count}`}
      </span>

      
    </div>
  )
}

export default App

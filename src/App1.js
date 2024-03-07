import React from 'react'
import { useState,useEffect } from 'react';
export default function App1() {

    const [runs, setRuns] =useState(0);
    const [wickets, setWickets] =useState(0);
    console.log("Component loaded");
    useEffect(() => { 
      console.log("Better Luck Next Time");
    },[wickets])
  return (
    <div>
      <button onClick={() => setRuns((prevState) => prevState + 1)}>Runs{runs}</button>
      <button onClick={() => setWickets((prevState) => prevState + 1)}>wickets{wickets}</button>
    </div>
  );
}
import React, { useState } from 'react'
import styled from 'styled-components';
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';


const App = () => {
  const [isGameStarted, setIsGameStarted] =useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);

  }
  return (
    <>
    {
      isGameStarted? <GamePlay /> :  <StartGame toggle= {toggleGamePlay} />
    }
    </>
  )
}

export default App
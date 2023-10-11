import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button } from '../styled/Button'

const GamePlay = () => {
    const [score, setScore] =useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] =useState(1);
  const [error, setError] =useState('');
 
  const generateRandomNumber = (min, max) => {
    //  console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
};

const roleDice = () =>  {   
    if(!selectedNumber) {
        setError('You have not selected any Number');
     return;
    }


    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber){
        setScore((prev) => prev + randomNumber);
    }else{
        setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
};


  return (
    <MainContainer>
    <div className='top_section'>

    <TotalScore  score={score}/>
    <NumberSelector 
    error={error}
    setError = {setError}
     selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
    />
    </div>
    <RoleDice 
       currentDice={currentDice}
       roleDice={roleDice}
       />
   
    <div className='btns'>
        <Button>Reset Score</Button>
        <Button>Show Rules</Button>
    </div>

    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
  padding-top: 70px;

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;   
}

.btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    

}
    
`;
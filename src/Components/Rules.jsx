import React from 'react'
import styled from 'styled-components'
import 'animate.css';


const Rules = () => {
  return (
    <RulesContainer className='rules animate__animated animate__rubberBand '>
     <h2>How to Play  Dice Game</h2>
   <div className='text'>
   <p>Select any Number.</p>
   <p>Click on dice image.</p>
   <p>
    After click on dice if selected number is equal to dice number you will
    get same point as dice{''}.
   </p>
   <p>if you get wrong guess then 2 point will be deducted.</p>
   </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`

    background-color: orange;
    padding: 20px;
    margin: 0 auto;
    max-width: 800px;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;

  
 

    h2{
      font-size: 24px;
    }

    .text{
        margin-top: 4px;
    }

`;
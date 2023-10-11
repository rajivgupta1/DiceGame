import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelector = ({selectedNumber, setSelectedNumber, error, setError, }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
        
    }
  

  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
    <div className='flex'>

    {arrNumber.map((value, i) =>  (
    <Box
     isSelected = { value === selectedNumber}
     onClick={()=>numberSelectorHandler(value)}
     key={i}
    >{value}</Box>  ))}
    </div>
    <p>Select Number</p>
 
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: end;

    .flex{
         display: flex;
         gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        margin-top: 20px;
    }
    .error{
        color: red;
        margin-bottom: 20px;
    }
  `;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.2);

    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 20px;
    font-weight:700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};

`;
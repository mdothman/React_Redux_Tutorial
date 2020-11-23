import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyGumball } from '../redux';

function GumballContainer(){
    const [number, setNumber] = useState(1);
   const numOfGumballs = useSelector(state => state.gumball.numOfGumballs);
   const dispatch = useDispatch();
    return(
        <div>
            <h2>Number of Gumballs - {numOfGumballs}</h2>
            <input type='text' value={number} onChange={event => {
                let digit = event.target.value
                setNumber(digit)
                }}></input>
    <button onClick={() => dispatch(buyGumball(number))}>Buy {number} Gumballs</button>
        </div>
    )
}

export default GumballContainer
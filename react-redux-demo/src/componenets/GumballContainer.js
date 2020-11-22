import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyGumball } from '../redux';

function GumballContainer(){
   const numOfGumballs = useSelector(state => state.gumball.numOfGumballs)
   const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of Gumballs - {numOfGumballs}</h2>
            <button onClick={()=> dispatch(buyGumball())}>Buy Gumball</button>
        </div>
    )
}

export default GumballContainer
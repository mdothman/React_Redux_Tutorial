import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(){
   const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
   const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of Icecreams  - {numOfIceCreams}</h2>
            <button onClick={()=> dispatch(buyIceCream())}>Buy Icecream</button>
        </div>
    )
}

export default IceCreamContainer
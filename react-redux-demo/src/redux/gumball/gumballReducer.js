import {BUY_GUMBALL} from './gumballTypes';

const initialGumballState = {
    numOfGumballs: 100
}

const gumballReducer = (state = initialGumballState, action) => {
    switch(action.type){
        case BUY_GUMBALL: return{
            ...state,
            numOfGumballs:state.numOfGumballs - action.payload
        }
        default: return state
    }

}

export default gumballReducer
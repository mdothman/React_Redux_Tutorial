import {BUY_GUMBALL} from './gumballTypes';

const initialGumballState = {
    numOfGumballs: 100
}

const gumballReducer = (state = initialGumballState, action) => {
    switch(action.type){
        case BUY_GUMBALL: return{
            ...state,
            numOfGumballs:state.numOfGumballs - 1
        }
        default: return state
    }

}

export default gumballReducer
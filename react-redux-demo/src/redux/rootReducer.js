import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer';
import gumballReducer from './gumball/gumballReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    gumball:gumballReducer
})

export default rootReducer
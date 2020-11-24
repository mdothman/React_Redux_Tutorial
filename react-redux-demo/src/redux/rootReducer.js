import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer';
import gumballReducer from './gumball/gumballReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    gumball:gumballReducer,
    user:userReducer
})

export default rootReducer
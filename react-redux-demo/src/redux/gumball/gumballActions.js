import {BUY_GUMBALL} from './gumballTypes';

export const buyGumball = (number=1) =>{
    return{
        type:BUY_GUMBALL,
        payload:number
    }
}
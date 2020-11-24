import Axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUsersRequest = () =>{
    return{
        type:FETCH_USERS_REQUEST,
        info:'Request.'
    }
}

export const fetchUsersSuccess = users =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users,
        info:'Success!'
    }
}
export const fetchUsersFailure = err => {
    return{
        type:FETCH_USERS_FAILURE,
        payload:err,
        info:'Failure.'
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest)
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const user = res.data
            dispatch(fetchUsersSuccess(user))
        })
        .catch( err => {
            const error  = err.message
            dispatch(fetchUsersFailure(error))
        })
}}
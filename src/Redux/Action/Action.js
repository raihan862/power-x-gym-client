import axios from 'axios'

export const FETCH_USER_REQUEST ='FETCH_USER_REQUEST'
export const REQUEST_SUCCESS ='REQUEST_SUCCESS'
export const  REQUEST_FAILED ='REQUEST_FAILED'

export const userRequest=()=>{
    return{
        type:  FETCH_USER_REQUEST
    }
}
export const requestSuccess=data=>{
    return{
        type: REQUEST_SUCCESS,
        payload: data
    }
}
export const requestFailour=error=>{
    return{
        type: REQUEST_FAILED,
        mgs: error
    }
}

export const featchUser = ()=>{
    return (dispatch)=>{
        dispatch(userRequest())
        axios.get("https://power-x-gym-server.herokuapp.com/classes")
        .then(response=>{
            const data = response.data
            console.log(data);
            dispatch(requestSuccess(data))
        })
        .catch(error=>{
            const errorMgs = error.message;
            dispatch(requestFailour(errorMgs))
        })
    }
}
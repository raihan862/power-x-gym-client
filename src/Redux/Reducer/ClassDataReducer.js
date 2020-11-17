import { FETCH_USER_REQUEST, REQUEST_FAILED, REQUEST_SUCCESS } from "../Action/Action"

const initialState={
    flag:false,
    users:[],
    error:""
}

const ClassDataReducer =(state = initialState,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUEST:return{
            ...state,
            flag:true
        }
        case REQUEST_SUCCESS:return{
            flag:false,
            users: action.payload,
            error:"" 
        }
        case REQUEST_FAILED:return{
            flag:false,
            users:[],
            error:action.mgs
        }   
            
    
        default:return state
             
    }
}
export default ClassDataReducer;
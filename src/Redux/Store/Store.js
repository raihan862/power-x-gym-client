import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import ClassDataReducer from '../Reducer/ClassDataReducer'

const store = createStore(ClassDataReducer,applyMiddleware(thunk))
export default store
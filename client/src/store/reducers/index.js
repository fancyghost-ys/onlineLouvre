import { combineReducers } from 'redux'
import authReducer from './auth'
import artReducer from './art'

export default combineReducers({
    authReducer,
    artReducer
})
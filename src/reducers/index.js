import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import tokenReducer from './tokenReducer'
import homeReducer from './homeReducer'


const rootReducer = combineReducers({
    user: loginReducer,
    token: tokenReducer,
    home: homeReducer
})

export default rootReducer
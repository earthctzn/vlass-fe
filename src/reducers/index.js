import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import tokenReducer from './tokenReducer'
import homeReducer from './homeReducer'
import aboutReducer from './aboutReducer'


const rootReducer = combineReducers({
    user: loginReducer,
    token: tokenReducer,
    home: homeReducer,
    about: aboutReducer
})

export default rootReducer
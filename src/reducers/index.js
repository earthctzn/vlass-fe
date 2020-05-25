import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import tokenReducer from './tokenReducer'
import homeReducer from './homeReducer'
import aboutReducer from './aboutReducer'
import workReducer from './workReducer'
import workflowReducer from './workflowReducer'
import contactReducer from './contactReducer'


const rootReducer = combineReducers({
    user: loginReducer,
    token: tokenReducer,
    home: homeReducer,
    about: aboutReducer,
    work: workReducer,
    workflow: workflowReducer,
    contact: contactReducer
})

export default rootReducer
export default function homeReducer(state= {content: '', loading: false}, action) {
    switch(action.type) {
        case "LOADING_CONTENT":
            return {
                ...state,
                content: action.payload,
                loading: true
            }
        case "SET_HOME_CONTENT":
            return {
                ...state,
                content: action.payload,
                loading: false
            }
      
        default:
            return state
    }

}
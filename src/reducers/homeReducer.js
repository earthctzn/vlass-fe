export default function homeReducer(state= {id: null, content: null, loading: false}, action) {
    switch(action.type) {
        case "LOADING_HOME":
            return {
                ...state,
                loading: true
            }
        case "SET_HOME":
            return {
                ...state,
                id: action.payload.id,
                content: action.payload.content,
                loading: false
            }
      
        default:
            return state
    }

}
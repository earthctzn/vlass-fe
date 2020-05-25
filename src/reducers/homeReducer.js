export default function homeReducer(state= {title: null, content: null}, action) {
    switch(action.type) {
        case "SET_TITLE":
            return {
                  ...state,
                  title: action.payload
                }
        case "SET_CONTENT":
            return {
                ...state,
                content: action.payload
            }
      
        default:
            return state
    }

}
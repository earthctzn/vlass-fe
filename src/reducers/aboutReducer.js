export default function aboutReducer(state= {title: null, content: null}, action) {
    switch(action.type) {
        case "SET_ABOUT_TITLE":
            return {
                  ...state,
                  title: action.payload
                }
        case "SET_ABOUT_CONTENT":
            return {
                ...state,
                content: action.payload
            }
      
        default:
            return state
    }

}
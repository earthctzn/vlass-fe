export default function aboutReducer(state= {id: null, title: null, content: null}, action) {
    switch(action.type) {
        case "SET_ABOUT":
            return {
                  ...state,
                  id: action.payload.id,
                  title: action.payload.title,
                  content: action.payload.content
                }
        default:
            return state
    }

}
export default function homeReducer(state= {title: null, content: null, loading: false}, action) {
    switch(action.type) {
        case "LOADING_CONTENT":
            return {
                ...state,
                title: action.payload.title,
                content: action.payload.content,
                loading: true
            }
        case "SET_TITLE":
            return {
                  ...state,
                  title: action.payload.title,
                  loading: false
                }
        case "SET_CONTENT":
            return {
                ...state,
                content: action.payload.content,
                loading: false
            }
      
        default:
            return state
    }

}
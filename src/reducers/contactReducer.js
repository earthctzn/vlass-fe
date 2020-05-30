export default function contactReducer(state= {id: null, title: null, content: null, loading: false}, action) {
    switch(action.type) {
        case "LOADING_CONTACT":
            return {
                ...state,
                loading: true
            }
        case "SET_CONTACT":
            return {
                  ...state,
                  id: action.payload.id,
                  title: action.payload.title,
                  content: action.payload.content,
                  loading: false
                }
        default:
            return state
    }

}
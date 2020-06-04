export default function workflowReducer(state= { id: null, title: null, content: null}, action) {
    switch(action.type) {
        case "LOADING_WORKFLOW":
            return {
                ...state,
                loading: true
            }
        case "SET_WORKFLOW":
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
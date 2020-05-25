export default function workflowReducer(state= {title: null, content: null}, action) {
    switch(action.type) {
        case "SET_WORKFLOW_TITLE":
            return {
                  ...state,
                  title: action.payload
                }
        case "SET_WORKFLOW_CONTENT":
            return {
                ...state,
                content: action.payload
            }
      
        default:
            return state
    }

}
export default function workReducer(state= {title: null, content: []}, action) {
    switch(action.type) {
        case "SET_WORK_TITLE":
            return {
                  ...state,
                  title: action.payload
                }
        case "SET_WORK_CONTENT":
            return {
                ...state,
                content: action.payload
            }
      
        default:
            return state
    }

}
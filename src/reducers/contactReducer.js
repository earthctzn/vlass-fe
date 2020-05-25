export default function contactReducer(state= {title: null, content: null}, action) {
    switch(action.type) {
        case "SET_CONTACT_TITLE":
            return {
                  ...state,
                  title: action.payload
                }
        case "SET_CONTACT_CONTENT":
            return {
                ...state,
                content: action.payload
            }
      
        default:
            return state
    }

}
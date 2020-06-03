export default function loginReducer(state= {admin: '', formErrors: [], loggedIn: false}, action) {
    switch(action.type) {
        case "SET_USER":
            return {
                  ...state,
                  admin: action.payload,
                  loggedIn: true
                }
        case "CLEAR_USER":
            return {
                ...state,
                admin: "",
                loggedIn: false
            }
        case "ADD_ERRORS":
            let errors = action.payload.errors.map(err => {
                return  err
            })
            return {
                ...state, formErrors: errors
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                formErrors: []
            }
        default:
            return state
    }

}
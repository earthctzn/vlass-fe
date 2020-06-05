export default function workReducer(state= {workArr: [], job: {}, loading: false}, action) {
    switch(action.type) {
        case "LOADING_WORK":
        return {
            ...state,
            loading: true
        }
        case "SET_WORK":
            return {
                ...state,
                workArr: action.payload,
                loading: false
            }
        case "ADD_WORK":
            return {
                ...state,
                workArr: [...state.workArr, action.payload],
                loading: false
            }
        case "SELECTED_WORK":
            return {
                ...state,
                job: action.payload,
                loading: false 
            }
      
        default:
            return state
    }

}
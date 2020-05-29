export default function workReducer(state= {workArr: [], loading: false}, action) {
    switch(action.type) {
        case "LOADING_WORK":
        return {
            ...state,
            workArr: [...state.workArr],
            loading: true
        }
        case "SET_WORK_CONTENT":
            return {
                ...state,
                workArr: action.payload,
                loading: false
            }
      
        default:
            return state
    }

}
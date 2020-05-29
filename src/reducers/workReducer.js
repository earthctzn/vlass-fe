export default function workReducer(state= {workArr: [], loading: false}, action) {
    switch(action.type) {
        case "LOADING_WORK":
        return {
            ...state,
            breweriesArr: [...state.breweriesArr],
            loading: true
        }
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
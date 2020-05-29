
const setWorkContent = ( workContent ) => {
    return { type: "SET_WORK_CONTENT", payload: workContent }
}

const loadingWork = (workData) => {
    return { type: "LOADING_WORK_CONTENT", payload: workData}
}


export const fetchWork = () => {

    return async dispatch => {
        try {
            dispatch(loadingWork())
                const response = await fetch('http://localhost:3000/api/v1/work', {credentials: 'include'})
                if (!response.ok) {
                    throw response
                }
                const workData = await response.json()
                console.log(workData)
                dispatch(setWorkContent(workData))
        }catch(data){
                console.log(data)
        }
    }
}
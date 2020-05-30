const setWorkflow = ( workflowData ) => {
    return { type: "SET_WORKFLOW", payload: workflowData }
}


const loadingWorkflow = () => {
    return { type: "LOADING_WORKFLOW" }
}


export const fetchWorkflow = () => {

    return async dispatch => {
        try {
            dispatch(loadingWorkflow())
                const response = await fetch('http://localhost:3000/api/v1/workflow', {credentials: 'include'})
                if (!response.ok) {
                    throw response
                }
                const workflowData = await response.json()
                dispatch(setWorkflow(workflowData))
        }catch(data){
                console.log(data)
        }
    }
}
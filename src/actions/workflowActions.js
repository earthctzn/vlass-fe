const setWorkflowTitle = ( workflowData ) => {
    return { type: "SET_WORKFLOW_TITLE", payload: workflowData }
}

const setWorkflowContent = ( workflowContent ) => {
    return { type: "SET_WORKFLOW_CONTENT", payload: workflowContent }
}

const loadingWorkflow = (workflowData) => {
    return { type: "LOADING_WORKFLOW_CONTENT", payload: workflowData}
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
                console.log(workflowData)
                dispatch(setWorkflowTitle(workflowData.title))
                dispatch(setWorkflowContent(workflowData.content))
        }catch(data){
                console.log(data)
        }
    }
}
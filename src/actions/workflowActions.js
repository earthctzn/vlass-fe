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
                const response = await fetch('https://vlass-be.herokuapp.com/api/v1/workflow', {credentials: 'include'})
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

export const updateWorkflow = (csrf_token, title, content, id) => {
    return async function (dispatch) {
        try{
            dispatch(loadingWorkflow())
            const formData = { workflow: {
                id: id,
                title: title,
                content: content
            }};
            console.log("this is the form data", formData)
            const response = await fetch(`https://vlass-be.herokuapp.com/api/v1/workflow/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrf_token
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            })
            if (!response.ok) {
                throw response
            }
            const workflowData = await response.json()
            dispatch(setWorkflow(workflowData))
            

        } catch(data) {
            console.log(data)
        };
    }
};
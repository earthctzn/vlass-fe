
const setWork = ( workContent ) => {
    return { type: "SET_WORK", payload: workContent }
}

const loadingWork = () => {
    return { type: "LOADING_WORK"}
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
                dispatch(setWork(workData))
        }catch(data){
                console.log(data)
        }
    }
}

export const updateWork = (csrf_token, title, content, id) => {
    return async function (dispatch) {
        try{
            dispatch(loadingWork())
            const formData = { work: {
                id: id,
                title: title,
                content: content
            }};
            console.log("this is the form data", formData)
            const response = await fetch(`http://localhost:3000/api/v1/work/${id}`,{
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
            const workData = await response.json()
            dispatch(setWork(workData))
            

        } catch(data) {
            console.log(data)
        };
    }
};
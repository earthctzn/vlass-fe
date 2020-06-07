
const setWork = ( workContent ) => {
    return { type: "SET_WORK", payload: workContent }
}
// const addWork = ( workContent ) => {
//     return { type: "ADD_WORK", payload: workContent }
// }

const loadingWork = () => {
    return { type: "LOADING_WORK"}
}

export const selectedWork = (workObject) => {
    return {type: "SELECTED_WORK", payload: workObject}
}


export const fetchWork = () => {

    return async dispatch => {
        try {
            dispatch(loadingWork())
                const response = await fetch('https://vlass-be.herokuapp.com/api/v1/work', {credentials: 'include'})
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
export const createWork = (csrf_token, name, description ) => {
    return async function (dispatch) {
        try{
            dispatch(loadingWork())
            const formData = { work: {
                companyname: name,
                jobdescription: description
            }};
            console.log("this is the form data", formData)
            const response = await fetch(`https://vlass-be.herokuapp.com/api/v1/work`,{
                method: 'POST',
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
            // const workData = await response.json()
            dispatch(fetchWork())
            

        } catch(data) {
            console.log(data)
        };
    }
};

export const updateWork = (csrf_token, name, description, id) => {
    return async function (dispatch) {
        try{
            dispatch(loadingWork())
            const formData = { work: {
                id: id,
                companyname: name,
                jobdescription: description
            }};
            console.log("this is the form data", formData)
            const response = await fetch(`https://vlass-be.herokuapp.com/api/v1/work/${id}`,{
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
            // const workData = await response.json()
            dispatch(fetchWork())

        } catch(data) {
            console.log(data)
        };
    }
};
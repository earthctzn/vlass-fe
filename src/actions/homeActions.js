const setHome = ( homeData ) => {
    return { type: "SET_HOME", payload: homeData }
}

const loadingHome = () => {
    return { type: "LOADING_HOME"}
}


export const fetchHome = () => {

    return async dispatch => {
        try {
            dispatch(loadingHome())
                const response = await fetch('https://vlass-be.herokuapp.com/api/v1/home', {credentials: 'include'})
                if (!response.ok) {
                    throw response
                }
                const homeData = await response.json()
                dispatch(setHome(homeData))
        }catch(data){
                console.log(data)
        }
    }
}

export const updateHome = (csrf_token,  content, id) => {
    return async function (dispatch) {
        try{
            dispatch(loadingHome())
            const formData = { home: {
                id: id,
                content: content
            }};
            console.log("this is the form data", formData)
            const response = await fetch(`https://vlass-be.herokuapp.com/api/v1/home/${id}`,{
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
            const homeData = await response.json()
            dispatch(setHome(homeData))
            

        } catch(data) {
            console.log(data)
        };
    }
};

// https://vlass-be.herokuapp.com
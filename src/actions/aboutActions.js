const setAbout = ( abtData ) => {
    return { type: "SET_ABOUT", payload: abtData }
}
const loadingAbout = () => {
    return { type: "LOADING_ABOUT" }
}

export const fetchAbout = () => {

    return async dispatch => {
        try {
            dispatch(loadingAbout())
                const response = await fetch('https://vlass-be.herokuapp.com/api/v1/about', 
                    {credentials: 'include'}
                )
                if (!response.ok) {
                    throw response
                }
                const abtData = await response.json()
                dispatch(setAbout(abtData))
        }catch(data){
                console.log(data)
        }
    }
}

export const updateAbout = (csrf_token, title, content, id) => {
    return async function (dispatch) {
        try{
            dispatch(loadingAbout())
            const formData = { about: {
                id: id,
                title: title,
                content: content
            }};
            console.log("this is the form data", formData)
            const response = await fetch(`https://vlass-be.herokuapp.com/api/v1/about/${id}`,{
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
            const abtData = await response.json()
            dispatch(setAbout(abtData))
            

        } catch(data) {
            console.log(data)
        };
    }
};

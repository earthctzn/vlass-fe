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
                const response = await fetch('http://localhost:3000/api/v1/about', {credentials: 'include'})
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

export const updateAbout = (csrf_token, about) => {
    return async function (dispatch) {
        try{
            dispatch(loadingAbout())
            const formData = { about: {
                id: about.id,
                title: about.title,
                content: about.content
            }};
            
            const response = await fetch(`http://localhost:3000//api/v1/about/${about.id}`,{
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
            if (abtData.errors) {
                console.log(abtData.errors)
            }else{
                dispatch(setAbout(abtData))
            }

        } catch(data) {
            console.log(data)
        };
    }
};

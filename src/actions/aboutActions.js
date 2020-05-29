const setAboutTitle = ( abtData ) => {
    return { type: "SET_ABOUT_TITLE", payload: abtData }
}

const setAboutContent = ( abtContent ) => {
    return { type: "SET_ABOUT_CONTENT", payload: abtContent }
}

const loadingAbout = (abtData) => {
    return { type: "LOADING_ABOUT", payload: abtData}
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
                dispatch(setAboutTitle(abtData))
                dispatch(setAboutContent(abtData))
        }catch(data){
                console.log(data)
        }
    }
}

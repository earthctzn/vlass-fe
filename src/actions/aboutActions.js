const setAboutTitle = ( abtData ) => {
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
                dispatch(setAboutTitle(abtData))
        }catch(data){
                console.log(data)
        }
    }
}

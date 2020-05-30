const setHomeContent = ( homeData ) => {
    return { type: "SET_HOME", payload: homeData }
}

const loadingHome = () => {
    return { type: "LOADING_HOME"}
}


export const fetchHome = () => {

    return async dispatch => {
        try {
            dispatch(loadingHome())
                const response = await fetch('http://localhost:3000/api/v1/home', {credentials: 'include'})
                if (!response.ok) {
                    throw response
                }
                const homeData = await response.json()
                dispatch(setHomeContent(homeData))
        }catch(data){
                console.log(data)
        }
    }
}
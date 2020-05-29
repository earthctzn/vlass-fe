const setHomeContent = ( homeContent ) => {
    return { type: "SET_HOME_CONTENT", payload: homeContent }
}

// const loadingHome = (homeData) => {
//     return { type: "LOADING_HOME_CONTENT", payload: homeData}
// }


export const fetchHome = () => {

    return async dispatch => {
        try {
            // dispatch(loadingHome())
                const response = await fetch('http://localhost:3000/api/v1/home', {credentials: 'include'})
                if (!response.ok) {
                    throw response
                }
                const homeData = await response.json()
                console.log(homeData[0].content)
                dispatch(setHomeContent(homeData[0].content))
        }catch(data){
                console.log(data)
        }
    }
}
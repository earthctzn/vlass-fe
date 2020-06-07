
export const getToken = () => {
    return async function (dispatch) {
        try{
            const res = await fetch('https://vlass-be.herokuapp.com/api/v1/auth', {credentials: 'include'})
            if(!res.ok){
                throw res
            }
            const response = await res.json()
            const csrf_token = response.csrf_auth_token
            dispatch({
                type: 'SET_TOKEN',
                payload: csrf_token
            })
        }catch(data){
            console.log(data)
        }
    }
}
import { setErrors, setUser } from './userActions'

export const loginUser = (csrf_token, user) => {
    return async function (dispatch) {
        try{
            const formData = { user: {
                username: user.username,
                password: user.password
            }};
            const response = await fetch('https://vlass-be.herokuapp.com/api/v1/login',{
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
            const userObj = await response.json()
            if (userObj.errors) {
                dispatch(setErrors(userObj))
            }else{
                dispatch(setUser(userObj))
            }

        } catch(data) {
            console.log(data)
        };
    }
};

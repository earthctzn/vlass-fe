const setContact = ( contactData ) => {
    return { type: "SET_CONTACT", payload: contactData }
}

const loadingContact = () => {
    return { type: "LOADING_CONTACT"}
}


export const fetchContact = () => {

    return async dispatch => {
        try {
            dispatch(loadingContact())
                const response = await fetch('http://localhost:3000/api/v1/contact', {credentials: 'include'})
                if (!response.ok) {
                    throw response
                }
                const contactData = await response.json()
                dispatch(setContact(contactData))
        }catch(data){
                console.log(data)
        }
    }
}
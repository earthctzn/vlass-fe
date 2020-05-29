const setContactTitle = ( contactData ) => {
    return { type: "SET_CONTACT_TITLE", payload: contactData }
}

const setContactContent = ( contactContent ) => {
    return { type: "SET_CONTACT_CONTENT", payload: contactContent }
}

const loadingContact = (contactData) => {
    return { type: "LOADING_CONTACT_CONTENT", payload: contactData}
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
                dispatch(setContactTitle(contactData))
                dispatch(setContactContent(contactData))
        }catch(data){
                console.log(data)
        }
    }
}
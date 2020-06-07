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
                const response = await fetch('https://vlass-be.herokuapp.com/api/v1/contact', {credentials: 'include'})
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

export const updateContact = (csrf_token, title, content, id) => {
    return async function (dispatch) {
        try{
            dispatch(loadingContact())
            const formData = { contact: {
                id: id,
                title: title,
                content: content
            }};
            console.log("this is the form data", formData)
            const response = await fetch(`https://vlass-be.herokuapp.com/api/v1/contact/${id}`,{
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
            const contactData = await response.json()
            dispatch(setContact(contactData))
            

        } catch(data) {
            console.log(data)
        };
    }
};
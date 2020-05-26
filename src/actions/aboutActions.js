const setAboutTitle = ( abtData ) => {
    return { type: "SET_ABOUT_TITLE", payload: abtData }
}

const setAboutContent = ( abtContent ) => {
    return { type: "SET_ABOUT_CONTENT", payload: abtContent }
}

const loadingAbout = () => {
    return { type: LOADING_ABOUT }
}


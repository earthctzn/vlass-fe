import React from 'react'



export const ErrorComponent = (props) => {
    return (

        <p className="error-card">
            {props.error}
        </p>
    ) 
}
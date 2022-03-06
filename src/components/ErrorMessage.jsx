import React from 'react'
import '../styles/ErrorMessage.css'


const ErrorMessage = () => {

    return (
        <>
            <div id="errorMessage">
                <span id="errorIcon" className="material-icons material-icons-two-tone">
                    error
                </span>
                <div id="content">I'm a modal. Drag me around.</div>
            </div>
        </>
    )
}

export default ErrorMessage
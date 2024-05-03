import React from 'react'
import './button.css'

function button({text, onClick, disabled}) {
    return (
        <div className="button--container">
            <button className="button" disabled={disabled} onClick={onClick}>{text}</button>
        </div>
    )
}

export default button
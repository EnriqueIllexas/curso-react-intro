import React from "react";
import ReactDOM from 'react-dom'
import './createTodoModal.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="main-modal">
           <div className="object-modal"> {children}</div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal};
import React from 'react';
import './createTodoButton.css'
import { TodoContext } from '../../TodoContext';


function TodoCreateButton(){
    const{
      setOpenModal,
      openModal,
    } = React.useContext(TodoContext)
    return(
        <button className="todo-create-button" onClick={() => {setOpenModal(!openModal)}}>
        <span className="button-content"
        >+</span>
        </button>

    );
  }

export { TodoCreateButton}
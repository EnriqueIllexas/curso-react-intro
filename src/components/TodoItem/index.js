import React from 'react';
import './createTodoItem.css';


function TodoItem(props){
    return(
        <li className={`todo-element ${props.completed && 'element-div-active'}`}>
          {/* Span V */}
          <span 
            className={`todo-element-1 todo-element-v ${props.completed && 'element-v--active'}`}
            onClick={props.onComplete}
          >✔
            </span>

          <p className={`todo-element-text ${
            props.completed && 'element-prop-active'}`}>{props.text}</p>
          {/* Span X */}
          <span 
            className={`todo-element-1 todo-element-x`}
            onClick={props.onDelete}
          >
              ✖</span>
        </li>
    );
  }

  /*  */
export {TodoItem}

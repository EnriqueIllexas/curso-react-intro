import React from 'react';
import './createTodoList.css';

function TodoList({children}){
    return(
        <ul className="todo-list">
            {children}
        </ul>
    );
}

export{ TodoList }
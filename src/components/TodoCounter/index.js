import React from 'react';
import './todoCounter.css';
import { TodoContext } from '../../TodoContext';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)

    return(
    <h1 className="todoCounter-title">
        Haz completado {completedTodos} de {totalTodos} tareas
    </h1>
    );
}

export{
    TodoCounter
}
import React from "react";
import './TodoForm.css'
import { TodoContext} from '../../TodoContext'

function TodoForm(){
    const {
        /* ADD TODO */
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="cortar naranjas en la mañana"/>
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                onClick={onCancel}
                className="TodoForm-button button-form-cancel">
                    cancel
                </button>
                <button 
                type="submit"
                className="TodoForm-button button-form-add">añadir</button>
            </div>
        </form>
    )
}
export {TodoForm};
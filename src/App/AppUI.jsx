import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoPanel } from '../components/TodoPanel';
import { TodosLoading} from '../components/TodosLoading'
import { TodosError } from '../components/TodosError'
import { EmptyTodos } from '../components/EmptyTodos'
import { TodoCreateButton } from '../components/TodoCreateButton';
import { TodoContext} from '../TodoContext'
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';

import React from 'react';

function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch />
            <TodoList>
            {loading && (
                <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>

                </>
              )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
  
            {searchedTodos.map(todo => (
              <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
              />
            ))}
            
          </TodoList>

      <TodoCreateButton/>  
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )
          
        }
      <TodoPanel/>
      
      
    </React.Fragment>

  );
}

export { AppUI }
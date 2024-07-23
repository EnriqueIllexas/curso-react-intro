import React from 'react';
import './createTodoSearch.css';
import { TodoContext } from '../../TodoContext';

function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

    return(
      <div className="todo-seach-box">
        <input 
        required="" 
        placeholder="buscar el todo" 
        type="text" 
        id="todo-seach-input" 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
    
        }}/>
        <button id="todo-seach--send-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg>
        </button> 
      </div>

    )
}
export{
    TodoSearch
}
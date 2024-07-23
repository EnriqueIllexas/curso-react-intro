import React from 'react';
import './TodosLoading.css';

function TodosLoading(){
    return (
        <div className="LoadingTodo-container">
          <span className='loading-element-v'></span>
          <p className='loading-element-p'>
            
          </p>
          <span className='loading-element-x'></span>
        </div>
        
      );
}
export{
    TodosLoading
}
import React from 'react';
import './EmptyTodos.css';

function EmptyTodos(){
    return(
        <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>

        <p className='empty-bar-p'>crea tu primer <strong id='error-strong'>todo</strong></p>
        
      </div>
    
    );
}
export{
    EmptyTodos
}
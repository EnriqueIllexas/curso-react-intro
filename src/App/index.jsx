import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'


import '../styles/view.css';
import React from 'react';

function App() {

  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
  
  
}
export default App;

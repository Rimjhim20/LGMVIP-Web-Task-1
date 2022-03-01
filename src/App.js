import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <h1 class="heading">Task 1</h1>
    <div className='todo-app'>
      <TodoList />
    </div>
    </>
  );
}

export default App;

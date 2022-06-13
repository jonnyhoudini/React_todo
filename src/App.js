
import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { description: 'Do homework', priority: 'high' },
    { description: 'Make dinner', priority: 'high' },
    { description: 'Pick up kids', priority: 'high' },
    { description: 'Get shopping', priority: 'low' },
    { description: 'Call sister', priority: 'low' }
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [newPriority, setPriority] = useState("");

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value);
  }

  const handlePriorityInput = (event) => {
    setPriority(event.target.value);
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({ description: newTodo, priority: newPriority });
    setTodos(copyTodos);
    setNewTodo('');
  }

  const todoNodes = todos.map((todo, index) => {
    return (
      <li key={index} className={todo.priority === 'high' ? "high" : "low"}><span>{todo.description}</span></li>
    )
  })

  return (
    <div className="container">
      <h1>To Do List</h1>
      <hr />
      <ul>
        {todoNodes}
      </ul>

      <form onSubmit={saveNewTodo}>
        <input id='new-todo' type='text' placeholder='Add new task' value={newTodo} onChange={handleTodoInput} />

        <label>High <input type='radio' value='high' id='high' name='priority' onClick={handlePriorityInput} /></label>
        <label>Low <input type='radio' value='low' id='low' name='priority' onClick={handlePriorityInput} /></label>
        <input type='submit' value='GO' />
      </form>
    </div>
  );
}

export default App;

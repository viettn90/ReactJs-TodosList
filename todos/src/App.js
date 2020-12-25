import React, {useState} from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import Header from './components/Header';
import TodosList from './components/TodosList';

function App() {

  // Hook for TodoForm
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!value) return;
    saveTodo(value);
    setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  // Hook for TodoList component
  const [todosList, setTodosList] = useState([
    {text: "Learn more about ReactJs"},
    {text: "Do Homework"}
  ])

  // Add new Todo into TodoList
  const saveTodo = (text) => {
    const newTodos = [...todosList];
    newTodos.push({text})
    // Another written: const newTodos = [...todosList, {text}];
    setTodosList(newTodos);
  }

    return (
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <ToDoForm 
            value={value}
            handleSubmit={handleSubmit}
            handleChange={handleChange}

          />
        </div>
        <div>
          <TodosList todosList={todosList}/>
        </div>

      </div>
      
    );
  };

export default App;

import React from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import AddNewTodo from './components/AddNewTodo';
import TodoList from './components/TodoList';

import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import { useState, useEffect } from 'react';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todoAdded"))|| []); 
  const [showAddTodo, setShowAddTodo] = useState(false);
  
  
  const addTodo = (todo) => {
      const id = uuidv4();
      const newTodo = { id, ...todo, deadline: new Date(todo.deadline) }
      const ListTodo = [...todos, newTodo].sort((a,b) => a.deadline - b.deadline);
      setTodos(ListTodo);
      Swal.fire({
          icon: 'success',
          text: 'Você adicionou uma nova tarefa!'
      })
      localStorage.setItem("todoAdded", JSON.stringify(ListTodo));
      console.log(todo);
    }

  const deleteTodo = (id) => {
      const deleteTodo = todos.filter((todo) => todo.id !== id);
      setTodos(deleteTodo);
      Swal.fire({
          icon: 'success',
          text: 'Você deletou uma tarefa!'
      })
      localStorage.setItem("todoAdded", JSON.stringify(deleteTodo));
    }

  const editTodo = (id) => {
      const text = prompt("Tarefa");
      const day = prompt("Prazo");
      const description = prompt("Descrição da tarefa");
      const deadline = prompt("Data final");
      let data = JSON.parse(localStorage.getItem('todoAdded'));

      const myData = data.map(x => {
          if (x.id === id) {
              return {
                  ...x,
                  text: text,
                  day: day,
                  description: description,
                  deadline: deadline,
                  id: uuidv4()
              }
          }
          return x;
      })
      Swal.fire({
          icon: 'success',
          text: 'Você editou uma tarefa!'
      })
      localStorage.setItem("taskAdded", JSON.stringify(myData));
      window.location.reload();
  }

  return (
    <div className="App">
      {
      <div className='container'>
        <div className='form'>
          <NewTodo showForm={() => setShowAddTodo(!showAddTodo)} changeTextAndColor={showAddTodo}/>
          {showAddTodo && <AddNewTodo onSave={addTodo} />}
        </div>  
        <div className='list'>
          <div className='title-list'>
            <h3>Tarefas: {todos.length}</h3>
          </div>
        {
            todos.length > 0
                ?
                (<TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />)
                :
                ('Nenhuma tarefa!')
        
        }
        </div>
      
      </div>  
}
    </div>
  );
}

export default App;

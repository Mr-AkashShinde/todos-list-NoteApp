import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from './MyComponents/Footer';
import {TodoItem} from './MyComponents/TodoItem';
import {Todos} from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo); 

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market", 
      description: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall", 
      description: "You need to go to the market to get this job done 2"
    },
    {
      sno: 3,
      title: "Go to the school", 
      description: "You need to go to the market to get this job done 3"
    }
  ]);
  return (
    <>
    <Header title="Todos-List" searchBar={true}/>
    <AddTodo/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;

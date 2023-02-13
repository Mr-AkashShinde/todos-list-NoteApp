import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from './MyComponents/Footer';
// import {TodoItem} from './MyComponents/TodoItem';
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

  const addTodo = (title, description, sno)=> {
    console.log("I am adding this todo", title, description)
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo ={
      sno: sno,
      title: title, 
      description: description,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    
  ]);
  return (
    <>
    <Header title="Todos-List" searchBar={true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;

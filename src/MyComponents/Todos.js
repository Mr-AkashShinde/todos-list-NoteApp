import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  const myStyle = {
    marginBottom: "120px"
  }
  return ( 
    <div className='container ' style={myStyle}>
        <h3 className='my-3'>Saved Notes</h3>
        {props.todos.length===0? "No notes to display":
        props.todos.map((todo)=>{
            return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
            )
        })}
        
    </div>
  )
}

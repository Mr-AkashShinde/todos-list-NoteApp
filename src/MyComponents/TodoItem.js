import React from "react";

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button type="button" class="btn btn-danger btn-sm" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    )
} 
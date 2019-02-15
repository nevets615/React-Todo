import React from 'react';
import "./Todo.css"

const Todo = props => {

    return (
    <div className={props.todo.completed ? "task" : ""}
    onClick={() => props.toggleTodo(props.todo.id)}
  >
        
        <li>{props.todo.task}</li>
    
    </div>
    );
}

export default Todo;
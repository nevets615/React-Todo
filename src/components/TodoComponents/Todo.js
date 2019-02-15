import React from 'react';
import "./Todo.css"

const Todo = props => {

    return (
    <div className={props.todos.completed ? "task" : ""}
    onClick={() => props.toggleTask(props.todo.id)}
  >
        
        <li>{props.todos.task}</li>
    
    </div>
    );
}

export default Todo;
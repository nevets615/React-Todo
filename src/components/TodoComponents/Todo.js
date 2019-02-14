import React from 'react';

const Task = props => {

    return (
    <div className={`task${props.task.completed ? 'completed' : ''}`}
    onClick={() => props.toggletask(props.task.id)}
  >
        
        <li>{props.task.task}</li>
    
    </div>
    );
}

export default Todo;
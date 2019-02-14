import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        task: ''
      };
    }
  
    handleChanges = e => {
      this.setState({ [e.target.task]: e.target.value });
    };
  
    submitItem = e => {
      this.setState({ task: '' });
      this.props.addtask(e, this.state.task);
    };
    
    render() {
    return (
        <form onSubmit={props.handleSubmit}>
        <input
        type="text"
        value={props.task}
        task="task"
        onChange={props.handleChanges}
        placeholder="task"
        />
        <button type="submit">Add Todo</button>
        <button type="">Clear Completed</button>
        </form>
    );
}
}
export default TaskForm;
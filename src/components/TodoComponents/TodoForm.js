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
        <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        value={this.task}
        task="task"
        onChange={this.handleChanges}
        placeholder="task"
        />
        <button type="submit">Add Todo</button>
        <button type="">Clear Completed</button>
        </form>
    );
}
}
export default TaskForm;
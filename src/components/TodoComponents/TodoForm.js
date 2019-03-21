import React from 'react';
import "./Todo.css"
class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todo: ''
      };
    }

    handleChanges = e => {
        this.setState({ todo: e.target.value });
       
    };
  
   handleSubmit= e => {
       this.setState({ todo: '' });
       this.props.handleSubmit(e, this.state.todo);
    };

 
    
    render() {
      return (
        
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        value={this.state.todo}
        todo="todo"
        onChange={this.handleChanges}
        placeholder="Todo"
        />
        <button type="">Add Todo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form> 
        
    );
}
}
export default TodoForm;
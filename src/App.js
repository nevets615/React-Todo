import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
const tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      input: ""
    };
  }

  addTask = (e, item) => {
    e.preventDefault();
    const newItem = {
        task: this.state.input,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task, 
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };
  
  clearCompleted = e => {
    e.preventDefault();
    console.log('running!');
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };
};

handleChanges = e => {
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} />
        <TodoForm
          handleSubmit={this.addTask}
          handleChanges={this.handleChanges}
          task={this.state.input}
          />
      </div>
    );
  }

  export default App;
  

  
  
  
  
  
  
  


  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  // };
  // this.setState({
    //   tasks: [...this.state.tasks, newTask],
    //   input: ""
    // });
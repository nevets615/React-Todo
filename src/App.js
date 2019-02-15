import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
const todos = [
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
      todos: todos,
      input: ""
    };
  }

  addTodo = (e, item) => {
    e.preventDefault();
    const newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  handleChanges = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm
          handleSubmit={this.addTodo}
          handleChanges={this.handleChanges}
          todo={this.state.input}
        />
      </div>
    );
  }
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

// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
function TodoList(props) {
  return (
    <ul>
      {props.todos.map(t => <Todo key= {t.id} todo={t} toggleTodo={props.toggleTodo}/>
      
      
      )}

    </ul>
  );
}

export default TodoList;

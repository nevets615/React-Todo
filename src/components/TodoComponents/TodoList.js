// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
function TodoList(props) {
  return (
    <ul>
      {props.todo.map(t => <Todo key= {t.id} todos={props.todo}/>
      
      )}

    </ul>
  );
}

export default TodoList;

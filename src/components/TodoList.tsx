import React from "react";
import { Todos } from "../intefaces/interface";
import Todo from "./Todo";

const TodoList: React.FC<Todos> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-wrap justify-normal">
      {todos.map((todo) => (
        <Todo todo={todo}
        key={todo.id}
        todos={todos}
        setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;

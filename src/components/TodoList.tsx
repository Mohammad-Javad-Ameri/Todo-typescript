import React from "react";
import { Todos } from "../intefaces/interface";

const TodoList: React.FC<Todos> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-wrap justify-normal">
      {todos.map((todo) => (
        <div className="card w-80 bg-base-100 shadow-xl mx-7 my-5">
          <div className="card-body">
            <h2 className="card-title">{todo.todo}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

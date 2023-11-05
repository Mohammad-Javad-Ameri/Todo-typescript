import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todo } from "./intefaces/interface";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      const newTodo: Todo = {
        id: uuidv4(),
        todo: todo,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <div className="flex justify-center mt-10">
        <h1>Type Todo</h1>
      </div>

      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

import React, { useState, useRef, useEffect } from "react";
import { TodoCard } from "../intefaces/interface";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete, MdDone } from "react-icons/md";

const Todo = ({ todo, todos, setTodos }: TodoCard) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const handleDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <div className="card w-80 bg-slate-800 shadow-xl mx-7 my-5">
      <div className="card-body">
        <div className="flex items-center justify-center">
          <form
            onSubmit={(e) => {
              handleEdit(e, todo.id);
            }}
          >
            {!edit ? (
              todo.isDone ? (
                <s className="card-title">{todo.todo}</s>
              ) : (
                <h2 className="card-title">{todo.todo}</h2>
              )
            ) : (
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={editTodo}
                required
                ref={inputRef}
                onChange={(e) => {
                  setEditTodo(e.target.value);
                }}
              />
            )}
          </form>
          <div className="ml-auto space-x-2 flex">
            <div>
              <AiFillEdit className="text-xl" onClick={() => setEdit(!edit)} />
            </div>
            <div>
              <MdDelete
                className="text-xl"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
            <div onClick={() => handleDone(todo.id)}>
              <MdDone className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

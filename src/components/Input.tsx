import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

const Input = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <div className="flex justify-center">
      <form className=" form-control w-full max-w-xs mt-10 " onSubmit={handleAdd}>
        <label className="label">
          <span className="label-text">Add Todo</span>
        </label>
        <div className="flex items-center justify-center " >
          <input
            type="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Input;

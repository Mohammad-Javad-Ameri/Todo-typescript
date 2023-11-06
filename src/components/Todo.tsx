import React from 'react'
import { TodoCard } from '../intefaces/interface'
const Todo = ({todo,todos,setTodos}:TodoCard) => {
  return (
         <div className="card w-80 bg-base-100 shadow-xl mx-7 my-5">
          <div className="card-body">
            <h2 className="card-title">{todo.todo}</h2>
          </div>
        </div>
  )
}

export default Todo
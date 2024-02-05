import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
        <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
        </div>
        <div>
            <button className='complete' onClick={() => completeTodo(todo.id)}><AiOutlineCheck /></button>
            <button className='remove' onClick={() => removeTodo(todo.id)}><AiOutlineClose /></button>
        </div>
  </div>
  )
}

export default Todo
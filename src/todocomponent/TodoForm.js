import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const[value,setValue]=useState("");
  const handleSubmit=e=>{
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
   <div className='w-full h-[80px] flex justify-center'>
     <form className='m-1' onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} className='p-2 m-1 rounded-md w-[300px]' placeholder='What is the task today'/>
        <button type='submit' className='p-2  bg-indigo-500 text-white rounded-md'>Add Task</button>
    </form>
   </div>
  )
}

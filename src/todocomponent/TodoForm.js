import React from 'react'

export const TodoForm = () => {
  return (
    <form className='m-2 background-black'>
        <input type='text' className='m-2' placeholder='What is the task today'/>
        <button type='submit' className='p-2  bg-indigo-500 text-white rounded-md'>Submit</button>
    </form>
  )
}

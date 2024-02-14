import React from 'react'
import { RiEditBoxLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
export const Todo = ({x,deleteTodo}) => {
  return (
    <div className='ml-9 mr-9'>
      <div className='text-white bg-slate-500 p-2 mt-1 mb-1 rounded-md flex justify-between'>
        <p>{x.task}</p>
        <div className='flex justify-between items-center gap-2'>
          <RiEditBoxLine size={20}/><MdDelete size={20} onClick={()=>deleteTodo(x.id)}/>
        </div>
      </div>
      </div>
  )
}

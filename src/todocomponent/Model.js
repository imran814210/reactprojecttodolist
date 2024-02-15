import React,{useState} from 'react'

import { IoMdClose } from "react-icons/io";

export default function Model({onClose,editTodo,id,item,modalClose}) {
    const[value,setValue]=useState(item);
    const handleSubmit=e=>{
            e.preventDefault();
            editTodo(value,id,modalClose);
            setValue("");
        }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center'>
        {/* justify-center for horizontal center
        items-center for vertical center */}
        <div className="flex flex-col gap-3 w-[600px] items-center">
                 <div className='flex justify-end w-full text-red-600'><IoMdClose onClick={onClose} size={30}/></div>
            <div className=' bg-violet-500 w-[90%] rounded-lg flex justify-center flex-col items-center p-5'>
                <h1 className='text-3xl text-white'>Update Task</h1>
                <form className='m-1' onSubmit={handleSubmit}>
                    <input type='text' value={value?value:item} onChange={(e)=>setValue(e.target.value)} className='p-2 m-1 rounded-md w-[300px]' placeholder='What is the task today'/>
                    <button type='submit' className='p-2  bg-indigo-500 text-white rounded-md'>Update Task</button>
                </form>
            </div>
        </div>
      
        </div>
  )
}

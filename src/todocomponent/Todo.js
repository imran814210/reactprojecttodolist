import React, { useState } from 'react'
import { RiEditBoxLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Modal from './Model';
export const Todo = ({...props}) => {
  const [showmodal,setShowmodal]=useState(false);
  return (
    <>
    <div className='ml-9 mr-9 z-10'>
        <div className='text-white bg-slate-500 p-2 mt-1 mb-1 rounded-md flex justify-between'>
          <p onClick={props.toggleCompleted} className={`${props.x.completed ? "text-white" : "text-black"}`}>{props.x.task}</p>
          <div className='flex justify-between items-center gap-2'>
            <RiEditBoxLine size={20} onClick={()=>{setShowmodal(true)}}/><MdDelete size={20} onClick={() => props.deleteTodo(props.x.id)} />
          </div>
        </div>
      </div>
      {showmodal&& <Modal onClose={()=>setShowmodal(false)} addTodo={props.addTodo} item={props.x.task}/>}
      </>
  )
}

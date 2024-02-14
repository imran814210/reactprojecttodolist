import { useState } from 'react';
import './App.css';
import { TodoForm } from './todocomponent/TodoForm';
import {Todo} from './todocomponent/Todo'
import './todocomponent/TodoWrapper'
import { TodoWrapper } from './todocomponent/TodoWrapper';
import {v4 as uuidv4} from 'uuid';
uuidv4();
function App() {
  const[todos, setTodos]=useState([]);
  const addTodo=(todo)=>{
    setTodos([...todos,{id:uuidv4(),task:todo, completed:false,isEditing:false}])
  }
  const editTodo=id=>{
    
  }
  const deleteTodo=id=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  const toggleComplete=id=>{   
     setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }
  return (
   <>
     <div className='w-full flex justify-center pt-4'>
          <div className='bg-violet-300 w-[500px] rounded-lg pt-5 pb-5'>  
              <TodoForm addTodo={addTodo}/>  
              {todos.map((todo,index)=>(
                  <Todo x={todo} key={index} toggleCompleted={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} addTodo={addTodo}/>
              ))}          
          </div>
     </div>
   </>
  );
}
export default App;

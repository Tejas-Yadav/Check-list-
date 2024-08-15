import React, { useEffect, useRef, useState } from 'react'
import checklist from '../assets/checklist.png'
import Tasks from './Tasks'

const Todo = () => {

  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  const add = () => {
      const inputText = inputRef.current.value.trim();

      if (inputText === "") {
        return null;
      }

      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      }
      setTodoList((prev)=> [...prev,newTodo]);
      inputRef.current.value = "";
    }

    const deleteItem = (id) => {
      setTodoList((prevTodo) =>{
       return prevTodo.filter((todo)=> todo.id !== id)
      })
    }

    const toggle = (id) => {
      setTodoList((prevTodo)=>{
        return prevTodo.map((todo=>{
          if(todo.id === id){
            return {...todo, isComplete: !todo.isComplete}
          }
          return todo;
        }))
      });
    
    };

useEffect(()=>{
  console.log(todoList)
},[todoList])


  return (
    <div className='bg-white place-self-center w-5/6 max-w-md flex flex-col p-7 min-h-[500px] rounded-3xl shadow-2xl'>

     <div className='flex items-center mt-6 gap-2'>
        <img className='w-6'  src={checklist} alt=""/>
        <h1 className='text-2xl font-semibold'>Checklist</h1>
     </div>

     <div>
     <div className='flex items-center my-7 bg-green-200 rounded-full shadow-sm'>
        <input ref={inputRef} className='flex bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 shadow-lg placeholder:text-slate-600' type='text' placeholder='Add tasks'/>
        <button onClick={add} className='border-none bg-green-500 h-10 w-1/5 rounded-full font-medium font-sans text-lg cursor-pointer'> ADD +</button>
    </div>

    <div>
     {todoList.map((item,index)=>{
        return <Tasks key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteItem={deleteItem} toggle={toggle}/>
     })}
    </div>
   </div>

    </div>
  )
}

export default Todo
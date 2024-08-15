import React from 'react'
import checklist from '../assets/checklist.png'
import Tasks from './Tasks'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-5/6 max-w-md flex flex-col p-7 min-h-[500px] rounded-3xl shadow-2xl'>
     <div className='flex items-center mt-6 gap-2'>
        <img className='w-6'  src={checklist} alt=""/>
        <h1 className='text-2xl font-semibold'>Checklist</h1>
     </div>
     <div>
     <div className='flex items-center my-7 bg-green-200 rounded-full shadow-sm'>
        <input className='flex bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 shadow-lg placeholder:text-slate-600' type='text' placeholder='Add tasks'/>
        <button className='border-none bg-green-500 h-10 w-1/5 rounded-full font-medium font-sans text-lg cursor-pointer'> ADD +</button>
    </div>
    <div>
        <Tasks text={'add'}/>
        <Tasks text={'add more'}/>
    
    </div>
     </div>
    </div>
  )
}

export default Todo

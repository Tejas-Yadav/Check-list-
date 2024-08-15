import React from 'react'
import  check from '../assets/check.png'
import  images from '../assets/images.png'
import bin from '../assets/bin.png'

const Tasks = ({text, id, isComplete, deleteItem, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-6' src={isComplete ? check : images } alt="" />
            <p className='ml-4 text-[15px]'>{text}</p>
        </div>
     <img onClick={()=>{deleteItem(id)}}  src={bin} alt="" className='w-7 cursor-pointer'/>
    </div>
  )
}

export default Tasks

import React from 'react'
import  check from '../assets/check.png'
import  images from '../assets/images.png'
import bin from '../assets/bin.png'

const Tasks = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img className='w-6' src={check} alt="" />
            <p className='ml-4 text-[15px]'>{text}</p>
        </div>
     <img className='w-7 cursor-pointer' src={bin} alt="" />
    </div>
  )
}

export default Tasks

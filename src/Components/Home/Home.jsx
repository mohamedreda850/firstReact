import React from 'react'
import img from './../../assets/avataaars.svg'
export default function Home() {
  return (
    <>
    <div className='h-[100vh] bg-[#1ABC9C] flex flex-col justify-center items-center'>
        <img src={img} alt="" className=' mb-5 w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 '/>
        <h1 className="text-white text-4xl font-bold my-5">START FRAMEWORK</h1>
        <div className='flex items-center my-5'>
            <div className='w-24 h-1 bg-white mx-3'></div>
            <i class="fa-solid fa-star text-white text-2xl"></i>
            <div className='w-24 h-1 bg-white mx-3'></div>
        </div>
        <h5 className='text-white my-5'>Graphic Artist - Web Designer - Illustrator</h5>
    </div>
    </>
  )
}

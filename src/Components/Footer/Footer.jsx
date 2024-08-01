import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className='h-auto '>
        <div className='h-[80%] bg-[#2C3E50] w-full lg:flex xl:flex 2xl:flex items-center overflow-auto'>
            <div className=' text-center sm:w-full my-10 mx-16 md:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3'>
                <h3 className='font-bold text-2xl text-white'>LOCATION</h3>
                <p className='text-white'>2215 John Daniel Drive</p>
                <p className='text-white'>Clark, MO 65243</p>
            </div>
            <div className=' text-center sm:w-full md:w-full my-10 mx-16 lg:w-1/3 xl:w-1/3 2xl:w-1/3'>
              <h3 className='font-bold text-2xl text-white'>Clark, MO 65243</h3> 
              <ul className='flex justify-center mt-3'>
                <li className='text-white border-white border-2 rounded-full mx-2'><i className="fa-brands fa-facebook m-2"></i></li>
                <li className='text-white border-white border-2 rounded-full mx-2'><i className="fa-brands fa-twitter m-2"></i></li>
                <li className='text-white border-white border-2 rounded-full mx-2'><i className="fa-brands fa-linkedin-in m-2"></i></li>
                <li className='text-white border-white border-2 rounded-full mx-2'><i className="fa-solid fa-globe m-2"></i></li>
                </ul> 
            </div>
            <div className='text-center  sm:w-full md:w-full my-10 mx-16 lg:w-1/3 xl:w-1/3 2xl:w-1/3'>
                <h3 className='font-bold text-2xl text-white'>ABOUT FREELANCER</h3>
                <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        <div className='h-[20%] bg-[#1A252F] flex justify-center items-center w-full'>
            <p className='text-white'>Copyright © Your Website 2021</p>
        </div>
    </footer>
    </>
  )
}

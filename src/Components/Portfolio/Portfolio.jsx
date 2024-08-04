import React from "react";
import { useState } from "react";
import img1 from './../../../public/port2.png'
import img2 from './../../../public/port3.png'
import img3 from './../../../public/poert1.png'

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectImage, setSelectImage] = useState('')
  const handleImageClick = (imgSrc)=>{
   
    setSelectImage(imgSrc)
    setIsModalOpen(true)
    
  }
  const closemodal =()=>{
    
    setIsModalOpen(false)
   
  }
  const images =[
    img1,
    img2,
    img3,
    img1,
    img2,
    img3,
  ]
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center mt-4">PORTFOLIO COMPONENT</h1>
          <div className="flex items-center my-5">
            <div className="w-24 h-1 bg-black mx-3"></div>
            <i className="fa-solid fa-star text-black text-2xl"></i>
            <div className="w-24 h-1 bg-black mx-3"></div>
          </div>
        </div>
        <div className="w-[80%] mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-start gap-5">
            {images.map((imgSrc, index) => (
              <div key={index} className="rounded-md relative imgClass overflow-hidden group">
                <img
                  src={imgSrc}
                  alt=""
                  className="w-full rounded-md"
                  
                />
                <div onClick={() => handleImageClick(imgSrc)} className="bg-[#1ABC9C] absolute start-0 top-0 end-0 bottom-0 rounded-md flex justify-center items-center group-hover:opacity-80 opacity-0 transition-all duration-500">
                  <i className="fa-solid fa-plus text-9xl text-white"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={isModalOpen ? 'fixed start-0 end-0 top-0 bottom-0 flex justify-center items-center' : 'hidden'} >
          <div onClick={closemodal} className="w-full h-full bg-blue-700 opacity-20"></div>
          <img src={selectImage} alt="" className="absolute w-[80%] lg:w-[40%]" />
        </div>
      </div>
    </>
  );
}


/*
<div className=" rounded-md relative imgClass overflow-hidden  group">
            <img
              src="src\assets\port2 (1).png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="bg-[#1ABC9C]  absolute start-0 top-0 end-0 bottom-0  rounded-md flex justify-center items-center group-hover:opacity-80 opacity-0 transition-all duration-500">
              <i class="fa-solid fa-plus text-9xl text-white"></i>
            </div>
        </div>
        <div className=" rounded-md relative imgClass overflow-hidden  group">
            <img
              src="src\assets\port2.png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="bg-[#1ABC9C]  absolute start-0 top-0 end-0 bottom-0  rounded-md flex justify-center items-center group-hover:opacity-80 opacity-0 transition-all duration-500">
              <i class="fa-solid fa-plus text-9xl text-white"></i>
            </div>
        </div>
        <div className=" rounded-md relative imgClass overflow-hidden  group">
            <img
              src="src\assets\port3.png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="bg-[#1ABC9C]  absolute start-0 top-0 end-0 bottom-0  rounded-md flex justify-center items-center group-hover:opacity-80 opacity-0 transition-all duration-500">
              <i class="fa-solid fa-plus text-9xl text-white"></i>
            </div>
        </div>
        <div className=" rounded-md relative imgClass overflow-hidden  group">
            <img
              src="src\assets\poert1.png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="bg-[#1ABC9C]  absolute start-0 top-0 end-0 bottom-0  rounded-md flex justify-center items-center group-hover:opacity-80 opacity-0 transition-all duration-500">
              <i class="fa-solid fa-plus text-9xl text-white"></i>
            </div>
        </div>
        <div className=" rounded-md relative imgClass overflow-hidden  group">
            <img
              src="src\assets\poert1.png"
              alt=""
              className="w-full rounded-md"
            />
            <div className="bg-[#1ABC9C]  absolute start-0 top-0 end-0 bottom-0  rounded-md flex justify-center items-center group-hover:opacity-80 opacity-0 transition-all duration-500">
              <i class="fa-solid fa-plus text-9xl text-white"></i>
            </div>
        </div>

*/
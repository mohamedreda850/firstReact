import React from "react";

export default function About() {
  return (
    <>
      <div className="h-[80vh] bg-[#1ABC9C] flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold my-5">ABOUT COMPONENT</h1>
        <div className="flex items-center my-5">
          <div className="w-24 h-1 bg-white mx-3"></div>
          <i class="fa-solid fa-star text-white text-2xl"></i>
          <div className="w-24 h-1 bg-white mx-3"></div>
        </div>
        <div className="w-[70%] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
          <p className="mx-4 my-2 text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="mx-4 my-2 text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}

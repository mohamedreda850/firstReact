import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (<>

      <nav  className="bg-[#2C3E50] z-40 flex items-center sticky top-0 right-0 left-0 p-4  h-[16vh]">
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <div className="text-white text-4xl font-bold cursor-pointer"><Link to='/'>START FRAMEWORK</Link></div>
          <div className="hidden md:flex space-x-6">
           
            <NavLink to='about' className="text-white  font-bold ">ABOUT</NavLink>
            <NavLink to='portfolio' className="text-white  font-bold ">PORTFOLIO</NavLink>
            <NavLink to='contact' className="text-white  font-bold">CONTACT</NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-[16vh] left-0 right-0 bg-[#2C3E50]`}>
          <NavLink to='about' className="block text-white px-2 py-1 m-4 hover:bg-gray-700">ABOUT</NavLink>
          <NavLink to='portfolio' className="block text-white px-2 py-1 m-4  hover:bg-gray-700">CONTACT</NavLink>
          <NavLink to='contact' className="block text-white px-2 py-1 m-4 hover:bg-gray-700">Contact</NavLink>
        </div>
      </nav>
      
      </>
   
      );
}

export default Navbar;
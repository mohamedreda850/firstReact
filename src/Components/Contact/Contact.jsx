import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col  items-center">
        <h1 className=" text-5xl font-bold text-center mt-4">
          CONATCT SECTION
        </h1>
        <div className="flex items-center my-5">
          <div className="w-24 h-1 bg-black mx-3"></div>
          <i class="fa-solid fa-star text-black text-2xl"></i>
          <div className="w-24 h-1 bg-black mx-3"></div>
        </div>
      </div>

      <div class="max-w-md mx-auto mb-32 px-5">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="user_name"
            id="user_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
            placeholder=" "
          />
          <label
            for="user_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            user name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="user_age"
            id="user_age"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
            placeholder=" "
            required
          />
          <label
            for="user_age"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            user age
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="user_email"
            id="floating_user_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_user_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            user email
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="user_password"
            id="floating_user_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
            placeholder=" "
            required
          />
          <label
            for="floating_user_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            user password
          </label>
        </div>

        <button
          type="submit"
          class="text-white bg-[#1ABC9C]    font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          send massage
        </button>
      </div>
    </div>
  );
}

import React,{ useState} from "react";
import styles from "styles/Login.module.css";
import Image from "next/image";
const login = () => {

  return <div className={styles.main}>
    
 
    {/* <htmlForm className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "> */}
    
    <form className="bg-gray-800 bg-opacity-30 w-[35rem] h-[30rem] rounded px-8 pt-6 pb-8" method="Post" >
      <div className="flex flex-col py-9">
        

<Image
      
      src="/girnar_circle_white.png"
      alt="Picture of the author"
      width={100}
      height={100}
        />
        
        <h1 className="text-3xl text-white flex item-center justify-center  bold">Login your Account</h1>
      </div>
      
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="Email" placeholder="Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center flex-col flex-end  justify-between">
      <button className="bg-gradient-to-r from-orange-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Login
      </button>
      
    </div>
  </form>
  <p className="text-center text-black-500 text-xl">
    &copy;2023 - PT Sundish Travel Indah -All rights reserved
    </p>
    </div>
 
  
};
export default login;

import React,{ use, useState} from "react";
import styles from "styles/Login.module.css";
import Router from "next/router";

import Image from "next/image";
const login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error,setError] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email)
    console.log(password)
    
    const response = await fetch(
      "http://18.139.85.219:8088/api/v1/user/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      // If the login was successful, redirect to the home page
      Router.push("/");
    } else {
      // If there was an error, display the error message
      setError(data.message);
    }
  };
  return <div className={styles.main}>
    
 
    {/* <htmlform className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "> */}
    
    <form onSubmit={handleSubmit} className="bg-gray-800 bg-opacity-30 w-[35rem] h-[30rem] rounded px-8 pt-6 pb-8" method="Post" >
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
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlform="username">
        Email
        </label>
    
      <input value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="Email" placeholder="Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlform="password">
        Password
      </label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center flex-col flex-end  justify-between">
      <button className="bg-gradient-to-r from-orange-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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

// import { useState } from "react";
// import Router from "next/router";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch(
  //     "http://18.139.85.219/api/v1/user/authenticate",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     }
  //   );
  //   const data = await response.json();
  //   if (response.ok) {
  //     // If the login was successful, redirect to the home page
  //     Router.push("/");
  //   } else {
  //     // If there was an error, display the error message
  //     setError(data.message);
  //   }
  // };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


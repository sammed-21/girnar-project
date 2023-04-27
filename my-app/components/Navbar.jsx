import React, { useState } from 'react'
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "@/styles/Navbar.module.css";
const Navbar = () => {
  const [purchase, setPurchase] = useState(false);
  const [sales, setSales] = useState(false);
  const [admin, setAdmin] = useState(false);
  // const { hasMounted } = useMounted();
  // const nav = hasMounted ? null : 0;

  return (
    <>

      {/* {" "}
      {/* <nav className={styles.mainnav}> */}
      {/* <nav className="flex  bg-pink text-black fixed top-0 decoration-none list-none h-[10vh] w-full item-center justify-center space-x-9 py-7"> */}
      <nav className="flex  bg-blue-300 text-black fixed top-0 decoration-none list-none h-[10vh] w-full item-center justify-center space-x-7 py-7">
        <Link href="/">
          {" "}
          <li>Home</li>{" "}
        </Link>
        <Link href="/vendor">
          {" "}
          <li>Vendor</li>{" "}
        </Link>

        <Link href="/customers">
          {" "}
          <li>Customer</li>{" "}
        </Link>



        <Link href="/purchases">
          {" "}


          <div
            onClick={() => setPurchase(!purchase)}
            className="overflow-hidden  w-[14vh] flex justify-center items-center
            hover:cursor-pointer
            ">

            Purchase <svg className="w-4 h-4 bg-transparent ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>


          <div
            className={`${purchase ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute justify-center flex flex-col z-40 mt-2 bg-grey-400 w-[30vh] decoration-none rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
            {/* className={`${dropdownOpen ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}> */}
            <li
              href="/"
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
            >
              <Link href='/payment' onClick={() => setPurchase(!purchase)}>

                Payment

              </Link>
            </li>
            <li
              href=" "
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
            >
              <Link href='/payment/add'>New PO</Link>
            </li>
          </div>
          {" "}
        </Link>



        <Link href="/sales">
          {" "}


          <div
            onClick={() => setSales(!sales)}
            className="overflow-hidden  w-[14vh] flex justify-center items-center
            hover:cursor-pointer
            ">

            Sales <svg className="w-4 h-4 bg-transparent ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>


          <div
            className={`${sales ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute justify-center flex flex-col z-40 mt-2 bg-grey-400 w-[30vh] decoration-none rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
            {/* className={`${dropdownOpen ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}> */}
            <li
              href="/"
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
            >
              <Link href='/' onClick={() => setSales(!sales)}>
                Invoice
              </Link>
            </li>
            <li
              href=" "
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
            >
              <Link href='/salesReceipt' onClick={() => setSales(!sales)} >Receipt</Link>
            </li>

          </div>









          {" "}
        </Link>

        <Link href="/purchase">
          {" "}


          <div
            onClick={() => setAdmin(!admin)}
            className="overflow-hidden  w-[14vh] flex justify-center items-center
            hover:cursor-pointer
            ">

            Admin <svg className="w-4 h-4 bg-transparent ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>


          <div
            className={`${admin ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute justify-center flex flex-col z-40 mt-2 bg-grey-400 w-[30vh] decoration-none rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
            {/* className={`${dropdownOpen ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}> */}
            <li
              href="/"
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
            >
              <Link href='/' onClick={() => setAdmin(!admin)}>
                Sales Category
              </Link>
            </li>
            <li
              href=" "
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
            >
              <Link href='/salesReceipt' onClick={() => setAdmin(!sales)} >Payment Type</Link>
            </li>
            <li
              href=" "
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
            >
              <Link href='/loyalty' onClick={() => setAdmin(!admin)} >Loyalty Point</Link>
            </li>
            <li
              href=" "
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
            >
              <Link href='/reedeemloyalty' onClick={() => setAdmin(!admin)} >Reedem Loyalty Point</Link>
            </li>

          </div>









          {" "}
        </Link>



        <Link href="/login">
          {" "}
          <li>Login</li>{" "}
        </Link>
      </nav>

    </>
  );

};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });


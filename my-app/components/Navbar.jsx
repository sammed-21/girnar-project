import React from "react";
import Link from "next/link";
// import styles from "@/styles/Navbar.module.css";
const Navbar = () => {
  
  return (
    <div className="flex ">
      {" "}
      {/* <nav className={styles.mainnav}> */}
      <nav className="flex bg-pink text-black decoration-none list-none h-[10vh] w-full item-center justify-center space-x-9 py-7">
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
        
       
     
        <Link href="/purchase">
          {" "}
          <li>Purchase</li>{" "}
        </Link>
        <Link href="/sales">
          {" "}
          <li>Sales</li>{" "}
        </Link>

    
      
        <Link href="/login">
          {" "}
          <li>Login</li>{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

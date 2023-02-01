import Link from 'next/link';
import { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    (typeof window !== 'undefined') && setCurrent(window.location.pathname);
  }, [(typeof window !== 'undefined') && window.location.pathname]);

  const handleNav = () => {
    setNav(!nav);
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        <li>
          <Link href='/'>HOME</Link>
        </li>
        <li>
          <a href='#contact'>CONTACT</a>
        </li>
        {user && (
          <>
            <li>
              <Link href='/user'>MY ACCOUNT</Link>
            </li>
            <li>
              <Link href="#" onClick={logout}>LOGOUT</Link>
            </li>
          </>
        )}
        
      </ul>
      <div className='flex justify-between py-2 px-4'>
        <FaFacebookF className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaGooglePlusG className='mx-4' />
        <FaInstagram className='mx-4' />

        {user ? (<Link href={'/user'} className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
            <div>
              {user.name}
            </div>
          </Link>) : (<Link href='/login'>Login / Register</Link>)}

      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <Link href='/'>Home</Link>
          </li>
          <li className='text-2xl py-8'>
            <a href='#gallery'>Gallery</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#deals'>Deals</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

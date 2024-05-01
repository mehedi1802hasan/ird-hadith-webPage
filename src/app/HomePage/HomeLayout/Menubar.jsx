import Link from 'next/link';
import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaSwatchbook } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { FiSend } from "react-icons/fi";

const Menubar = () => {
    return (
        <div className='bg-[#FFFFFF] w-32 fixed  '>
           <div className='flex flex-col justify-center items-center gap-16 h-screen'>
         
          <Link href='/'> <IoHomeOutline className='text-3xl hover:text-[#177453]' /></Link>
          <Link href='/'> <FaSwatchbook  className='text-3xl hover:text-[#177453]'/></Link>
          <Link href='/'> <IoBookOutline  className='text-3xl hover:text-[#177453]'/></Link>
          <Link href='/'> <LuBookmark  className='text-3xl hover:text-[#177453]'/></Link>
          <Link href='/'> <RxDashboard  className='text-3xl hover:text-[#177453]'/></Link>
          <Link href='/'> <FiSend  className='text-3xl hover:text-[#177453]'/></Link>
           </div>
        </div>
    );
};

export default Menubar;
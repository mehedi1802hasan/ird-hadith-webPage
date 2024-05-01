import Image from "next/image";
import React from "react";
import homeLogo from '../../assest/home-logo.png';
import { GiReceiveMoney } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 ">
        <div className="flex gap-6">
        <Image
        className="h-11"
      src={homeLogo}
      width={45}
    //   height={3}
      alt="Picture of the author"
    />
          <h3 className="flex flex-col justify-center  ">
            <p className="font-bold text-lg">হাদিস সমূহ</p>

            <p className=" text-sm">হাদিস পড়ুন শিখুন এবং জানুন</p>
          </h3>
        </div>
        <div className="flex gap-[72px] items-center ">
          <div>
            <input  type="text" className="border p-3 rounded-md" placeholder="Search Hadith " />
          </div>
          <button className="bg-[#2B9E76] p-3 rounded-md text-white flex items-center  gap-2 "><span>সাপোর্ট করুন</span> <GiReceiveMoney className="text-2xl " />
</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

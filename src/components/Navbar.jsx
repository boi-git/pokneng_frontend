import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 left-0 w-full bg-white shadow flex justify-between items-center h-24 max-[124px] max-autp px-4 text-[#333333]">
      <h1 className="w-full text-3xl font-bold text-[#181818] m-4">Pokneng.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Pokneng</li>
        <li className="p-4">News</li>
        <li className="p-4">Team</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[30%] border-r h-full border-r-gray-900 bg-white ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#181818] m-4">
          Pokneng.
        </h1>
        <ul className="pt-8">
          <li className="p-4">Home</li>
          <li className="p-4">Pokneng</li>
          <li className="p-4">News</li>
          <li className="p-4">Team</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      icon: <TbTruckDelivery size={25} className=" mr-4" />,
      name: "Orders",
      id: 1,
    },
    {
      icon: <MdFavorite size={25} className=" mr-4" />,
      name: "Favorites",
      id: 2,
    },
    {
      icon: <FaWallet size={25} className=" mr-4" />,
      name: "Wallet",
      id: 3,
    },
    {
      icon: <MdHelp size={25} className=" mr-4" />,
      name: "Help",
      id: 4,
    },
    {
      icon: <AiFillTag size={25} className=" mr-4" />,
      name: "Promotions",
      id: 5,
    },
    {
      icon: <BsFillSaveFill size={25} className=" mr-4" />,
      name: "Best Ones",
      id: 6,
    },
    {
      icon: <FaUserFriends size={25} className=" mr-4" />,
      name: "Invite Friends",
      id: 7,
    },
  ];
  const [toggle, setToggle] = useState(false);
  const change = () => setToggle(!toggle);
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className=" flex items-center">
        <div onClick={change} className=" cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className=" text-2xl sm:text-3xl  lg:text-4xl px-2">
          Fem<span className=" font-bold ">Eats</span>
        </h1>
        <div className=" hidden  lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className=" bg-black text-white rounded-full p-2">Delivery</p>
          <p className=" p-2">Pickup</p>
        </div>
      </div>

      {/* search section */}
      <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
          name=""
          id=""
        />
      </div>
      {/* cart */}
      <button className=" bg-black text-white hidden md:flex items-center py-2 rounded-full ">
        <BsFillCartFill size={20} className=" mr-2" /> Cart
      </button>

      {/* menu */}
      {toggle ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10  top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* other menu */}

      <div
        className={
          toggle
            ? " fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : '" fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"'
        }
      >
        <AiOutlineClose
          onClick={change}
          size={30}
          className=" absolute right-4 top-4 cursor-pointer"
        />
        <h2 className=" text-2xl p-4 ">
          Femi <span className=" font-bold">Eats</span>
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800">
            {links.map((items) => {
              const { id, name, icon } = items;
              return (
                <li key={id} className=" text-xl py-4 flex">
                  {icon}
                  {name}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;

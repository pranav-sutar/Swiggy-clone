
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { BiHelpCircle } from "react-icons/bi";
import { GoSignIn } from "react-icons/go";
import { BiCartAdd } from "react-icons/bi";
import Category from "./Category";


export default function Header() {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = ()=>{
        setToggle(true);
    }
    const hideSideMenu = ()=>{
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "Search",
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "new"
        },
        {
            icon: <GoSignIn />,
            name: "Sign In",
        },
        {
            icon: <BiHelpCircle />,
            name: "Help",
        },
        {
            icon: <BiCartAdd />,
            name: "Cart",
            sup: "[0]"
        },

    ]

  return (
    <>
    <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu}  style={{
        visibility:toggle ? "visible" : "hidden",
        opacity: toggle ? 1 : 0,
    }}>
        <div onClick={(e)=>{
            e.stopPropagation(); //it stops parent onclick function
        }} className="w-[400px] bg-white h-full absolute duration-[400ms]"
        style={{
            left: toggle ? '0%' : '-100%',
        }}>
            
        </div>
    </div>
      <header className="p-[15px] shadow-xl ">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[70px]">
            <img src="images/logo.png" className="w-full" alt="logo" />
          </div>
          <div>
            <span className="cursor-pointer ml-5 hover:text-[#ff6a2b] hover:border-[#ff8316] font-bold border-b-[3px] border-black">Kagal </span> Kolhapur, maharashtra <RxCaretDown onClick={showSideMenu} className="inline cursor-pointer  text-[#e16b11] font-bold text-[20px] "/>
          </div>
          <nav className="flex items-center list-none gap-10 ml-auto mr-2 font-semibold text-[13px]"> 
            {
                links.map((link, index)=>{
                    return <li key={index} className="items-center flex gap-2 hover:text-[#ff6932] cursor-pointer">
                        {link.icon}
                        {link.name}
                        <sup className="text-[red]">{link.sup}</sup>
                    </li>
                })
            }
        </nav>
        
        </div>
      </header>
    </>
  );
}

import React, { useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { gsap } from "gsap";

const NavBar = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

   
    tl.fromTo(
      ".logo",
      { y: -400, opacity: 0 },   
      { y: 0, opacity: 1, duration: 1    } 
    )
    
      .fromTo(
        ".nav-links li",
        { y: -300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
        "-=0.5"
      )
    
      .fromTo(
        ".nav-icons > *",
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
        "-=1"
      );
  }, []);

  return (
    <nav
      className="h-[70px] flex pl-15 items-center text-[1rem]
        font-[2px] text-white bg-black"
    >
  
      <aside className="logo dance text-[30px]">Feans</aside>

      
      <aside>
        <ul className="nav-links flex gap-[4rem] ml-75">
          <li>
            <a href="" className="hover:text-orange-300">HOME</a>
          </li>
          <li>
            <a href="" className="hover:text-orange-300">MENU</a>
          </li>
          <li>
            <a href="" className="hover:text-orange-300">ABOUT</a>
          </li>
          <li>
            <a href="" className="hover:text-orange-300">BOOK TABLE</a>
          </li>
        </ul>
      </aside>

    
      <aside className="nav-icons ml-[125px] gap-[30px] flex mt-3">
        <a href="" className="hover:text-orange-300 text-white"><FaRegUser /></a>
        <a href="" className="hover:text-orange-300 ml-[25px]"><IoMdCart /></a>
        <a href="" className="hover:text-orange-300 ml-[25px]"><FaSearch /></a>

        <button
          className="ml-[14px] bg-yellow-400 text-white px-2 py-1 rounded-full
             font-semibold hover:bg-yellow-500 transition"
        >
          Order Online
        </button>
      </aside>
    </nav>
  );
};

export default NavBar;

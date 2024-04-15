import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="w-full">
        <nav className="w-full max-w-[1100px] mx-auto px-6 xl:px-0 py-4">
            <div className="w-full flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-teal cursor-pointer">EDUCA EAD</h1>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex items-center gap-4 font-semibold">
                        <Link
                            className="cursor-pointer hover:text-[#999]"
                            to="home" spy={true} duration={400} smooth={true}
                        >
                            Home
                        </Link>
                        <Link 
                            className="cursor-pointer hover:text-[#999]" 
                            to="about" spy={true} duration={400} smooth={true}
                        >
                            About
                        </Link>
                        <Link 
                            className="cursor-pointer hover:text-[#999]"
                            to="courses" spy={true} duration={400} smooth={true}
                        >
                            Courses
                        </Link>
                        <Link 
                            className="cursor-pointer hover:text-[#999]"
                            to="teacher" spy={true} duration={400} smooth={true}
                        >
                            Teacher
                        </Link>
                        <Link 
                            className="cursor-pointer hover:text-[#999]"
                            to="contact" spy={true} duration={400} smooth={true}
                        >
                            Contact
                        </Link>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <button className="border border-black font-bold px-6 py-2 rounded-md
                    hover:bg-black hover:text-slate-100 duration-200">
                        Sign Up
                    </button>
                </div>
                <div className="flex md:hidden">
                    <IoMenu className="text-teal hover:text-gray-600 cursor-pointer" size={35} />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
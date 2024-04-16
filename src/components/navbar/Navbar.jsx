import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import Mobile from './mobile/Mobile';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const handleClick = () => {
    setMobile(e => !e);
  }
  return (
    <header className="w-full">
        <nav className="w-full max-w-[1200px] mx-auto px-6 xl:px-0 py-4">
            <div className="w-full flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-teal cursor-pointer">EDUCA EAD</h1>
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
                    hover:opacity-70 duration-200">
                        Sign Up
                    </button>
                </div>
                <div onClick={handleClick} className="flex md:hidden">
                    <IoMenu className="text-teal hover:text-gray-600 cursor-pointer" size={35} />
                </div>
            </div>
        </nav>
        <Mobile mobile={mobile} setMobile={setMobile} />
    </header>
  )
}

export default Navbar;
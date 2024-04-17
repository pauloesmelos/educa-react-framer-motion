import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import Mobile from './mobile/Mobile';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const [scrollMenu, setScrollMenu] = React.useState(false);
  const style = {
    menu: {
        active: "w-full fixed z-30 bg-white shadow-lg",
        notActive: "w-full fixed z-30"
    },
    nav: {
        active: "w-full max-w-[1200px] mx-auto px-5 xl:px-0 py-2",
        notActive: "w-full max-w-[1200px] mx-auto px-5 xl:px-0 py-6"
    }
  }
  const handleClick = () => {
    setMobile(e => !e);
  }

  React.useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 0) {
            setScrollMenu(true);
        }
        else {
            setScrollMenu(false);
        }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header className={scrollMenu ? style.menu.active : style.menu.notActive}>
        <nav className={scrollMenu ? style.nav.active : style.nav.notActive}>
            <div className="w-full flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-bold text-teal cursor-pointer">EDUCA EAD</h1>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex items-center gap-4 font-semibold text-lg">
                        <Link
                            className="cursor-pointer hover:text-[#999]"
                            to="home" spy={true} duration={500} smooth={true}
                        >
                            Home
                        </Link>
                        <Link 
                            className="cursor-pointer hover:text-[#999]" 
                            to="about" spy={true} duration={500} smooth={true}
                        >
                            About
                        </Link>
                        <Link 
                            className="cursor-pointer hover:text-[#999]"
                            to="courses" spy={true} duration={500} smooth={true}
                        >
                            Courses
                        </Link>
                        <Link 
                            className="cursor-pointer hover:text-[#999]"
                            to="teacher" spy={true} duration={500} smooth={true}
                        >
                            Teacher
                        </Link>
                        <Link 
                            className="cursor-pointer hover:text-[#999]"
                            to="contact" spy={true} duration={500} smooth={true}
                        >
                            Contact
                        </Link>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <button className="border border-emerald-400 bg-emerald-400 font-bold px-8 py-2 rounded-md
                    duration-200 text-lg hover:bg-emerald-500">
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
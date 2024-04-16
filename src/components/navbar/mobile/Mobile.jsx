import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Mobile = ({ mobile, setMobile }) => {
  const style = {
    open: "w-full h-full fixed left-0 top-0 bg-teal ml-0 duration-200 ease-linear",
    close: "w-full h-full fixed left-0 top-0 bg-teal ml-[-100%] duration-200 ease-linear"
  }
  return (
    <nav className={mobile ? style.open : style.close}>
        <div className="w-full h-full px-6 py-3">
            <div className="w-full flex justify-between">
                <h1 className="text-3xl font-bold text-white cursor-pointer">EDUCA</h1>
                <IoCloseSharp 
                    onClick={() => setMobile(e => !e)} 
                    className="text-white cursor-pointer hover:opacity-60" 
                    size={40} 
                />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <ul className="text-white font-bold text-3xl flex flex-col gap-5">
                    <li className="hover:opacity-60 cursor-pointer">HOME</li>
                    <li className="hover:opacity-60 cursor-pointer">ABOUT</li>
                    <li className="hover:opacity-60 cursor-pointer">COURSES</li>
                    <li className="hover:opacity-60 cursor-pointer">CONTACT</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Mobile;
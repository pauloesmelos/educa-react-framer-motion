import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ item }) => {
  const { title, answer } = item;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(state => !state);
  }
  return (
    <div onClick={handleOpen} className="w-full cursor-pointer">
        <div className="w-full flex justify-between hover:opacity-60">
            <h2 className="font-bold text-lg sm:text-2xl text-[#333]">{title}</h2>
            <IoIosArrowDown 
                size={30} 
                className={open ? "text-slate-700 rotate-180 duration-200 ease-linear" : "text-slate-700 duration-200"} 
            />
        </div>
        {open && 
            <p className="sm:text-lg text-teal font-semibold leading-7">
                R: {answer}
            </p>
        }
    </div>
  )
}

export default Accordion;
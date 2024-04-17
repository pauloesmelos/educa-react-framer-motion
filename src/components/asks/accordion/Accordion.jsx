import { AnimatePresence, motion } from "framer-motion";
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
            <h2 className="font-bold text-xl sm:text-2xl text-[#333]">{title}</h2>
            <IoIosArrowDown 
                size={30} 
                className={open ? "text-slate-700 rotate-180 duration-200 ease-linear" : "text-slate-700 duration-200"} 
            />
        </div>
        {open && 
            <AnimatePresence>
              <motion.p 
              className="sm:text-lg text-slate-500 font-semibold leading-7"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: .3}}
              style={{ overflow: "hidden" }}
              >
                R: {answer}
              </motion.p>
            </AnimatePresence>
        }
    </div>
  )
}

export default Accordion;
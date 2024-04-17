import React from 'react';
import Teacher1 from "../../assets/teacher1.png";
import Teacher2 from "../../assets/teacher2.png";
import { motion } from "framer-motion";

const Teacher = () => {
  return (
    <section className="w-full pt-24 overflow-x-hidden" id="teacher">
        <div className="w-full max-w-[1100px] mx-auto px-6 xl:px-0">
            <div>
                <h1 className="mb-16 font-bold text-3xl sm:text-4xl text-center">
                    The <span className="text-teal">Bests Teachers</span> in Educa
                </h1>
            </div>
            <div className="flex flex-col gap-16">
                {/* container 1 */}
                <div className="grid sm:grid-cols-2 place-items-center gap-8 sm:gap-0">
                    <motion.div 
                        className="flex flex-col gap-6"
                        initial={{ transform: "translateX(-120px)", opacity: 0 }}
                        whileInView={{ transform: "translateX(0)", opacity: 1 }}
                        transition={{ duration: .7 }}
                    >
                        <h1 className="font-bold text-2xl sm:text-3xl max-w-[320px]">
                            Become {" "}
                            <span className="text-teal">An Instructor </span>
                            of Our Platform
                        </h1>
                        <p className="text-slate-500 leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laborum vel dolorum maxime praesentium culpa reiciendis voluptatibus
                            eum est esse ipsum rerum quod, eligendi magni ex perspiciatis, 
                            unde totam accusantium nobis!
                        </p>
                        <button className="px-8 py-3 bg-teal text-white font-bold rounded-md
                        hover:bg-white hover:text-teal duration-200 border-[3px] border-teal">
                            Start Teaching
                        </button>
                    </motion.div>
                    <div className="sm:pl-24">
                        <img 
                            className="h-[350px] object-cover rounded-lg sm:border-4 border-black
                            w-full" 
                            src={Teacher1} 
                            alt="Teacher One" 
                            title="Teacher One" 
                        />
                    </div>
                </div>
                {/* container 2 */}
                <div className="grid sm:grid-cols-2 gap-8 sm:gap-0 place-items-center">
                    <motion.div 
                        className="flex flex-col gap-6"
                        initial={{ transform: "translateX(120px)", opacity: 0 }}
                        whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                        transition={{ duration: .7 }}
                        style={{ overflow: "hidden"}}
                    >
                        <h1 className="font-bold text-2xl sm:text-3xl max-w-[320px]">
                            Become {" "}
                            <span className="text-teal">The Best </span>
                            In the One Platform
                        </h1>
                        <p className="text-slate-500 leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laborum vel dolorum maxime praesentium culpa reiciendis voluptatibus
                            eum est esse ipsum rerum quod, eligendi magni ex perspiciatis, 
                            unde totam accusantium nobis!
                        </p>
                        <button className="px-8 py-3 bg-teal text-white font-bold rounded-md
                        hover:bg-white hover:text-teal duration-200 border-[3px] border-teal">
                            Get Started
                        </button>
                    </motion.div>
                    <div className="sm:row-start-1 sm:mr-[190px]">
                        <img 
                            className="h-[350px] object-cover rounded-lg sm:border-4 border-black
                            w-full" 
                            src={Teacher2} 
                            alt="Teacher Two" 
                            title="Teacher Two" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Teacher;
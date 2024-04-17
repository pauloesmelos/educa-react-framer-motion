import React from 'react';
import AboutImage from "../../assets/about.jpg";
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section className="pt-24 w-full" id="about">
        <div className="w-full max-w-[1200px] mx-auto xl:px-0 px-6">
            <div className="w-full grid md:grid-cols-2 gap-16 place-items-center">
                <div>
                    <img
                        className="object-cover border-4 border-teal p-2"
                        src={AboutImage} 
                        alt="About Image" 
                        title="About Image"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-4xl md:max-w-[350px]">
                        We provide the best
                        {" "}
                        <ReactTyped
                            className="text-teal"
                            strings={[
                                "online courses",
                                "online certifications",
                                "online experiences"
                            ]} 
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                    </h1>
                    <p className="text-slate-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit assumenda iste id 
                        vero quis, eos, asperiores voluptatum omnis cum, inventore ducimus illum? 
                        Perspiciatis eius animi alias nam, sed expedita est.
                    </p>
                    <div>
                        <button className="w-full md:w-[300px] bg-gradient-to-r from-[#004d66] to-[#008080] text-white
                        font-semibold px-16 py-3 animate-kick">
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;
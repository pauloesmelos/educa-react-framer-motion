import React from 'react';
import { logos } from "../../../api/API.jsx";
const Logos = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto pt-12">
        <div className="w-full">
            <h3 className="font-bold text-center">
                We collaborate with
                <span className="text-teal">
                    100+ leading universities and companies
                </span>
            </h3>
        </div>
        <div className="flex justify-between items-center pt-8">
            {logos.map((img,index) => (
                <div key={index * Math.random()}>
                    <img 
                        className="object-cover h-[50px]" 
                        src={img} 
                        alt="Logo" 
                        title="Logo"
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Logos;
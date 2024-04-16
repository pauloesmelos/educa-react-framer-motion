import React from 'react';

const Course = ({ title, icon, text }) => {
  return (
    <div className="w-full md:w-[210px] bg-white px-16 py-6 flex flex-col justify-center items-center gap-4
    rounded-md hover:bg-slate-200">
        <div className="text-teal text-3xl text-center">
            {icon}
        </div>
        <div>
            <h3 className="font-bold">{title}</h3>
        </div>
        <div className="w-full">
            <p className="w-full cursor-pointer hover:text-[#555]">{text}</p>
        </div>
    </div>
  )
}

export default Course;
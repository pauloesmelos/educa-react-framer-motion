import React from 'react';

const Course = ({ title, icon, text }) => {
  return (
    <div className="bg-white px-16 py-6 flex flex-col justify-center items-center gap-4
    rounded-md">
        <div className="text-teal text-3xl text-center">
            {icon}
        </div>
        <div>
            <h3 className="font-bold">{title}</h3>
        </div>
        <div>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Course;
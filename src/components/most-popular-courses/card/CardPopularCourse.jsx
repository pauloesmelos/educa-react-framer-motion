import React from 'react';
import { FaRegStar, FaRegUser } from "react-icons/fa";
const CardPopularCourse = ({ title, description, students, stars, price, image }) => {
  const truncateDescription = (text,limit) => {
    const str = text?.split("").slice(0,limit).join("");
    return str + "...";
  }
  return (
    <div className="bg-white p-4 h-[400px] flex flex-col gap-4">
        <div>
            <img 
                className="object-cover" 
                src={image} 
                alt="Course EDUCA" 
                title="Course EDUCA" 
            />
        </div>
        <div>
            <p className="text-teal">{truncateDescription(description,28)}</p>
        </div>
        <div>
            <h4 className="font-bold">{title}</h4>
        </div>
        <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                    <FaRegUser className="text-teal" />
                </div>
                <p>{students}</p>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                    <FaRegStar className="text-yellow-500" />
                </div>
                <p>{stars}</p>
            </div>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default CardPopularCourse;
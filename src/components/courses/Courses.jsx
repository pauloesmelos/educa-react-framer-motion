import React from 'react';
import { categories } from '../../api/API';
import Course from './card/Course';

const Courses = () => {
  
  return (
    <section className="w-full pt-24" id="courses">
        <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
            <div className="w-full">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-4xl text-center">
                        Our Top {" "}
                        <span className="text-teal">Categories</span>
                    </h1>
                    <p className="text-slate-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat quia culpa placeat iusto ad inventore soluta commodi rerum modi, 
                        est distinctio consequuntur similique dolores, ipsam hic eius animi velit 
                        doloribus.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-14">
                    {categories.map((category, index) => (
                        <Course 
                            key={index * Math.random()}
                            title={category.title}
                            icon={category.icon}
                            text={category.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Courses;
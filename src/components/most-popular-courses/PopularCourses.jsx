import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { courses } from '../../api/API';
import CardPopularCourse from './card/CardPopularCourse';

const PopularCourses = () => {
  return (
    <div className="w-full pt-16">
        <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
            <h1 className="text-4xl font-bold text-center pb-6">
                All <span className="text-teal">Top</span> Courses
            </h1>
            <Swiper 
                spaceBetween={25} 
                slidesPerView={3} 
                navigation
                modules={[Pagination, Navigation, Scrollbar, A11y]}
            >
               {courses.map((element, index) => (
                <SwiperSlide 
                key={index * Math.random()}
                >
                    <CardPopularCourse
                        title={element.title} 
                        description={element.description} 
                        students={element.students} 
                        stars={element.stars} 
                        price={element.price} 
                        image={element.image}
                    />
                </SwiperSlide>
               ))}
            </Swiper>
        </div>
    </div>
  )
}

export default PopularCourses;
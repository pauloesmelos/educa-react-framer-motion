import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { courses } from '../../api/API';
import CardPopularCourse from './card/CardPopularCourse';

const PopularCourses = () => {
  return (
    <div className="w-full pt-16">
        <div className="w-full max-w-[1100px] mx-auto px-6 xl:px-0">
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
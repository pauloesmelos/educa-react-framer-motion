import React from 'react';
import { accordion } from '../../api/API';
import Accordion from './accordion/Accordion';

const Asks = () => {

  return (
    <section className="w-full pt-24">
        <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
            <div className="w-full">
                <h1 className="text-3xl sm:text-4xl font-bold text-center">
                    Frequently <span className="text-teal">Asked Question</span>
                </h1>
            </div>
            {/* questions */}
            <div className="w-full max-w-[900px] mx-auto pt-6 flex flex-col gap-5">
             {accordion.map((item, index) => (
                <Accordion key={index * Math.random()} item={item} />
             ))}
            </div>
        </div>
    </section>
  )
}

export default Asks;
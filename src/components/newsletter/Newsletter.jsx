import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full pt-24" id="contact">
        <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
            <div>
                <h1 className="font-bold text-3xl sm:text-4xl text-center">
                    Subscribe Newsletter
                </h1>
            </div>
            {/* input and button */}
            <div className="pt-4">
                <p className="text-slate-500 leading-7 text-center text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Pariatur ex atque accusamus. Ducimus beatae aperiam, non 
                    suscipit possimus quia sint consequatur perferendis voluptate dolor 
                    accusamus provident repellat distinctio officia sed?
                </p>
                <div className="flex justify-center items-center pt-4">
                    <input 
                        type="email"
                        placeholder="Your email"
                        className="w-[300px] border-2 border-gray-300 focus:shadow-lg outline-none
                        py-2 px-2"
                     />
                     <button className="border-[3px] bg-teal border-teal text-white font-bold
                     py-2 w-[150px] hover:bg-white hover:text-teal duration-150">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter;
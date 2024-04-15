import React from 'react';
import HeroImage from "../../assets/hero.png";
import Logos from './logos/Logos';

const Hero = () => {
  return (
    <section className="w-full pt-16" id="hero">
        <div className="w-full max-w-[1100px] mx-auto px-6 xl:px-0">
            <div className="w-full grid md:grid-cols-2 mx-auto gap-8">
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-bold text-teal">
                        your learning complete
                    </h4>
                    <h1 className="text-4xl font-bold text-black">
                        This is the new way to learn online
                    </h1>
                    <p className="text-slate-500">
                        At EDUCA, we believe that education should be accessible to all, regardless of geographical location or time constraints. That's why we've created an innovative online learning platform that empowers learners to pursue their educational goals at their own pace, from anywhere in the world.
                    </p>
                    <div className="flex items-center gap-6">
                        <button className="border bg-teal text-white font-bold px-6 py-2 
                        hover:opacity-80">
                            Get Started
                        </button>
                        <button className="border border-black/70 text-black font-bold px-6 py-2 rounded-md
                        hover:bg-black/70 hover:text-white duration-200">
                            Discover
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover h-[400px]"
                        src={HeroImage} 
                        alt="Happy Students" 
                        title="Happy Students" 
                    />
                </div>
            </div>
            <Logos />
        </div>
    </section>
  )
}

export default Hero;
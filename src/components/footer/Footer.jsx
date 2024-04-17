import React from 'react';
import { FaGithub, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full p-8 bg-teal mt-32">
        <div className="w-full max-w-[1300px] mx-auto text-white grid grid-cols-2
        md:grid-cols-4">
          {/* get started */}
          <div className="w-full">
            <h3 className="font-bold text-xl md:text-3xl mb-5">Get Started</h3>
            <p className="text-slate-200 text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad, minima distinctio tempore
              repellendus vero eius excepturi.
            </p>
          </div>
          {/* services */}
          <div className="ml-12">
            <h3 className="font-bold text-xl md:text-3xl mb-5">Services</h3>
            <ul className="flex flex-col gap-4 text-sm md:text-lg">
              <li className="hover:opacity-70 duration-150 cursor-pointer">Web Design</li>
              <li className="hover:opacity-70 duration-150 cursor-pointer">Front-end</li>
              <li className="hover:opacity-70 duration-150 cursor-pointer">Back-end</li>
              <li className="hover:opacity-70 duration-150 cursor-pointer">Science</li>
            </ul>
          </div>
          {/* company */}
          <div className="mt-16 md:mt-0">
            <h3 className="font-bold text-xl md:text-3xl mb-5">Company</h3>
            <ul className="flex flex-col gap-4 text-sm md:text-lg">
              <li className="hover:opacity-70 duration-150 cursor-pointer">Sitemap</li>
              <li className="hover:opacity-70 duration-150 cursor-pointer">About</li>
              <li className="hover:opacity-70 duration-150 cursor-pointer">Policy</li>
              <li className="hover:opacity-70 duration-150 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
          {/* follow us */}
          <div className="ml-12 md:ml-0 mt-16 md:mt-0">
            <h3 className="font-bold text-xl md:text-3xl mb-5">Follow Us</h3>
            <ul className="flex flex-col gap-4 text-sm md:text-lg">
              <li>educa@org.com.br</li>
              <li>+5511978545448</li>
              <div className="flex items-center gap-5 text-xl md:text-3xl">
                <FaGithub className="hover:scale-[1.15] duration-150 cursor-pointer"/>
                <FaInstagram className="hover:scale-[1.15] duration-150 cursor-pointer"/>
                <FaTwitter className="hover:scale-[1.15] duration-150 cursor-pointer" />
                <FaPinterest className="hover:scale-[1.15] duration-150 cursor-pointer"/>
              </div>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
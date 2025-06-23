import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { PiGlobeBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#263238] text-white px-4 sm:px-6 md:px-8 lg:px-10 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center gap-[35%]">
          
         
          <div className="flex-shrink-0 lg:max-w-xs">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Nexcent</h1>
            <p className="text-sm mb-3 text-gray-300">Copyright © 2020 Nexcent ltd.</p>
            <p className="text-sm mb-6 text-gray-300">All rights reserved</p>
            
     
            <div className="flex gap-3 sm:gap-4">
              <div className="bg-opacity-10 p-2 border border-gray-400 hover:border-white rounded-full transition-colors cursor-pointer hover:bg-white hover:bg-opacity-10">
                <FaInstagram size={18} />
              </div>
              <div className="bg-opacity-10 p-2 border border-gray-400 hover:border-white rounded-full transition-colors cursor-pointer hover:bg-white hover:bg-opacity-10">
                <PiGlobeBold size={18} />
              </div>
              <div className="bg-opacity-10 p-2 border border-gray-400 hover:border-white rounded-full transition-colors cursor-pointer hover:bg-white hover:bg-opacity-10">
                <FaTwitter size={18} />
              </div>
              <div className="bg-opacity-10 p-2 border border-gray-400 hover:border-white rounded-full transition-colors cursor-pointer hover:bg-white hover:bg-opacity-10">
                <FaYoutube size={18} />
              </div>
            </div>
          </div>

    
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 flex-grow">
            
        
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20">
              
            
              <div className="min-w-fit">
                <h2 className="font-bold mb-4 text-lg">Company</h2>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="hover:text-white transition-colors cursor-pointer">About us</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Contact us</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Testimonials</li>
                </ul>
              </div>

         
              <div className="min-w-fit">
                <h2 className="font-bold mb-4 text-lg">Support</h2>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="hover:text-white transition-colors cursor-pointer">Help center</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Terms of service</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Legal</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Privacy policy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Status</li>
                </ul>
              </div>
            </div>

         
            <div className="flex-shrink-0 lg:min-w-fit">
              <h2 className="font-bold mb-4 text-lg">Stay up to date</h2>
              <div className="bg-white rounded-md flex items-center px-3 py-2 w-full max-w-[280px] text-black shadow-sm">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent outline-none flex-grow text-sm placeholder-gray-500"
                />
                <button className="ml-2 hover:text-gray-800 transition-colors">
                  <FiSend size={18} className="text-gray-600" />
                </button>
              </div>
            </div>

          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
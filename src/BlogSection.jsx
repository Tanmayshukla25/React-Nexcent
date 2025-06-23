import React from "react";
import blog1 from "./Images/blog1.png";
import blog2 from "./Images/blog2.png";
import blog3 from "./Images/blog3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogSection = () => {
  return (
    <section className="text-center py-16 px-6 mb-20 bg-white">
      <h2 className="text-4xl font-bold text-[#4d4d4d] mb-4">
        Caring is the new marketing
      </h2>
      <p className="text-[#4d4d4d] max-w-2xl mx-auto mb-12">
        The Nexcent blog is the best place to read about the latest membership insights,
        trends and more. See who's joining the community, read about how our
        community are increasing their membership income and lot's more.
      </p>

      <div className="flex flex-col md:flex-row justify-center text-center items-start gap-8">
    
        <div className="relative w-full max-w-xs bg-white rounded-lg shadow-md ">
          <img src={blog1} alt="Blog 1" className="w-full h-60 object-cover rounded-[10px]" />
          <div className="bg-gray-100 p-6 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Creating Streamlined Safeguarding Processes with OneRen
            </h3>
            <a
              href="#"
              className="text-green-500 font-bold flex items-center justify-center gap-1"
            >
              Readmore <span className="text-lg"><FaArrowRightLong /></span>
            </a>
          </div>
        </div>

   
        <div className="relative w-full max-w-xs bg-white rounded-lg shadow-md ">
          <img src={blog2} alt="Blog 2" className="w-full h-60 object-cover rounded-[10px]" />
          <div className="bg-gray-100 p-6 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              What are your safeguarding responsibilities and how can you manage them?
            </h3>
            <a
              href="#"
              className="text-green-500 font-bold flex items-center justify-center gap-1"
            >
              Readmore <span className="text-lg"><FaArrowRightLong /></span>
            </a>
          </div>
        </div>

   
        <div className="relative w-full max-w-xs bg-white rounded-lg shadow-md ">
          <img src={blog3} alt="Blog 3" className="w-full h-60 object-cover rounded-[10px]" />
          <div className="bg-gray-100 p-6 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Revamping the Membership Model with Triathlon Australia
            </h3>
            <a
              href="#"
              className="text-green-500 font-bold flex items-center justify-center gap-1"
            >
              Readmore <span className="text-lg"><FaArrowRightLong /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import React from "react";
import manageOne from "./Images/ManageImageOne.svg";
import manageSecond from "./Images/manageSecond.svg";
import manageThird from "./Images/Managethird.svg";

const ManageComponent = () => {
  return (
    <section className="bg-white py-20 px-6">
    
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4d4d4d] leading-snug">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-md text-gray-700 mt-6 font-medium">
          Who is Nextcent suitable for?
        </p>
      </div>

   
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
        
        <div className=" rounded-xl p-8  text-center w-full max-w-xs">
          <div className="rounded-md inline-block p-3 mb-4">
            <img src={manageOne} alt="Membership Organisations" className="w-10 h-10" />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Membership Organisations
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

    
        <div className=" rounded-xl p-8 text-center w-full max-w-xs">
          <div className=" rounded-md inline-block p-3 mb-4">
            <img src={manageSecond} alt="National Associations" className="w-10 h-10" />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            National Associations
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

       
        <div className=" rounded-xl p-8  text-center w-full max-w-xs">
          <div className=" rounded-md inline-block p-3 mb-4">
            <img src={manageThird} alt="Clubs And Groups" className="w-10 h-10" />
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Clubs And Groups
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManageComponent;

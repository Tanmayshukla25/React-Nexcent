import React from "react";
import membersIcon from "./Images/membersIcon.svg";
import clubsIcon from "./Images/clubs.png";
import bookingsIcon from "./Images/bookings.svg";
import paymentsIcon from "./Images/payments.svg";

const Busniess = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        
   
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800  mb-6">
            Helping a local <br />
            <span className="text-green-500">business reinvent itself</span>
          </h2>
          <p className="text-md text-gray-700 my-10 font-medium">
            We reached here with our hard work and dedication
          </p>
        </div>

      
        <div className="md:w-1/2 flex flex-wrap gap-x-10 gap-y-8">
          
        
          <div className="flex items-center gap-4 w-[45%]">
            <img src={membersIcon} alt="Members" className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">2,245,341</h3>
              <p className="text-sm text-gray-600">Members</p>
            </div>
          </div>

     
          <div className="flex items-center gap-4 w-[45%]">
            <img src={clubsIcon} alt="Clubs" className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">46,328</h3>
              <p className="text-sm text-gray-600">Clubs</p>
            </div>
          </div>

         
          <div className="flex items-center gap-4 w-[45%]">
            <img src={bookingsIcon} alt="Event Bookings" className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">828,867</h3>
              <p className="text-sm text-gray-600">Event Bookings</p>
            </div>
          </div>

     
          <div className="flex items-center gap-4 w-[45%]">
            <img src={paymentsIcon} alt="Payments" className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">1,926,436</h3>
              <p className="text-sm text-gray-600">Payments</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Busniess;

import React, { useState } from 'react'
import Logo from "./Images/Logo.svg"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-15 py-4">

        <div className="flex items-center gap-2">
          <img src={Logo} alt="Nexcent Logo" className="w-8 h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-shadow">Nexcent</h1>
        </div>

  
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium text-gray-800">
          <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200">Home</li>
          <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200">Service</li>
          <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200">Features</li>
          <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200">Product</li>
          <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200">Testimonial</li>
          <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200">FAQ</li>
        </ul>

   
        <div className="hidden md:flex gap-3 lg:gap-4">
          <button className="px-3 lg:px-4 py-2 bg-gray-100 text-green-600 rounded-md hover:bg-gray-200 transition duration-200 text-sm lg:text-base">
            Login
          </button>
          <button className="px-3 lg:px-4 py-2 bg-[#4caf4f] text-black font-semibold rounded-md hover:bg-green-600 transition duration-200 text-sm lg:text-base">
            Sign up
          </button>
        </div>

          <button 
          className="lg:hidden flex flex-col gap-1 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

     
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 bg-gray-50 border-t">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200 py-2">Home</li>
            <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200 py-2">Service</li>
            <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200 py-2">Features</li>
            <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200 py-2">Product</li>
            <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200 py-2">Testimonial</li>
            <li className="cursor-pointer text-[17px] hover:text-green-600 transition duration-200 py-2">FAQ</li>
          </ul>
          
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-green-600 rounded-md hover:bg-gray-200 transition duration-200">
              Login
            </button>
            <button className="w-full sm:w-auto px-4 py-2 bg-[#4caf4f] text-black font-semibold rounded-md hover:bg-green-600 transition duration-200">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
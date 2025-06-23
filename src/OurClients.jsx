import React from 'react'
import Image1 from "./Images/OurImagefirst.svg"
import Image2 from "./Images/ourImageSecond.svg"
import Image3 from "./Images/Ourthird.svg"
import Image4 from "./Images/Four.svg"
import Image5 from "./Images/ourFive.svg"
import Image6 from "./Images/OurSix.svg"
import Image7 from "./Images/OurSeven.svg"

const OurClients = () => {
  return (
<>
<div className='my-20'>
    <div className='text-center mb-10'>
    <h1 className='text-5xl font-medium text-[#4d4d4d]'>Our Clients</h1>
    <p className='text-gray-600 my-8'>We have been working with some Fortune 500+ clients</p>
</div>

<div className='flex items-center justify-center gap-[10%]'>
    <span><img src={Image1} alt="" /></span>
    <span><img src={Image2} alt="" /></span>
    <span><img src={Image3} alt="" /></span>
    <span><img src={Image4} alt="" /></span>
    <span><img src={Image5} alt="" /></span>
    <span><img src={Image6} alt="" /></span>
    <span><img src={Image7} alt="" /></span>


</div>
</div>

</>
  )
}

export default OurClients
/* eslint-disable no-unused-vars */
import React from 'react'
import phone1 from '../../public/iPhones (1).png'

const Footer = () => {
  return (
    <div className="box bg-[#0328EE] h-[622px] w-[400px]">
    <div className="box relative    m-auto flex-col  px-5 flex pt-7 text-center    rounded-lg h-[295px] w-[399px]" >
    <h4 className='text-[18px] font-bold pb-3 uppercase'>iOS & Android App </h4>
      <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
      <div className='absolute top-[11.3rem] flex justify-center items-center ' >
          <img src={phone1} alt="" />
      </div>

    </div>
      </div>
  )
}

export default Footer
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {TbArrowsRightLeft,TbWallet,TbChartBar} from 'react-icons/tb'
import {BsArrowRepeat} from 'react-icons/bs'

const Box = () => {
    return (
       <div className='justify-center flex items-center py-20'>
         <div className='text-white grid md:grid-cols-3 grid-cols-1  '>
          <div className='px-2'>
          <div className="box bg-[#010D50] my-4 m-auto flex-col  px-5 flex justify-center items-baseline   rounded-lg h-[295px] w-[399px]" >
            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                <TbArrowsRightLeft />
            </button>
            <h4 className='text-[18px] font-bold pb-3 uppercase'>Send & Receive</h4>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
            </div>
                <div className="box bg-[#010D50] my-4 m-auto flex-col  px-5 flex justify-center items-baseline   rounded-lg h-[295px] w-[399px]" >
            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                <TbWallet />
            </button>
            <h4 className='text-[18px] font-bold pb-3 uppercase'>100% Secure Wallet  </h4>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
            </div>
         
          </div>
       
            <div className="box bg-[#0328EE] h-[622px] w-[400px]">
          <div className="box  my-4 m-auto flex-col  px-5 flex justify-center items-baseline   rounded-lg h-[295px] w-[399px]" >
          <h4 className='text-[18px] font-bold pb-3 uppercase'>iOS & Android App </h4>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>

          </div>
            </div>
       
        
       
            <div className=''>
            <div className="box bg-[#010D50] my-4 m-auto flex-col  px-5 flex justify-center items-baseline   rounded-lg h-[295px] w-[399px]" >
            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                <TbChartBar />
            </button>
            <h4 className='text-[18px] font-bold pb-3 uppercase'>Trading Charts </h4>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
            </div>
            <div className="box bg-[#010D50] my-4 m-auto flex-col  px-5 flex justify-center items-baseline   rounded-lg h-[295px] w-[399px]" >
            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                <BsArrowRepeat />
            </button>
            <h4 className='text-[18px] font-bold pb-3 uppercase'>Real Time Trading </h4>
            <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
            </div>
         
          </div>
       
       
        </div>
       </div>
    )
}

export default Box

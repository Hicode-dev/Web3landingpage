// eslint-disable-next-line no-unused-vars
import React from 'react';
import phone2 from '../../public/Screen (replace here).png'
import phone3 from '../../public/iPhones.png'
import phone4 from '../../public/wallet.png'
import { TbChartBar } from 'react-icons/tb'

const Box2 = () => {
    return (
        <div className='px-3'>
            <div className="md:flex justify-around px-7 block items-center py-10">
           

                <div className='flex '>
                    <img src={phone2} className='lg:flex hidden'  alt="" />
                    <img src={phone3} alt="" />
                </div>
                <div>
                    <h4 className='text-[2rem] font-bold pb-3 uppercase  text-white'>Earn daily rewards on <br />  your idle tokens</h4>
                    <div>
                        <div className='flex items-center gap-6 text-white font-bold'>
                            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                                <TbChartBar />
                            </button>
                            <h3>Lowest fees in market</h3>
                        </div>
                        <div className='flex items-center gap-6 text-white font-bold'>
                            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                                <TbChartBar />
                            </button>
                            <h3>Lowest fees in market</h3>
                        </div>
                        <div className='flex items-center gap-6 text-white font-bold'>
                            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                                <TbChartBar />
                            </button>
                            <h3>Lowest fees in market</h3>
                        </div>
                       </div>
                </div>
            </div>
         <div>
               <div className="grid md:grid-cols-2 grid-cols-1 md:mt-20 pt-14 px-20 place-items-center">
           

             
                <div className=''>
                    <h4 className='text-[2rem] font-bold pb-3 uppercase   text-white'>Earn daily rewards on <br />  your idle tokens</h4>
                    <div>
                        <div className='flex items-center gap-6 text-white font-bold'>
                            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                                <TbChartBar />
                            </button>
                            <h3>Lowest fees in market</h3>
                        </div>
                        <div className='flex items-center gap-6 text-white font-bold'>
                            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                                <TbChartBar />
                            </button>
                            <h3>Lowest fees in market</h3>
                        </div>
                        <div className='flex items-center gap-6 text-white font-bold'>
                            <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                                <TbChartBar />
                            </button>
                            <h3>Lowest fees in market</h3>
                        </div>
                       </div>
                </div>

                <div className=' '>
                    <img src={phone4} className='md:flex ' width='400ppx'  alt="" />
                </div>
            </div>
         </div>
        </div>
    );
}

export default Box2;

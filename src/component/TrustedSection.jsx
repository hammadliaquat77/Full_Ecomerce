import React from 'react'
import { ImTruck } from 'react-icons/im'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { FaMobileAlt } from 'react-icons/fa'
import { MdOutlineLaptopMac, MdOutlineWatch } from 'react-icons/md'
import { TbAirConditioning } from 'react-icons/tb'
import { RiFridgeFill } from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';



function TrustedSection() {

      AOS.init({
      duration: 1000,
      once: false, 
      mirror: true,
    });
    

  return (
    <section className='bg-white overflow-x-hidden' >
            <div className='container mx-auto md:px-32'>
              <div className='flex flex-col md:flex-row justify-between items-center gap-10 p-16' >
                {/* card 1 */}
                <div data-aos="zoom-in-right" className='w-full md:w-72 md:h-64 p-10 md:p-0 bg-gray-300 rounded-2xl flex flex-col justify-center items-center space-y-4 hover:transition-all hover:scale-110 cursor-pointer duration-300'>
                  <ImTruck size={28} color='green' />
                  <span className='text-md tracking-wide '>Super Fast & Free Delivery</span>
                </div>
    
                <div className='flex flex-col justify-between items-center gap-10 '>
                  {/* card 2 */}
                  <div data-aos="zoom-out-down" className='w-full md:w-72 md:h-28 p-6 md:p-0 bg-gray-300 rounded-2xl flex  gap-6 justify-center items-center space-y-4 hover:transition-all hover:scale-110 cursor-pointer duration-300'>
                    <MdOutlineSecurity size={28} color='green' />
                    <span className='text-md tracking-wide '>Non Contract Shipping</span>
                  </div>
    
                  {/* card 3 */}
                  <div data-aos="zoom-out-up" className='w-full md:w-72 md:h-28 p-6  md:p-0 bg-gray-300 rounded-2xl flex gap-6 justify-center items-center space-y-4 hover:transition-all hover:scale-110 cursor-pointer duration-300'>
                    <FaRegMoneyBillAlt size={28} color='green' />
                    <span className='text-md tracking-wide '>Money Back Guaranted</span>
                  </div>
    
                </div>
    
                {/* card 4 */}
                <div data-aos="zoom-in-left" className='w-full md:w-72 md:h-64 p-10 md:p-0 bg-gray-300 rounded-2xl flex flex-col justify-center items-center space-y-4 hover:transition-all hover:scale-110 cursor-pointer duration-300'>
                  <RiSecurePaymentFill size={28} color='green' />
                  <span className='text-md tracking-wide '>Super Secure Payment System </span>
                </div>
    
              </div>
    
            </div>
    
            <section className='bg-gray-100 space-y-36'>
              <div className='container mx-auto md:px-32 p-6' >
                <div>
                  <div className='md:p-32 md:pt-16 p-14 h-[650px] pt-0 md:h-[320px] flex flex-col justify-center items-center space-y-20  '>
                    <span className='text-xl tracking-wide text-center'>Trusted by over 1000+ customers</span>
                    <div className='grid md:grid-cols-5 grid-cols-2 flex-col gap-14 md:gap-x-14  '>
                      <div data-aos="fade-right" className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                        <FaMobileAlt size={28} />
                        <span className='text-xl font-bold tracking-wide text-gray-600'>Apple</span>
                      </div>
    
                      <div data-aos="fade-right" className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                        <MdOutlineLaptopMac size={28} />
                        <span className='text-xl font-bold tracking-wide text-gray-600'>Hp</span>
                      </div>
    
                      <div data-aos="zoom-in" className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                        <MdOutlineWatch size={28} />
                        <span className='text-xl font-bold tracking-wide text-gray-600'>Galaxy</span>
                      </div>
    
                      <div data-aos="fade-left" className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                        <TbAirConditioning size={28} />
                        <span className='text-xl font-bold tracking-wide text-gray-600'>Gree</span>
                      </div>
    
                      <div data-aos="fade-left" className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                        <RiFridgeFill size={28} />
                        <span className='text-xl font-bold tracking-wide text-gray-600'>Dawlance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
    
  )
}

export default TrustedSection
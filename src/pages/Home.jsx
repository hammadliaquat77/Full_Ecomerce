import React from 'react'
import image from '../../public/Fiver_Image_1.png'
import { ImTruck } from 'react-icons/im'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { FaMobileAlt } from 'react-icons/fa'
import { MdOutlineLaptopMac, MdOutlineWatch } from 'react-icons/md'
import { TbAirConditioning } from 'react-icons/tb'
import { RiFridgeFill } from 'react-icons/ri'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='container mx-auto md:p-32 p-16 md:pt-48'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>


          {/* Left Section */}
          <div className='w-full md:w-3/5 space-y-4 text-center md:text-left'>
            <span className='text-md tracking-wide'>WELCOME TO</span>
            <h1 className='text-4xl md:text-5xl font-bold text-center md:text-start'>Hammad Store</h1>
            <p className='text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, adipisci magni inventore unde odio corrupti
              libero quasi repellendus? Ipsum amet eum porro recusandae
              Ratione.</p>
            <button className='bg-blue-700 px-6 py-3  text-white hover:bg-blue-900 transition rounded-lg'>Shop Now</button>
          </div>


          {/* Right Section */}
          <div className='relative w-full md:w-2/5 flex justify-center md:justify-end mb-16 md:my-0'>
            <div className='md:h-52 md:w-52 h-32 w-32 bg-green-400 absolute top-24 -right-5 md:-top-12 md:-right-8 -z-10'></div>
            <img src="https://images.unsplash.com/photo-1505460932124-165b2d436f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvbWVyY2V8ZW58MHwwfDB8fHww"
              className='relative max-w-[250px] md:max-w-[400px] top-14 md:-top-2  shadow-lg' />
          </div>

        </div>
      </section>

      {/* section 2  */}
      <section className='bg-gray-100'>
        <div className='container mx-auto md:px-32 md:py-20 md:space-y-10'>
          <div className='flex flex-col  justify-between md:items-start items-center gap-1 p-10 md:p-0 '>
            <span className='text-sm tracking-wide uppercase md:text-start text-blue-800'>Click Now</span>
            <h2 className='text-2xl text-center md:text-start md:text-3xl'>Our Feature Services</h2>
          </div>

          {/* card */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-14 md:p-0'>
            <div className='relative w-full md:w-64 bg-gray-300 p-2 hover:transition-all hover:scale-105 md:hover:scale-110 cursor-pointer duration-300'>
              <div className='flex flex-col'>
                <img src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww" alt="Service Icon" className='mb-4' />
                {/* <img src={image} alt="Service Icon" className='mb-4' /> */}
                <div className='absolute py-1 px-3 rounded-full bg-neutral-200 top-5 right-4'>laptop</div>
                <div className='flex justify-between'>
                  <p className='text-gray-600 text-md'>Makebook</p>
                  <p className='text-gray-600 text-md'>Rs: 20000</p>
                </div>
              </div>
            </div>
            <div className='relative w-full md:w-64 bg-gray-300 p-2 hover:transition-all hover:scale-105 md:hover:scale-110 cursor-pointer duration-300'>
              <div className='flex flex-col'>
                <img src="https://images.unsplash.com/photo-1608386390658-86cf60bcf61a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fElwaG9uZXxlbnwwfDB8MHx8fDA%3D" alt="Service Icon" className='mb-4' />
                <div className='absolute py-1 px-3 rounded-full bg-neutral-200 top-5 right-4'>laptop</div>
                <div className='flex justify-between'>
                  <p className='text-gray-600 text-md'>Makebook</p>
                  <p className='text-gray-600 text-md'>Rs: 20000</p>
                </div>
              </div>
            </div>
            <div className='relative w-full md:w-64 bg-gray-300 p-2 hover:transition-all hover:scale-105 md:hover:scale-110 cursor-pointer duration-300'>
              <div className='flex flex-col'>
                <img src="https://images.unsplash.com/photo-1553545204-4f7d339aa06a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsYXh5JTIwd2F0Y2h8ZW58MHwwfDB8fHww" alt="Service Icon" className='mb-4' />
                {/* <img src={image} alt="Service Icon" className='mb-4' /> */}
                <div className='absolute py-1 px-3 rounded-full bg-neutral-200 top-5 right-4'>laptop</div>
                <div className='flex justify-between'>
                  <p className='text-gray-600 text-md'>Makebook</p>
                  <p className='text-gray-600 text-md'>Rs: 20000</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* section 3 */}
      <section className='bg-white' >
        <div className='container mx-auto md:px-32'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-10 p-16' >
            {/* card 1 */}
            <div className='w-full md:w-72 md:h-64 p-10 md:p-0 bg-gray-300 rounded-2xl flex flex-col justify-center items-center space-y-4 hover:transition-all hover:scale-110 cursor-pointer duration-300'>
              <ImTruck size={28} color='green' />
              <span className='text-md tracking-wide '>Super Fast & Free Delivery</span>
            </div>

            <div className='flex flex-col justify-between items-center gap-10 '>
              {/* card 2 */}
              <div className='w-full md:w-72 md:h-28 p-6 md:p-0 bg-gray-300 rounded-2xl flex  gap-6 justify-center items-center space-y-4 hover:transition-all hover:scale-110 cursor-pointer duration-300'>
                <MdOutlineSecurity size={28} color='green' />
                <span className='text-md tracking-wide '>Non Contract Shipping</span>
              </div>

              {/* card 3 */}
              <div className='w-full md:w-72 md:h-28 p-6  md:p-0 bg-gray-300 rounded-2xl flex gap-6 justify-center items-center space-y-4 hover:transition-all hover:scale-110 cursor-pointer duration-300'>
                <FaRegMoneyBillAlt size={28} color='green' />
                <span className='text-md tracking-wide '>Money Back Guaranted</span>
              </div>

            </div>

            {/* card 4 */}
            <div className='w-full md:w-72 md:h-64 p-10 md:p-0 bg-gray-300 rounded-2xl flex flex-col justify-center items-center space-y-4 hover:transition-all hover:scale-110 cursor-pointer duration-300'>
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
                  <div className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                    <FaMobileAlt size={28} />
                    <span className='text-xl font-bold tracking-wide text-gray-600'>Apple</span>
                  </div>

                  <div className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                    <MdOutlineLaptopMac size={28} />
                    <span className='text-xl font-bold tracking-wide text-gray-600'>Hp</span>
                  </div>

                  <div className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                    <MdOutlineWatch size={28} />
                    <span className='text-xl font-bold tracking-wide text-gray-600'>Galaxy</span>
                  </div>

                  <div className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                    <TbAirConditioning size={28} />
                    <span className='text-xl font-bold tracking-wide text-gray-600'>Gree</span>
                  </div>

                  <div className='flex flex-col md:flex-row justify-center items-center gap-1 text-gray-600 hover:transition-all hover:scale-125 cursor-pointer duration-300'>
                    <RiFridgeFill size={28} />
                    <span className='text-xl font-bold tracking-wide text-gray-600'>Dawlance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  )
}

export default Home
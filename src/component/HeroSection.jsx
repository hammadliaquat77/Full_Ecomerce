import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function HeroSection() {

      AOS.init({
      duration: 1000,
      once: false, 
      mirror: true,
    });
    

  return (
    <section className='container mx-auto md:p-32 p-16 md:pt-48 overflow-x-hidden pt-36'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>


          {/* Left Section */}
          <div data-aos="fade-down" className='w-full md:w-3/5 space-y-4 text-center md:text-left'>
            <span className='text-md tracking-wide'>WELCOME TO</span>
            <h1 className='text-4xl md:text-5xl font-bold text-center md:text-start'>Hammad Store</h1>
            <p className='text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, adipisci magni inventore unde odio corrupti
              libero quasi repellendus? Ipsum amet eum porro recusandae
              Ratione.</p>
            <button className='bg-blue-700 px-6 py-3  text-white hover:bg-blue-900 transition rounded-lg'>Shop Now</button>
          </div>


          {/* Right Section */}
          <div data-aos="fade-left" className='relative w-full md:w-2/5 flex justify-center md:justify-end mb-16 md:my-0'>
            <div className='md:h-52 md:w-52 h-32 w-32 bg-green-400 absolute top-24 -right-5 md:-top-12 md:-right-8 -z-10'></div>
            <img src="https://images.unsplash.com/photo-1505460932124-165b2d436f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvbWVyY2V8ZW58MHwwfDB8fHww"
              className='relative max-w-[250px] md:max-w-[400px] top-14 md:-top-2  shadow-lg' />
          </div>

        </div>
      </section>

  )
}

export default HeroSection
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from 'react';
import {AppContext} from "../Context/Productcontext"

 

const FeatureSection = () => {

  const {isLoading, featureProduct} = useContext(AppContext)
 console.log(featureProduct);

if (isLoading) {
   return(
 <div class="text-center">
  <div
    class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
  ></div>
  <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
  <p class="text-zinc-600 dark:text-zinc-400">
    Your adventure is about to begin
  </p>
</div> 
   )
}


     AOS.init({
     duration: 1000,
     once: false, 
     mirror: true,
   });

  return (

      <section className='bg-gray-100 overflow-x-hidden'>
        <div className='container mx-auto md:px-32 md:py-20 md:space-y-10'>
          <div className='flex flex-col  justify-between md:items-start items-center gap-1 p-10 md:p-0 '>
            <span className='text-sm tracking-wide uppercase md:text-start text-blue-800'>Click Now</span>
            <h2 className='text-2xl text-center md:text-start md:text-3xl'>Our Feature Services</h2>
          </div>

          {/* cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-14 md:p-0'>
          {featureProduct.map((product, indx)=> {
            return(
             <div key={indx} data-aos="flip-left" className='relative w-full md:w-64 bg-gray-300 p-2 hover:transition-all hover:scale-105 md:hover:scale-110 cursor-pointer duration-300'>
              <div className='flex flex-col'>
                <img src={product.image} alt="Service Icon" className='mb-4' />
                <div className='absolute py-1 px-3 rounded-full bg-neutral-200 top-5 right-4'>{product.category}</div>
                <div className='flex justify-between'>
                  <p className='text-gray-600 text-md'>{product.name}</p>
                  <p className='text-gray-600 text-md'>Rs: {product.price}</p>
                </div>
              </div>
            </div>
            )
          })}
            
          </div>

        </div>
      </section>

  )
}

export default FeatureSection;














































// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const FeatureSection = () => {

//      AOS.init({
//      duration: 1000,
//      once: false, 
//      mirror: true,
//    });

//   return (

//       <section className='bg-gray-100 overflow-x-hidden'>
//         <div className='container mx-auto md:px-32 md:py-20 md:space-y-10'>
//           <div className='flex flex-col  justify-between md:items-start items-center gap-1 p-10 md:p-0 '>
//             <span className='text-sm tracking-wide uppercase md:text-start text-blue-800'>Click Now</span>
//             <h2 className='text-2xl text-center md:text-start md:text-3xl'>Our Feature Services</h2>
//           </div>

//           {/* card */}
//           <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-14 md:p-0'>
//             <div data-aos="flip-left" className='relative w-full md:w-64 bg-gray-300 p-2 hover:transition-all hover:scale-105 md:hover:scale-110 cursor-pointer duration-300'>
//               <div className='flex flex-col'>
//                 <img src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww" alt="Service Icon" className='mb-4' />
//                 {/* <img src={image} alt="Service Icon" className='mb-4' /> */}
//                 <div className='absolute py-1 px-3 rounded-full bg-neutral-200 top-5 right-4'>laptop</div>
//                 <div className='flex justify-between'>
//                   <p className='text-gray-600 text-md'>Makebook</p>
//                   <p className='text-gray-600 text-md'>Rs: 20000</p>
//                 </div>
//               </div>
//             </div>
//             <div data-aos="flip-right" className='relative w-full md:w-64 bg-gray-300 p-2 hover:transition-all hover:scale-105 md:hover:scale-110 cursor-pointer duration-300'>
//               <div className='flex flex-col'>
//                 <img src="https://images.unsplash.com/photo-1608386390658-86cf60bcf61a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fElwaG9uZXxlbnwwfDB8MHx8fDA%3D" alt="Service Icon" className='mb-4' />
//                 <div className='absolute py-1 px-3 rounded-full bg-neutral-200 top-5 right-4'>laptop</div>
//                 <div className='flex justify-between'>
//                   <p className='text-gray-600 text-md'>Makebook</p>
//                   <p className='text-gray-600 text-md'>Rs: 20000</p>
//                 </div>
//               </div>
//             </div>
//             <div data-aos="flip-left" className='relative w-full md:w-64 bg-gray-300 p-2 hover:transition-all hover:scale-105 md:hover:scale-110 cursor-pointer duration-300'>
//               <div className='flex flex-col'>
//                 <img src="https://images.unsplash.com/photo-1553545204-4f7d339aa06a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsYXh5JTIwd2F0Y2h8ZW58MHwwfDB8fHww" alt="Service Icon" className='mb-4' />
//                 {/* <img src={image} alt="Service Icon" className='mb-4' /> */}
//                 <div className='absolute py-1 px-3 rounded-full bg-neutral-200 top-5 right-4'>laptop</div>
//                 <div className='flex justify-between'>
//                   <p className='text-gray-600 text-md'>Makebook</p>
//                   <p className='text-gray-600 text-md'>Rs: 20000</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//   )
// }

// export default FeatureSection;

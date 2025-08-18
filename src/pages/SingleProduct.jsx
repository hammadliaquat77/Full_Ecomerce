import React from 'react'
import Image from "../../public/Fiver_Image_1.png"
import { TbTruckDelivery } from "react-icons/tb";
import star from "../../public/star.png"

function SingleProduct() {
  return (
    <section className='container mx-auto md:p-32 p-10g md:h-[850px] h-[1450px] md:pt-48 pt-36 overflow-x-hidden'>
      <div className='flex flex-col md:flex-row justify-center items-center p-16 md:p-0'>
         <div className="flex flex-col md:flex-row justify-center items-center gap-16">
  {/* Section 1 */}
  <div className="flex flex-col md:flex-row gap-4 h-[400px]">
    <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
      <img src={Image} className="w-32 h-20" alt="" />
      <img src={Image} className="w-32 h-20" alt="" />
      <img src={Image} className="w-32 h-20" alt="" />
      <img src={Image} className="w-32 h-20" alt="" />
    </div>
    <div className="flex justify-center items-center mt-4 md:mt-0">
      <img src={Image} className="w-72 h-44" alt="" />
    </div>
  </div>

  {/* section 2 */}
<div className="w-full md:w-[400px] -mt-10 md:-mt-20 bg-zinc-200 rounded-xl p-4">
  <div className="flex flex-col">
    <h1 className="text-2xl md:text-3xl font-light mb-4">MAC PC</h1>
    <div className='flex gap-2'>
    <img className="w-4" src={star} alt="" />            
    <img className="w-4" src={star} alt="" />            
    <img className="w-4" src={star} alt="" />            
    <img className="w-4" src={star} alt="" />            
    <img className="w-4" src={star} alt="" />            
    </div>

    <span className="text-sm mt-2 font-bold">MRP</span>
    <h5 className="text-sm mt-2 text-blue-600">deal of the day</h5>
    <p className="text-sm mt-2 md:w-96 w-full">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore aspernatur. Possimus iste provident iusto animi in facere ea delectus ex? A sed quaerat accusantium dolor vitae. Vitae, harum excepturi?
    </p>

    <div className="flex justify-between gap-3 mt-2 flex-wrap">
      <div className="flex flex-col items-center">
        <div className='bg-zinc-700 rounded-full p-1'>
        <TbTruckDelivery size={20}/>
        </div>
        <span className='text-sm'>Free Delivery</span>
      </div>
      <div className="flex flex-col items-center">
        <div className='bg-zinc-700 rounded-full p-1'>
        <TbTruckDelivery size={20}/>
        </div>
        <span className='text-sm'>Free Delivery</span>
      </div>
      <div className="flex flex-col items-center">
        <div className='bg-zinc-700 rounded-full p-1'>
        <TbTruckDelivery size={20}/>
        </div>
        <span className='text-sm'>Free Delivery</span>
      </div>
      <div className="flex flex-col items-center">
        <div className='bg-zinc-700 rounded-full p-1'>
        <TbTruckDelivery size={20}/>
        </div>
        <span className='text-sm'>Free Delivery</span>
      </div>
    </div>  

    <hr className="my-2" />

    <h4 className="text-sm">Available stock</h4>
    <h4 className="text-sm">Id</h4>
    <span className="text-sm">Brand</span>

    <hr className="my-2" />

    <span className="text-sm">Color</span>
    <div className="flex gap-3 mt-4 items-center">
      <button className="bg-gray-700 px-2">+</button>
      <span>1</span>
      <button className="bg-gray-700 px-2">-</button>
    </div>

    <button className="mt-4 bg-blue-600 py-2 px-7 rounded">Add to Cart</button>
  </div>
</div>


</div>      
      </div>
    </section>


  )
}

export default SingleProduct







// <div className='flex flex-col md:flex-row justify-center items-center gap-16'>

//           {/* section 1 */}
//           <div className='flex flex-col md:flex-row gap-4 h-[400px]'>
//             <div className='grid grid-cols-2 md:grid-cols-1'>
//               <img src={Image} className='w-32 h-20' alt="" />
//               <img src={Image} className='w-32 h-20' alt="" />
//               <img src={Image} className='w-32 h-20' alt="" />
//               <img src={Image} className='w-32 h-20' alt="" />
//             </div>
//             <div className='flex justify-center items-center mt-4 md:mt-0'>
//               <img src={Image} className='w-72 h-44' alt="" />
//             </div>
//           </div>

//           {/* section 2 */}
//           <div className='w-[400px] -mt-20'>
//             <div className='flex flex-col'>
//               <h1 className='text-3xl font-light mb-4'>MAC PC</h1>
//               <img className='h-10 w-20' src="data:image/png;base64,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" alt="" />
//               <span className='text-sm mt-2 font-bold'>MRP</span>
//               <h5 className='text-sm mt-2 text-blue-600'>deal of the day</h5>
//               <p className='text-sm mt-2 w-96'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti cupiditate saepe nam iusto eius possimus minus itaque dolorum illo eligendi ratione, placeat deserunt exercitationem adipisci, ullam voluptas id illum.</p>
//               <div className='flex w-84 justify-between gap-3 mt-2'>
//                 <div className='flex flex-col '>
//                   <span>image</span>
//                   <h5>Text</h5>
//                 </div>
//                 <div className='flex flex-col gap-2'>
//                   <span>image</span>
//                   <h5>Text</h5>
//                 </div>
//                 <div className='flex flex-col gap-2'>
//                   <span>image</span>
//                   <h5>Text</h5>
//                 </div>
//                 <div className='flex flex-col gap-2'>
//                   <span>image</span>
//                   <h5>Text</h5>
//                 </div>
//               </div>
//               <hr />
//               <h4 className='text-sm mt-2'>Available stock</h4>
//               <h4 className='text-sm mt-2'>Id</h4>
//               <span className='text-sm mt-2 mb-2'>Brand</span>
//               <hr />
//               <span className='text-sm mt-2' >Color</span>
//               <div className='flex gap-3 mt-4'>
//                 <button>+</button>
//                 <span>1</span>
//                 <button>-</button>
//               </div>
//               <div className=''>
//                 <button className='mt-2 bg-blue-600 py-2 px-7'>Add to Cart</button>
//               </div>
//             </div>
//           </div>

//         </div>

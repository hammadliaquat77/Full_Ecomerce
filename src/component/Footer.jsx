import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    
    <footer>
      <div className='bg-gray-800 text-white md:p-14'>
        <div className='container mx-auto md:px-32 p-20 w-full'>

          {/* Grid layout for responsiveness */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-24'>

            {/* Column 1 */}
            <div className='md:space-y-4 space-y-2'>
              <h2 className='text-md tracking-wide font-bold'>Hammad Raza.</h2>
              <p className='text-sm tracking-wide'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci error accusamus!
              </p>
            </div>

            {/* Column 2 */}
            <div className='md:space-y-4 space-y-2'>
              <p className='text-sm tracking-wide'>Subscribe to get Important Updates</p>
              <div className='flex flex-col space-y-2'>
                <input type="text" className='bg-white px-1 py-2 w-full text-black pl-2' placeholder='Your Opinion' />
                <button className='bg-blue-600 p-2 py-3 rounded-lg uppercase hover:bg-blue-800'>
                  Subscribe
                </button>
              </div>
            </div>

            {/* Column 3 */}
            <div className='md:space-y-4 space-y-2'>
              <p className='text-md tracking-wide'>Follow Us</p>
              <div className='flex space-x-2'>
                <a href="#" className='border border-black rounded-full p-2 hover:rotate-y-180'><FaFacebookF /></a>
                <a href="#" className='border border-black rounded-full p-2 hover:rotate-y-180'><FaGithub /></a>
                <a href="#" className='border border-black rounded-full p-2 hover:rotate-y-180'><FaLinkedin /></a>
              </div>
            </div>

            {/* Column 4 */}
            <div className='md:space-y-4 space-y-2'>
              <p className='text-md tracking-wide'>Call Us</p>
              <p className='text-sm tracking-wide'>+92 316 3093120</p>
            </div>

          </div>
        </div>
      </div>
    </footer>


  )
}

export default Footer
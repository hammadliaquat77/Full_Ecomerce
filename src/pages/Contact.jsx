import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contact() {

   AOS.init({
     duration: 1000,
     once: false, 
     mirror: true,
   });
   

    return (
        <section className='w-full md:h-[1150px] h-[950px] pt-24 md:pt-6 overflow-x-hidden '>
            <div>
                <div className='p-16 md:pt-32'>
                <h1 className='text-center text-2xl md:text-4xl'>Contact Us</h1>
                </div>
                <div data-aos="fade-up" className='w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771401.525979583!2d66.4959539227841!3d25.192983650620572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e1!3m2!1sen!2s!4v1754765424591!5m2!1sen!2s"
                        className='md:w-full md:h-72 mx-auto w-[270px]'
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div >
                <div data-aos="fade-right" className='md:p-16 p-16  flex justify-center items-center'>
                   <form action="https://formspree.io/f/mkgzkzgb" method='POST' className='flex md:flex-col flex-col gap-4'>
                    <input type="text" className='border md:w-80 p-3' 
                    placeholder='Enter Your Username' name='username' />

                    <input type="email" className='border md:w-80 p-3' 
                    placeholder='Enter Your Email' name='email' />

                    <textarea name="" className='border md:w-80 p-3 h-28' placeholder='Enter Text' ></textarea>

                    <input type="submit" className='md:w-24 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 ' 
                    placeholder='Enter Your Username' name='username' value="Send"/>
                   </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

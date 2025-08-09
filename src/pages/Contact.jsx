import React from 'react';

function Contact() {
    return (
        <section className='w-full'>
            <div>
                <div className='p-16'>
                <h1 className='text-center text-2xl md:text-3xl'>Feel Free Contact Us</h1>
                </div>
                <div className='w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771401.525979583!2d66.4959539227841!3d25.192983650620572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e1!3m2!1sen!2s!4v1754765424591!5m2!1sen!2s"
                        className='w-full h-72'
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;

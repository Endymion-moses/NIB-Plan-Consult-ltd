//import React from 'react'
import bg_image4 from '../assets/bg_image4.jpg'

const Contact = () => {
  return (
    <div>
          <div
            className="relative flex items-center justify-start w-full min-h-[30vh] sm:min-h-[40vh] md:min-h-[40vh] px-6 sm:px-12 md:px-20 py-10"
            style={{
                    backgroundImage: `url(${bg_image4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                  }} >
                    <div className='pt-24 sm:pt-30 md:pl-[30%]'>
                       <h1 className='text-center text-4xl font-bold text-blue-900 sm:text-6xl'>Contact Us</h1>
                      <p className='mt-2 text-center text-blue-900'>Get in touch with us for any inquiries or consultation.</p>

                    </div>

          </div>


          <div className='grid grid-cols-1 md:grid-cols-2  gap-3 p-5 bg-gray-100 '>

            <div className="mx-auto w-full max-w-2xl p-2 sm:p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-4">
                Get In Touch <span className="h-[1px] bg-gray-300 flex-grow"></span>
              </h2>

              {/* Interactive Map Iframe Container */}
              <div className="h-[250px] w-full p-0 sm:h-[300px] sm:p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.067027976258!2d39.24892007430657!3d-6.761681766118874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d7036d3b489%3A0x3f1923f88a4ce827!2sNIB-Plan%20Consult%20Ltd!5e0!3m2!1sen!2stz!4v1782952279850!5m2!1sen!2stz"// Replace this URL with your custom embed link
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>

              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-4">
                Our Office <span className="h-[1px] bg-gray-300 flex-grow"></span>
              </h2>

              <div className='flex flex-col '>
                <p className='text-blue-900 '>Kambarage Road,</p>
                <p className='text-blue-900 '>Plot No. 487, Block Mikocheni II,</p>
                <p className='text-blue-900 '>3rd Floor, Wing 'A' Suite 4$5,</p>
                <p className='text-blue-900 '>P.O.BOX 34773,</p>
                <p className='text-blue-900 '> Dar es Salaam, Tanzania</p>


              </div>

            </div>


            <div className='mx-auto w-full max-w-2xl p-2 sm:p-6'>
                <h2 className="mb-4 flex items-center gap-4 text-xl font-bold text-blue-900">
                Send a Message <span className="h-[1px] flex-grow bg-gray-300"></span>
              </h2>

              <form action="submit" className='flex flex-col gap-3'>
                <input type="text" placeholder='Enter your name...'
                className='w-full rounded-xl border border-white bg-white p-4' />

                <input type="email" placeholder='Email Address...'
                className='w-full rounded-xl border border-white bg-white p-4' />

                <input type="tel" placeholder='Phone Number...'
                className='w-full rounded-xl border border-white bg-white p-4' />

                 <textarea type="message" placeholder='Message...'
                 className='h-40 w-full rounded-xl border border-white bg-white p-4' />

                 <button className='w-full rounded-xl border-blue-900 bg-blue-900 p-3 text-white'>Send Message</button>

                 <p className='text-center'>or email us directly at:  <a
                    href="mailto:info@nibplan.co.tz"
                    className="text-blue-900 font-bold hover:underline transition-all"
                  >
                    info@nibplan.co.tz
                  </a></p>




              </form>
            </div>







          </div>
    </div>
  )
}

export default Contact

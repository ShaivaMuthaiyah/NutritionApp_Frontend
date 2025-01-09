
import React from 'react';
import image1 from '../images/contact_1.jpg';
import image2 from '../images/contact_2.jpg';
import image3 from '../images/contact_3.jpg';
import image4 from '../images/contact_4.jpg';



function ContactCard() {

    return (
        <section class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="md:flex gap-x-24 clear-left md:mb-16 mb-10">
              <div class=" md:mb-0 mb-4">
                  <h2 class="text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-left text-center">Get In Touch</h2>
                  <p class="text-lime-700 text-lg font-normal leading-7 mb-7 md:text-left text-center">Whether you have a concern or simply want to say hello, We are here for you.</p>
                  <div class="flex md:items-center md:justify-start justify-center">
                      <button class="w-36 h-12 rounded-lg bg-slate-900 duration-700py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><a href="mailto:shaivamuthaiyah@gmail.com?subject=Enquiry%20CookSmart">Contact Us</a></button>
                  </div>
              </div>
              <div class="border-l-2 md:border-lime-700 border-white px-10 py-6">
                  <div class="mb-8">
                      <h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Email Address</h6>
                      <h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center">ShaivaMuthaiya@gmail.com</h3>
                  </div>
                  <div>
                      <h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Phone Number</h6>
                      <h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center">+91-7259975877</h3>
                  </div>
              </div>
          </div>
          <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
              <div class="h-96 relative flex justify-center">
                  <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                  <img src={image1} alt="Hearty Fruit Bowls" class="w-full h-full object-cover"/>
                  <div class="absolute bottom-0 mb-6 text-center px-6">
                      <h5 class="text-white text-lg font-semibold leading-7 mb-2">Hearty Fruit Bowls</h5>
                  </div>
              </div>
              <div class="h-96 relative flex justify-center">
                  <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                  <img src={image2} alt="Basil Burgers" class="w-full h-full  object-cover"/>
                  <div class="absolute bottom-0 mb-6 text-center px-6">
                      <h5 class="text-white text-lg font-semibold leading-7 mb-2">Basil Burgers</h5>
                  </div>
              </div>
              <div class="h-96 relative flex justify-center">
                  <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                  <img src={image3} alt="White Sauce Fish" class="w-full h-full  object-cover"/>
                  <div class="absolute bottom-0 mb-6 text-center px-6">
                      <h5 class="text-white text-lg font-semibold leading-7 mb-2">White Sauce Fish</h5>
                  </div>
              </div>
              <div class="h-96 relative flex justify-center">
                  <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                  <img src={image4} alt="Mixed Seafood" class="w-full h-full  object-cover"/>
                  <div class="absolute bottom-0 mb-6 text-center px-6">
                      <h5 class="text-white text-lg font-semibold leading-7 mb-2">Mixed Seafood</h5>
                  </div>
              </div>
          </div>
        </div>
      </section>
                                              
                                              
    )


}
export default ContactCard;
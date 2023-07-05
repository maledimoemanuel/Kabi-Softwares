import React from 'react';
import Laptop from '../assets/laptop.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
import computerRepair from '../assets/computerRepair.jpg';
import logoDesign from '../assets/logoDesign.jpg'
import onlineApplications from '../assets/onlineApplication.jpg';
import printer from '../assets/printer.jpg'
import software from '../assets/softwareInstallation.jpg'
import webDev from '../assets/webDev.jpg';

const Services = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className='w-full bg-black py-16 px-4' id='services'>
    <h2 className='md:text-4xl sm:text-3xl font-bold text-indigo-600 pb-2'>Our Services</h2>      
    <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000
            }}
          >
            <SwiperSlide>
              <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='w-[500px] mx-auto my-4 rounded-md' src={computerRepair} alt='/' />
              <div className='flex flex-col justify-center'>
                <p className='md:text-4xl sm:text-3xl text-indigo-600 font-bold '>COMPUTER REPAIRS</p>
                <p className='text-white'>
                  Experience efficient and reliable computer repairs tailored to your needs. Our skilled technicians provide fast service, transparent pricing, and a satisfaction guarantee. Trust us to resolve hardware and software issues promptly, ensuring minimal downtime. Choose convenience with on-site repairs, remote assistance, or drop-off options. Your data security is our priority, and we offer valuable resources for self-troubleshooting. Join our satisfied customers who rely on us for expert computer repairs.
                </p>
                <button className='bg-white text-black text-bold w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>    
              </div>
              </div>
              </SwiperSlide>
            <SwiperSlide>
              <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='w-[500px] mx-auto my-4 rounded-md' src={logoDesign} alt='/' />
              <div className='flex flex-col justify-center'>
                <p className='md:text-4xl sm:text-3xl text-indigo-600 font-bold '>LOGO DESIGN</p>
                <p className='text-white'>
                  Stand out with a captivating logo. Our unique designs enhance brand identity, reflecting your values and vision. We offer professional, versatile logos crafted with attention to detail. Experience an efficient process and collaborate closely with us to create a logo that leaves a lasting impression. Visit our portfolio for inspiration.
                </p>
                <button className='bg-white text-black text-bold w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>    
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='w-[500px] mx-auto my-4 rounded-md' src={software} alt='/' />
              <div className='flex flex-col justify-center'>
                <p className='md:text-4xl sm:text-3xl text-indigo-600 font-bold '>SOFTWARE INSTALLATIONS</p>
                <p className='text-white'>
                  Effortlessly install a wide range of software with us. Our expert technicians ensure seamless installation and optimized performance. Trust us for reliable service and ongoing support. Contact us today for hassle-free software installation
                </p>
                <button className='bg-white text-black text-bold w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>    
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='w-[500px] mx-auto my-4 rounded-md' src={onlineApplications} alt='/' />
              <div className='flex flex-col justify-center'>
                <p className='md:text-4xl sm:text-3xl text-indigo-600 font-bold '>ONLINE APPLICATIONS</p>
                <p className='text-white'>
                  Simplify online applications with our dedicated team. Trust us for a seamless, hassle-free process handling bursaries, university admissions, scholarships, and more.
                </p>
                <button className='bg-white text-black text-bold w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>    
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='w-[500px] mx-auto my-4 rounded-md' src={printer} alt='/' />
              <div className='flex flex-col justify-center'>
                <p className='md:text-4xl sm:text-3xl text-indigo-600 font-bold '>PRINTOUT AND COPYING</p>
                <p className='text-white'>
                  Print and copy with confidence. Experience high-quality results, fast turnaround, and competitive pricing. Trust us for professional document printing and copying services.
                </p>
                <button className='bg-white text-black text-bold w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>    
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='w-[500px] mx-auto my-4 rounded-md' src={webDev} alt='/' />
              <div className='flex flex-col justify-center'>
                <p className='md:text-4xl sm:text-3xl text-indigo-600 font-bold '>WEB DEVELOPMENT</p>
                <p className='text-white'>
                  Elevate your online presence with our expert Web development services. From custom designs to responsive experiences, we deliver results-driven websites. Unlock your online potential.
                </p>
                <button className='bg-white text-black text-bold w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>    
              </div>
              </div>
            </SwiperSlide>
            ...
        </Swiper>
        </div>
  );
};

export default Services;

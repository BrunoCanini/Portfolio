import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles/index.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function TechnicalSkills(){
    return(
    <div className="container mx-auto p-2 sm:p-0">
        <h1 className="font-semibold text-3xl text-lime-500 py-5">TECHNICAL SKILLS</h1>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            initialSlide={2}
            className="mySwiper"
        >
            <SwiperSlide className=''>
            <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" />
            </SwiperSlide>
            <SwiperSlide className=''>
            <img className='w-full h-full' src="https://www.cdnlogo.com/logos/c/18/css.svg" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://download.logo.wine/logo/PHP/PHP-Logo.wine.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1024px-Npm-logo.svg.png" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full object-contain' src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" />
            </SwiperSlide>
        </Swiper>
    </div>
    )
}
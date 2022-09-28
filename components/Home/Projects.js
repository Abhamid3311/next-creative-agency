import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='px-10 py-20 w-full bg-primary text-white'>
            <h2 className='font-bold text-3xl text-center mb-16'>Here Are Some Of <span className='text-accent'>Our Works</span></h2>


            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    440: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    540: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={'/carousel-1.png'} alt="carousel" height={335} width={466}></Image></SwiperSlide>
                <SwiperSlide><Image src={'/carousel-2.png'} alt="carousel" height={335} width={466}></Image></SwiperSlide>
                <SwiperSlide><Image src={'/carousel-3.png'} alt="carousel" height={335} width={466}></Image></SwiperSlide>
                <SwiperSlide><Image src={'/carousel-4.png'} alt="carousel" height={335} width={466}></Image></SwiperSlide>
                <SwiperSlide><Image src={'/carousel-5.png'} alt="carousel" height={335} width={466}></Image></SwiperSlide>

            </Swiper>



        </div>
    );
};

export default Projects;
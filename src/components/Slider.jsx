import React from 'react'
import italy1 from '../assets/media/italy1.jpg';
import italy2 from '../assets/media/italy2.jpg';
import germany1 from '../assets/media/germany1.jpg';
import germany2 from '../assets/media/germany2.jpg';
import paris from '../assets/media/paris.jpg';
import paris2 from '../assets/media/paris2.jpg';
import usa1 from '../assets/media/usa1.jpg';
import usa2 from '../assets/media/usa2.jpg';

//for slider :)
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';


function Slider() {
  return (
    <div className="slider">
        <Swiper className='slider__inner'
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        mousewheel = {true}
        navigation
        pagination={{ clickable: true }}
        >
            <SwiperSlide className='slider__item'>
                <img src={italy2} alt="" className='slider__img slider__img1'/>
                <div className="slider__content">
                    <h2 className="slider__title">Italy</h2>
                    <p class = 'mini' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea nisi quam itaque facilis et tenetur. Ut dolor explicabo consectetur labore perferendis! Illo molestiae ipsam consectetur ad recusandae? Vel, amet.
                    </p>
                </div>
                <img src={italy1} alt="" className='slider__img slider__img2'/>
            </SwiperSlide>
            <SwiperSlide className='slider__item'>
                <img src={germany2} alt="" className='slider__img slider__img1'/>
                <div className="slider__content">
                    <h2 className="slider__title">Germay</h2>
                    <p class = 'mini' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea nisi quam itaque facilis et tenetur. Ut dolor explicabo consectetur labore perferendis! Illo molestiae ipsam consectetur ad recusandae? Vel, amet.
                    </p>
                </div>
                <img src={germany1} alt="" className='slider__img slider__img2'/>
            </SwiperSlide>
            <SwiperSlide className='slider__item'>
                <img src={paris} alt="" className='slider__img slider__img1'/>
                <div className="slider__content">
                    <h2 className="slider__title">France</h2>
                    <p class = 'mini' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea nisi quam itaque facilis et tenetur. Ut dolor explicabo consectetur labore perferendis! Illo molestiae ipsam consectetur ad recusandae? Vel, amet.
                    </p>
                </div>
                <img src={paris2} alt="" className='slider__img slider__img2'/>
            </SwiperSlide>
            <SwiperSlide className='slider__item'>
                <img src={usa1} alt="" className='slider__img slider__img1'/>
                <div className="slider__content">
                    <h2 className="slider__title">USA</h2>
                    <p class = 'mini' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea nisi quam itaque facilis et tenetur. Ut dolor explicabo consectetur labore perferendis! Illo molestiae ipsam consectetur ad recusandae? Vel, amet.
                    </p>
                </div>
                <img src={usa2} alt="" className='slider__img slider__img2'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider
import React from 'react'
import {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../css/components/ImgSwiper.css"
const ImgSwiper = ({width,height}) => {

  return (
    <div>
      <Swiper
        style={{width:`${width}px`, height:`${height}px`}}
        modules={[Navigation, Pagination, Scrollbar,Autoplay]}
        navigation
        pagination={{clickable:true}}
        loop={true}
        //autoplay={{delay: 2000, disableOnInteraction: false}}
        scrollbar={{draggable:true}}
      > 
        <SwiperSlide>
          slide 1
        </SwiperSlide>
        <SwiperSlide>
          slide 2
        </SwiperSlide>
        <SwiperSlide>
          slide 3
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImgSwiper

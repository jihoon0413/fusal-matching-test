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
          <img style={{width:`${width}px`,height:`${height}px`}} src ="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191228_244%2F1577499400144JaVhp_JPEG%2FwVZM_Wf9_IsGJjklcReG3s7L.jpg" alt ='구장사진'/>
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

import React, {useState,useEffect} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import styles from './SliderImages.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderImages = () => {
  const [widthW,setWidthW] = useState(window.innerWidth)
  const [imgN,setImgN] = useState(4)
  const images = [
    { id: 1, link: "/slider/1.jpeg" },
    { id: 2, link: "/slider/2.jpeg" },
    { id: 3, link: "/slider/3.jpeg" },
    { id: 4, link: "/slider/4.jpeg" },
    { id: 5, link: "/slider/5.jpeg" },
    { id: 6, link: "/slider/6.jpeg" },
    { id: 7, link: "/slider/7.jpeg" },
    { id: 8, link: "/slider/8.jpeg" },
    { id: 9, link: "/slider/9.jpeg" },
  ];
  const imagesNum = () => {
    // grid >> 540px	720px	960px	1140px	1320px
    if (widthW < 540) {
      setImgN(1)
    } else if (widthW > 540 && widthW < 960) {
      setImgN(2)
    } else if (widthW > 960 && widthW < 1140) {
      setImgN(3)
    } else  {
      setImgN(4)
    }
  }
  useEffect(()=> {
    window.addEventListener('resize',()=> {
      setWidthW(window.innerWidth)
    })
    imagesNum()
  },[imagesNum])
  return (
    <div className={styles.sliderImages}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={imgN}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop
      >
        {images.map(el=> <SwiperSlide key={el.id}><img className={styles.image} src={el.link} alt="image" /></SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default SliderImages;

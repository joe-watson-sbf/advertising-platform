"use client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SliderCoussel(prop: { listCoussel: any[] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      autoplay={{ delay: 500, disableOnInteraction: false }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      allowSlidePrev={true}
      allowSlideNext={true}
    >
      {prop.listCoussel &&
        prop.listCoussel.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
    </Swiper>
  );
}

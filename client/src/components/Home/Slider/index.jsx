import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper.min.css";
import "../../../../node_modules/swiper/modules/navigation.min.css";
import "../../../../node_modules/swiper/modules/pagination.min.css";
import "../../../../node_modules/swiper/modules/effect-cube.min.css";
import { EffectCube, Navigation, Pagination, A11y } from "swiper/modules";
import Slider_1 from '../../../assets/Slider-images/slider-1.webp'
import Slider_2 from "../../../assets/Slider-images/slider-2.webp";
import Slider_3 from "../../../assets/Slider-images/slider-3.webp";
import Slider_4 from "../../../assets/Slider-images/slider-4.webp";

const index = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      <SwiperSlide>
        <img
          src={Slider_1}
          alt=""
          style={{ width: "100%", cursor: "pointer" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Slider_2}
          alt=""
          style={{ width: "100%", cursor: "pointer" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Slider_3}
          alt=""
          style={{ width: "100%", cursor: "pointer" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider_4} alt="" style={{ width: "100%", cursor: "pointer" }} />
      </SwiperSlide>
    </Swiper>
  );
}

export default index
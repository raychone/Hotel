import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

// images
import img1 from "../assets/img/sliders/1.jpg";
import img2 from "../assets/img/sliders/2.jpg";
import img3 from "../assets/img/sliders/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: img1,
    btnText: "Our rooms & suits",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: img2,
    btnText: "Our rooms & suits",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: img3,
    btnText: "Our rooms & suits",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="heroSlider h-[600px] lg:h-[860px] relative "
    >
      {slides.map((slide, index) => {
        // destructuring slide
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            key={index}
            className="h-full relative flex items-center justify-center"
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">
                Just Enjoy and Relax
              </div>
              <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[64px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                className="object-cover h-full w-full"
                src={bg}
                alt={index}
              />
            </div>
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;

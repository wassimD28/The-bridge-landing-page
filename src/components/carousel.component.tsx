import { useState } from "react";
import { courses } from "@/constant/courses.constant";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CourseCard } from "./courseCard.component";
import type { Swiper as SwiperType } from "swiper";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CourseCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3}
      centeredSlides={true}
      initialSlide={1}
      className="w-full px-12"
      onSlideChange={handleSlideChange}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 380,
        },
      }}
    >
      {courses.map((course, index) => (
        <SwiperSlide key={index} className="py-12">
          <CourseCard course={course} isActive={index === activeIndex} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

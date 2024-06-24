import OurWork from "./OurWork";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../Title/Title";
export default function OurWorks({ openPopup }) {
  return (
    <section id="projects" className="our-works">
      <div className="our-works__container">
        <Title addClass="our-works__title">Наши работы</Title>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              loop: true,
            },
            650: {
              slidesPerView: 2,
              loop: false,
            },
            1024: {
              slidesPerView: 3,
              loop: false,
            },
          }}
        >
          <SwiperSlide>
            <OurWork openPopup={openPopup} />
          </SwiperSlide>
          <SwiperSlide>
            <OurWork openPopup={openPopup} />
          </SwiperSlide>
          <SwiperSlide>
            <OurWork openPopup={openPopup} />
          </SwiperSlide>
          <SwiperSlide>
            <OurWork openPopup={openPopup} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

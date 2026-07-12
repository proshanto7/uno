"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../product/ProductCard";

const TopsellingSwiper = ({ products }) => {
  return (
    <div className="relative pb-9 md:pb-12 topselling-swiper">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 14, centeredSlides: true },
          480: { slidesPerView: 2, spaceBetween: 16, centeredSlides: false },
          768: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
          1024: { slidesPerView: 4, spaceBetween: 20, centeredSlides: false },
          1280: { slidesPerView: 5, spaceBetween: 20, centeredSlides: false },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopsellingSwiper;
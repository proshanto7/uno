"use client";

import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DiscountProduct = ({ products }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
         pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".discount-prev",
          nextEl: ".discount-next",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom nav buttons */}
      <button className="cursor-pointer discount-prev hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center text-gray-500 hover:text-gray-800">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button className="cursor-pointer discount-next hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center text-gray-500 hover:text-gray-800">
        <ChevronRight className="w-5 h-5" />
      </button>
    </>
  );
};

export default DiscountProduct;

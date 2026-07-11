"use client";
import Image from "next/image";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideData = [1, 2, 3];

const Banner = () => {
  return (
    <section className="bg-[url(/images/banner.jpg)] bg-cover bg-center">
      <Container>
        <div className="relative">
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {slideData.map((slide) => (
              <SwiperSlide key={slide}>
                <div className="flex flex-col-reverse items-center justify-between gap-6 py-10 text-center sm:py-14 md:flex-row md:gap-8 md:py-16 md:text-left lg:py-0">
                  <div>
                    <h4 className="mb-3 inline-flex items-center font-medium text-xs text-primary leading-6 before:content-[''] before:inline-block before:w-6 before:h-0.5 before:bg-primary before:mr-2.5 before:align-middle sm:text-sm md:before:w-10">
                      Shop our freshest
                    </h4>
                    <h1 className="text-3xl text-secondary font-bold leading-tight sm:text-4xl sm:leading-snug md:text-[42px] md:leading-[1.15] lg:text-[50px] lg:leading-15">
                      Fresh Hand-Picked Vegetables{" "}
                      <span className="text-primary">Everyday</span>{" "}
                    </h1>
                    <h4 className="inline-block mt-4 font-medium text-xs text-primary-text leading-6 after:content-[''] after:block after:w-1/2 after:h-0.5 after:bg-primary-text sm:mt-5 sm:text-sm md:after:w-2/3">
                      DISCOVER MORE
                    </h4>
                  </div>
                  <Image
                    src="/images/img1.png"
                    alt="shape"
                    width={518}
                    height={329}
                    className="h-auto w-48 sm:w-64 md:w-80 md:mt-20 md:mb-14 lg:w-100 lg:mt-30 lg:mb-20 xl:w-129.5"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
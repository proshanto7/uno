"use client";
import Image from "next/image";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Banner = () => {
  return (
    <section className="bg-[url(/images/banner.jpg)] bg-cover bg-center">
      <Container>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="mb-3 font-medium text-sm text-primary leading-6 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-primary before:mr-2.5 before:align-middle">
                  Shop our freshest
                </h4>
                <h1 className="text-[50px] text-secondary font-bold leading-15">
                  Fresh Hand-Picked Vegetables{" "}
                  <span className="text-primary">Everyday</span>{" "}
                </h1>
                <h4 className="inline-block mt-5 font-medium text-sm text-primary-text leading-6 after:content-[''] after:block after:w-2/3 after:h-0.5 after:bg-primary-text ">
                  DISCOVER MORE
                </h4>
              </div>
              <Image
                src="/images/img1.png"
                alt="shape"
                width={518}
                height={329}
                className="mt-30 mb-20"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="mb-3 font-medium text-sm text-primary leading-6 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-primary before:mr-2.5 before:align-middle">
                  Shop our freshest
                </h4>
                <h1 className="text-[50px] text-secondary font-bold leading-15">
                  Fresh Hand-Picked Vegetables{" "}
                  <span className="text-primary">Everyday</span>{" "}
                </h1>
                <h4 className="inline-block mt-5 font-medium text-sm text-primary-text leading-6 after:content-[''] after:block after:w-2/3 after:h-0.5 after:bg-primary-text ">
                  DISCOVER MORE
                </h4>
              </div>
              <Image
                src="/images/img1.png"
                alt="shape"
                width={518}
                height={329}
                className="mt-30 mb-20"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="mb-3 font-medium text-sm text-primary leading-6 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-primary before:mr-2.5 before:align-middle">
                  Shop our freshest
                </h4>
                <h1 className="text-[50px] text-secondary font-bold leading-15">
                  Fresh Hand-Picked Vegetables{" "}
                  <span className="text-primary">Everyday</span>{" "}
                </h1>
                <h4 className="inline-block mt-5 font-medium text-sm text-primary-text leading-6 after:content-[''] after:block after:w-2/3 after:h-0.5 after:bg-primary-text ">
                  DISCOVER MORE
                </h4>
              </div>
              <Image
                src="/images/img1.png"
                alt="shape"
                width={518}
                height={329}
                className="mt-30 mb-20"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Banner;

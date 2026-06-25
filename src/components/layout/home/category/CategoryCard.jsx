import Image from "next/image";
import React from "react";
import Images from "@/app/assets/images/brazil.jpg";
const CategoryCard = () => {
  return (
    <button className="cursor-pointer group">
      <div>
        <div className="bg-white rounded-sm overflow-hidden">
          <Image
            src={Images}
            alt="category1"
            width={260}
            height={220}
            className="w-auto h-auto mx-auto group-hover:transform group-hover:scale-105 duration-300 ease-in-out"
          />
        </div>
        <h4 className="capitalize text-[16px] pt-5 font-medium text-primary-text text-center">
          Brazil
        </h4>

        <span className="text-sm font-normal text-secondary-text block text-center ">
          2 products
        </span>
      </div>
    </button>
  );
};

export default CategoryCard;

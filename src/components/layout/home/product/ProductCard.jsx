"use client";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);

  const { category, name, rating, reviewCount, price, image } = product;


  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < Math.floor(rating) ? "#F5A623" : "none"}
        stroke="#F5A623"
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));

  return (
    <div className="w-64 group  bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col gap-3">
      {/* Image */}

      <div className="relative">
        <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          ) : (
            <svg viewBox="0 0 80 60" className="w-24 opacity-30">
              <circle cx="28" cy="34" r="18" fill="#aaa" />
              <polygon points="52,12 68,40 36,40" fill="#888" />
            </svg>
          )}
        </div>

        {/* Buttons */}

        <div className="absolute hidden group-hover:block  -bottom-4 right-[50%] translate-x-1/2">
          <div className="flex items-center justify-center gap-3">
            <button className="w-11 h-11 rounded-full bg-[#F3E8D6] hover:bg-primary group flex items-center justify-center transition-colors ">
              <ShoppingBag
                size={18}
                className="text-primary-text group-hover:text-white duration-300"
              />
            </button>

            <button className="w-11 h-11 rounded-full bg-[#F3E8D6] hover:bg-primary group flex items-center justify-center transition-colors">
              <Eye
                size={18}
                className="text-green-700 group-hover:text-white duration-300"
              />
            </button>
            <button className="w-11 h-11 rounded-full bg-[#F3E8D6] hover:bg-primary group flex items-center justify-center transition-colors">
              <Heart
                size={18}
                className="text-green-700 group-hover:text-white duration-300"
              />
            </button>

           
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 px-1 pt-4">
        <p className="text-sm text-gray-400 font-normal leading-6 left-6">
          {category}
        </p>
        <h3 className="text-[15px] font-normal text-primary-text">{name}</h3>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="flex items-center gap-0.5">{renderStars(rating)}</div>
          <span className="text-xs text-gray-400">
            {reviewCount?.toLocaleString()}
          </span>
        </div>
        <p className="text-green-600 font-bold text-lg mt-1">
          ${price?.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import BlogImg from "@/app/assets/images/blog.jpg";
import Image from "next/image";

const BlogCard = ({
  author = "Admin",
  date = "April 05, 2020",
  title = "Woman with good shoes is never be ugly place",
}) => {
  return (
    <div className="max-w-xs bg-white rounded overflow-hidden">
      <div>
        <Image
          src={BlogImg}
          alt="blog1"
          width={320}
          height={220}
          className="w-auto h-auto object-cover"
        />
      </div>

      <div className="p-7.75">
        <p className="uppercase text-secondary-text text-sm font-normal leading-6">
          BY <span className="mr-6.5">{author}</span> ADMIN <span>{date}</span>
        </p>

        <h3 className="text-lg text-primary-text font-normal mt-1">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;

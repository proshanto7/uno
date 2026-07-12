import React from "react";
import BlogCard from "./BlogCard";
import Container from "../../Container";
import Title from "../Title";
import Button from "@/components/common/Button";

const Blog = () => {
  return (
    <section className="bg-[#F7F5EE] py-12 md:py-16 lg:pt-22.5 lg:pb-25">
      <Container>
        <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between sm:mb-8.5">
          <Title title="Latest in Blog" />
          <Button name="SEE ALL BLOG" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-7.5">
          {Array.from({ length: 4 }, (_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
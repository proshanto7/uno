import React from "react";
import BlogCard from "./BlogCard";
import Container from "../../Container";
import Title from "../Title";
import Button from "@/components/common/Button";

const Blog = () => {
  return (
    <section className="bg-[#F7F5EE] pt-22.5 pb-25">
      <Container>
        <div className="flex items-center justify-between mb-8.5">
          <Title title="Latest in Blog" />
          <Button name="SEE ALL BLOG" />
        </div>
        <div className="grid grid-cols-4 gap-7.5">
          {Array.from({ length: 4 }, (_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;

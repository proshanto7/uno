import React from "react";
import Container from "../../Container";
import Title from "../Title";
import Button from "@/components/common/Button";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="bg-[#F7F5EE] py-10 md:py-16 lg:pt-25 lg:pb-22">
      <Container>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Title title="Categories" />

          <Button name="SHOP ALL CATEGORIES" />
        </div>

        <div className="grid grid-cols-2 gap-5 mt-8 sm:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-7 lg:mt-10">
          {Array.from({ length: 5 }, (_, i) => (
            <CategoryCard key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
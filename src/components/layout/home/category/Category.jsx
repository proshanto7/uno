import React from "react";
import Container from "../../Container";
import Title from "../Title";
import Button from "@/components/common/Button";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="bg-[#F7F5EE] pt-25 pb-22">
      <Container>
        <div className="flex items-center justify-between">
          <Title title="Categories" />

          <Button name="SHOP ALL CATEGORIES" />
        </div>

        <div className="grid grid-cols-5 gap-7 mt-10">
          {Array.from({ length: 5 }, (_, i) => (
            <CategoryCard key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;

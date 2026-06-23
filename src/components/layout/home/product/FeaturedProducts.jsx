import React from "react";
import ProductCard from "./ProductCard";
import Container from "../../Container";
import Title from "../Title";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturedProducts = async () => {
const res = await fetch("https://fakestoreapi.com/products");
const data = await res.json();

const product = data.map((item) => ({
  category: item.category,
  name: item.title,
  rating: item.rating.rate,
  reviewCount: item.rating.count,
  price: item.price,
  image: item.image,
}));
  return (
    <section className="py-20">
      <Container>
        <div className="relative">
          <Title />

          <div className="absolute top-0 right-0">
            <Tabs defaultValue="overview">
              <TabsList variant="line">
                <TabsTrigger value="Best_Sellers">Best Sellers </TabsTrigger>
                <TabsTrigger value="Most_Popular">Most Popular</TabsTrigger>
                <TabsTrigger value="Top_20">Top 20</TabsTrigger>
                <TabsTrigger value="Best_Rated">Best Rated</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-8.50 gap-y-7.5 ">
          {product.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;

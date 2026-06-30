import React from "react";
import ProductCard from "./ProductCard";
import Container from "../../Container";
import Title from "../Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturedProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
  next: { revalidate: 3600 },
});

if (!res.ok) {
  throw new Error(`Fetch failed: ${res.status}`);
}

const contentType = res.headers.get("content-type");

if (!contentType?.includes("application/json")) {
  const text = await res.text();
  throw new Error(`Expected JSON but got: ${text.slice(0, 100)}`);
}

const data = await res.json();

  const product = data.map((item) => ({
    id: item.id,
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
          <Title  title="Featured Products"/>

          <div>
            <Tabs defaultValue="overview" className="w-full">
              <div className="absolute top-0 right-0">
                <TabsList variant="line">
                  <TabsTrigger value="Best_Sellers">Best Sellers </TabsTrigger>
                  <TabsTrigger value="Most_Popular">Most Popular</TabsTrigger>
                  <TabsTrigger value="Top_20">Top 20</TabsTrigger>
                  <TabsTrigger value="Best_Rated">Best Rated</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="Best_Sellers">
                <div className="w-full grid grid-cols-5 gap-8.50 gap-y-7.5 mt-8.75 ">
                  {product.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="Top_20">
                <div>
                  <h1>Top 20</h1>
                </div>
              </TabsContent>
              <TabsContent value="Most_Popular">
                <div>
                  <h1>Most Popular</h1>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;

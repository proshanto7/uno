"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Container from "../../Container";
import Title from "../Title";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const FeaturedProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error(`Fetch failed: ${res.status}`);
        }

        const data = await res.json();

        const formatted = data.map((item) => ({
          id: item.id,
          category: item.category,
          name: item.title,
          rating: item.rating.rate,
          reviewCount: item.rating.count,
          price: item.price,
          image: item.image,
        }));

        setProduct(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <Container>
        <Tabs defaultValue="Best_Sellers" className="w-full">
          <div className="flex flex-col gap-5 md:relative md:flex-row md:items-center md:justify-between">
            <Title title="Featured Products" />

            <div className="overflow-x-auto md:static md:top-0 md:right-0 md:overflow-visible">
              <TabsList
                variant="line"
                className="w-max min-w-full md:w-auto md:min-w-0"
              >
                <TabsTrigger value="Best_Sellers">Best Sellers</TabsTrigger>
                <TabsTrigger value="Most_Popular">Most Popular</TabsTrigger>
                <TabsTrigger value="Top_20">Top 20</TabsTrigger>
                <TabsTrigger value="Best_Rated">Best Rated</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="Best_Sellers">
            <div className="grid w-full grid-cols-2 gap-5 gap-y-6 mt-6 sm:grid-cols-3 md:gap-6 md:mt-8 lg:grid-cols-4 lg:gap-8.5 lg:gap-y-7.5 xl:grid-cols-5">
              {product.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Top_20">
             <div className="grid w-full grid-cols-2 gap-5 gap-y-6 mt-6 sm:grid-cols-3 md:gap-6 md:mt-8 lg:grid-cols-4 lg:gap-8.5 lg:gap-y-7.5 xl:grid-cols-5">
              {product.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Most_Popular">
            <div className="grid w-full grid-cols-2 gap-5 gap-y-6 mt-6 sm:grid-cols-3 md:gap-6 md:mt-8 lg:grid-cols-4 lg:gap-8.5 lg:gap-y-7.5 xl:grid-cols-5">
              {product.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Best_Rated">
            <div className="grid w-full grid-cols-2 gap-5 gap-y-6 mt-6 sm:grid-cols-3 md:gap-6 md:mt-8 lg:grid-cols-4 lg:gap-8.5 lg:gap-y-7.5 xl:grid-cols-5">
              {product.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
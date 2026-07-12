"use client";

import React, { useEffect, useState } from "react";
import Container from "../../Container";
import Title from "../Title";
import Button from "@/components/common/Button";
import TopsellingSwiper from "./TopsellingSwiper";

const Topselling = () => {
  const [products, setProducts] = useState([]);
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

        const formatted = data.slice(0, 8).map((item) => ({
          id: item.id,
          category: item.category,
          name: item.title,
          rating: item.rating.rate,
          reviewCount: item.rating.count,
          price: item.price,
          image: item.image,
        }));

        setProducts(formatted);
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
    <section className="pt-12 md:pt-16 lg:pt-22.75">
      <Container>
        <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between sm:mb-8">
          <Title title="Top Selling Products" />
          <Button name="SEE ALL PRODUCT" />
        </div>

        <TopsellingSwiper products={products} />
      </Container>
    </section>
  );
};

export default Topselling;
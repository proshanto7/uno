"use client";

import { useEffect, useState } from "react";
import Container from "../../Container";
import Title from "../Title";
import DiscountProduct from "./DiscountProduct";

const Discount = () => {
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
    <section className="pb-12 md:pb-16 lg:pb-20">
      <Container>
        <Title title="Discount" />

        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Left discount banner */}
            <div className="md:col-span-1 bg-green-500 rounded-2xl flex flex-col items-center justify-center text-white text-center px-4 w-full h-40 sm:h-48 md:h-82 md:max-w-67.5 md:min-h-75">
              <h2 className="text-2xl font-bold">$20</h2>
              <p className="text-base mt-1">Under Products</p>
              <p className="text-xs mt-1 opacity-80">Limited Time Only</p>
            </div>
            <div className="md:col-span-4 relative">
              <DiscountProduct products={products} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Discount;
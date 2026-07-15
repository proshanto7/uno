"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api/shop";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        const formatted = data.products.map((item) => ({
          id: item.id,
          category: item.category,
          brand: item.brand,
          name: item.title,
          rating: item.rating,
          reviewCount: item.reviews?.length ?? item.stock ?? 0,
          price: item.price,
          image: item.thumbnail,
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

  return {
    products,
    loading,
    error,
  };
}
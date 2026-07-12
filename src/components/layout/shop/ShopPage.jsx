"use client";

import { useEffect, useState, useMemo } from "react";
import Container from "@/components/layout/Container";
import ShopBanner from "@/components/layout/shop/ShopBanner"; // adjust path to your actual file
import ProductCard from "@/components/layout/home/product/ProductCard"; // adjust path to your actual file

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("STAYHOME");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

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
        setProducts(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // "#STAYHOME" and "NEW IN" show everything; everything else filters by
  // matching product.category against the clicked nav label.
  const filteredProducts = useMemo(() => {
    if (activeCategory === "#STAYHOME" || activeCategory === "NEW IN") {
      return products;
    }
    return products.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [products, activeCategory]);

  return (
    <>
      <ShopBanner
        title={activeCategory}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <section className="py-10 md:py-16">
        <Container>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}

          {!loading && !error && (
            <>
              {filteredProducts.length === 0 ? (
                <p className="text-center text-secondary-text">
                  No products found in this category.
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-5 gap-y-6 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8.5 lg:gap-y-7.5 xl:grid-cols-5">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default ShopPage;
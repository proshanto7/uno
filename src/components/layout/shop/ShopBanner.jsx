"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../Container";

// Fallback static categories, dynamic fetch fail করলে এগুলো দেখাবে
const fallbackCategories = [
  { slug: "ALL", name: "ALL" },
  { slug: "smartphones", name: "Smartphones" },
  { slug: "laptops", name: "Laptops" },
  { slug: "fragrances", name: "Fragrances" },
  { slug: "skincare", name: "Skincare" },
  { slug: "mens-shirts", name: "Men's Shirts" },
  { slug: "womens-dresses", name: "Women's Dresses" },
  { slug: "mens-shoes", name: "Men's Shoes" },
  { slug: "womens-shoes", name: "Women's Shoes" },
];

const ShopBanner = ({ title = "ALL", activeCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState(fallbackCategories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const data = await res.json();
        // DummyJSON returns [{ slug, name, url }, ...]
        const formatted = data.map((c) => ({
          slug: c.slug,
          name: c.name,
        }));
        setCategories([{ slug: "ALL", name: "ALL" }, ...formatted]);
      } catch (err) {
        // fetch fail করলে fallback list-ই থাকবে
        console.error("Category fetch error:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="bg-[url(/images/shopBanner.png)] bg-cover bg-center py-16 md:py-20 lg:py-27.5">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:gap-8">
          <h1 className="text-3xl font-bold text-primary-text uppercase sm:text-4xl md:text-[42px]">
            {title}
          </h1>

          <ul className="flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
            {categories.map((item) => {
              const isActive = item.slug === activeCategory;
              return (
                <li key={item.slug}>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onCategoryChange(item.slug);
                    }}
                    className={`cursor-pointer text-xs font-medium tracking-wide whitespace-nowrap sm:text-sm ${
                      isActive
                        ? "text-primary-text underline underline-offset-4"
                        : "text-secondary-text hover:text-primary-text"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ShopBanner;
"use client";
import React from "react";
import Link from "next/link";
import Container from "../Container";

export const categories = [
  "STAYHOME",
  "NEW IN",
  "JACKETS",
  "HOODIES",
  "MEN",
  "WOMEN",
  "TROUSERS",
  "ACCESSORIES",
  "SHOES",
];

const ShopBanner = ({ title = "SHOES", activeCategory, onCategoryChange }) => {
  return (
    <section className="bg-[url(/images/shopBanner.png)] bg-cover bg-center py-16 md:py-20 lg:py-27.5">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:gap-8">
          <h1 className="text-3xl font-bold text-primary-text sm:text-4xl md:text-[42px]">
            {title}
          </h1>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
            {categories.map((item) => {
              const isActive = item === activeCategory;
              return (
                <li key={item}>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onCategoryChange(item);
                    }}
                    className={`cursor-pointer text-xs font-medium tracking-wide sm:text-sm ${
                      isActive
                        ? "text-primary-text underline underline-offset-4"
                        : "text-secondary-text hover:text-primary-text"
                    }`}
                  >
                    {item}
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
"use client";

import { useEffect, useState, useMemo } from "react";
import { LayoutGrid, List } from "lucide-react";
import Container from "@/components/layout/Container";
import ShopBanner from "@/components/layout/shop/ShopBanner";
import ShopSidebar from "@/components/layout/shop/ShopSidebar";
import ProductCard from "@/components/layout/home/product/ProductCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PAGE_SIZE = 9;

const sortOptions = [
  { label: "Default sorting", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
];

// Pagination range helper: 1 ... 4 5 6 7 ... 20 style (sliding window)
const getPaginationRange = (current, total, leftOffset = 1, rightOffset = 2) => {
  if (total <= leftOffset + rightOffset + 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  let start = Math.max(current - leftOffset, 2);
  let end = Math.min(current + rightOffset, total - 1);

  if (current - leftOffset <= 2) {
    start = 2;
    end = leftOffset + rightOffset + 2;
  }

  if (current + rightOffset >= total - 1) {
    end = total - 1;
    start = total - (leftOffset + rightOffset + 2);
  }

  const middle = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const showLeftDots = start > 2;
  const showRightDots = end < total - 1;

  return [
    1,
    showLeftDots ? "dots" : null,
    ...middle,
    showRightDots ? "dots" : null,
    total,
  ].filter(Boolean);
};

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("HOODIES");
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=194");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const data = await res.json();
        const formatted = data.products.map((item) => ({
          id: item.id,
          category: item.category,
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

  const filteredProducts = useMemo(() => {
    let list =
      activeCategory === "#STAYHOME" || activeCategory === "NEW IN"
        ? products
        : products.filter(
            (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
          );

    switch (sortBy) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [products, activeCategory, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE)
  );
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  useEffect(() => {
    setPage(1);
  }, [activeCategory, sortBy]);

  return (
    <>
      <ShopBanner
        title={activeCategory}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <section className="py-10 md:py-14">
        <Container>
          {/* Breadcrumb + sort + view */}
          <div className="mb-8 flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-wide text-secondary-text">
              Home / The Shop
            </p>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-9 w-44 rounded-none border-border text-xs uppercase tracking-wide">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {sortOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <div className="hidden items-center gap-2 sm:flex">
                <button type="button" className="cursor-pointer text-primary-text">
                  <LayoutGrid size={16} />
                </button>
                <button
                  type="button"
                  className="cursor-pointer text-secondary-text hover:text-primary-text"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar + grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
            <ShopSidebar />

            <div>
              {loading && <div>Loading...</div>}
              {error && <div>Error: {error}</div>}

              {!loading && !error && (
                <>
                  {paginatedProducts.length === 0 ? (
                    <p className="text-center text-secondary-text">
                      No products found in this category.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                      {paginatedProducts.map((product, idx) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          badge={idx === 0 ? "SALE" : idx === 1 ? "NEW" : undefined}
                        />
                      ))}
                    </div>
                  )}

                  {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-3 text-sm">
                      <button
                        type="button"
                        disabled={page === 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className="cursor-pointer text-secondary-text hover:text-primary-text disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        &lt; PREV
                      </button>

                      {getPaginationRange(page, totalPages).map((p, idx) =>
                        p === "dots" ? (
                          <span
                            key={`dots-${idx}`}
                            className="w-8 select-none text-center text-secondary-text"
                          >
                            ...
                          </span>
                        ) : (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setPage(p)}
                            className={`h-8 w-8 cursor-pointer rounded-full ${
                              p === page
                                ? "bg-primary-text text-white"
                                : "text-secondary-text hover:text-primary-text"
                            }`}
                          >
                            {p}
                          </button>
                        )
                      )}

                      <button
                        type="button"
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        className="cursor-pointer text-secondary-text hover:text-primary-text disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        NEXT &gt;
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ShopPage;
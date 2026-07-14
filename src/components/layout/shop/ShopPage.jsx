"use client";

import { useEffect, useState, useMemo } from "react";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";

const PAGE_SIZE = 9;

const sortOptions = [
  { label: "Default sorting", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
];

const fallbackCategories = [{ slug: "ALL", name: "ALL" }];

//pagination functions

const getPaginationRange = (current, total, siblingCount = 2) => {
  const windowSize = siblingCount * 2 + 1;

  if (total <= windowSize + 1) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  let start = Math.max(current - siblingCount, 1);
  let end = Math.min(start + windowSize - 1, total);
  start = Math.max(end - windowSize + 1, 1);

  const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const showRightDots = end < total - 1;
  const showLastPage = end < total;

  return [
    ...range,
    showRightDots ? "dots" : null,
    showLastPage ? total : null,
  ].filter(Boolean);
};

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(fallbackCategories);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sortBy, setSortBy] = useState("default");
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sidebarFilters, setSidebarFilters] = useState({
    color: null,
    size: null,
    brands: [],
    priceRange: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=194");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const data = await res.json();
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const data = await res.json();
        const formatted = data.map((c) => ({ slug: c.slug, name: c.name }));
        setCategories([{ slug: "ALL", name: "ALL" }, ...formatted]);
      } catch (err) {
        console.error("Category fetch error:", err);
      }
    };

    fetchCategories();
  }, []);

  const uniqueBrands = useMemo(
    () => [...new Set(products.map((p) => p.brand).filter(Boolean))].sort(),
    [products],
  );

  const maxPrice = useMemo(() => {
    if (products.length === 0) return 1000;
    return Math.ceil(Math.max(...products.map((p) => p.price)) / 10) * 10;
  }, [products]);

  const filteredProducts = useMemo(() => {
    let list =
      activeCategory === "ALL"
        ? products
        : products.filter(
            (p) => p.category.toLowerCase() === activeCategory.toLowerCase(),
          );

    if (sidebarFilters.brands.length > 0) {
      list = list.filter((p) => sidebarFilters.brands.includes(p.brand));
    }
    if (sidebarFilters.priceRange) {
      const [min, max] = sidebarFilters.priceRange;
      list = list.filter((p) => p.price >= min && p.price <= max);
    }

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
  }, [products, activeCategory, sortBy, sidebarFilters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  useEffect(() => {
    setPage(1);
  }, [activeCategory, sortBy, sidebarFilters]);

  const sidebarProps = {
    categories,
    activeCategory,
    onCategoryChange: (val) => {
      setActiveCategory(val);
      setFilterOpen(false); // mobile-এ category select করলে drawer বন্ধ হয়ে যাবে
    },
    brands: uniqueBrands,
    maxPrice,
    onFilterChange: setSidebarFilters,
  };

  return (
    <>
      <ShopBanner
        title={activeCategory}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={categories}
      />

      <section className="py-10 md:py-14">
        <Container>
          {/* Breadcrumb + filter button (mobile) + sort + view */}
          <div className="mb-8 flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
            <DynamicBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/shop" },
                ...(activeCategory !== "ALL"
                  ? [
                      {
                        label:
                          categories.find((c) => c.slug === activeCategory)
                            ?.name ?? activeCategory,
                      },
                    ]
                  : []),
              ]}
            />

            <div className="flex items-center justify-between gap-3 sm:justify-end sm:gap-4">
              {/* Mobile-only Filter button */}

              <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                <SheetTrigger className="flex h-9 items-center gap-2 rounded-none border border-border px-4 text-xs uppercase tracking-wide hover:bg-accent lg:hidden">
                  <SlidersHorizontal size={14} />
                  Filter
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-75 overflow-y-auto px-5 sm:w-85"
                >
                  <SheetHeader className="px-0">
                    <SheetTitle className="text-left text-sm uppercase tracking-wide">
                      Filters
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <ShopSidebar {...sidebarProps} />
                  </div>
                </SheetContent>
              </Sheet>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-9 w-36 rounded-none border-border text-xs uppercase tracking-wide sm:w-44">
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
                <button
                  type="button"
                  className="cursor-pointer text-primary-text"
                >
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

          {/* Sidebar (desktop) + grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
            <div className="hidden lg:block">
              <ShopSidebar {...sidebarProps} />
            </div>

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
                          badge={
                            idx === 0 ? "SALE" : idx === 1 ? "NEW" : undefined
                          }
                        />
                      ))}
                    </div>
                  )}

                  {totalPages > 1 && (
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-1.5 text-xs sm:gap-3 sm:text-sm">
                      <button
                        type="button"
                        disabled={page === 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className="cursor-pointer whitespace-nowrap text-secondary-text hover:text-primary-text disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        &lt;{" "}
                        <span className="hidden md:inline text-primary-text">
                          PREV
                        </span>
                      </button>

                      {getPaginationRange(page, totalPages).map((p, idx) =>
                        p === "dots" ? (
                          <span
                            key={`dots-${idx}`}
                            className="w-5 select-none text-center text-secondary-text sm:w-8"
                          >
                            ...
                          </span>
                        ) : (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setPage(p)}
                            className={`h-7 w-7 shrink-0 cursor-pointer rounded-full sm:h-8 sm:w-8 ${
                              p === page
                                ? "bg-primary-text text-white"
                                : "text-secondary-text hover:text-primary-text"
                            }`}
                          >
                            {p}
                          </button>
                        ),
                      )}

                      <button
                        type="button"
                        disabled={page === totalPages}
                        onClick={() =>
                          setPage((p) => Math.min(totalPages, p + 1))
                        }
                        className="cursor-pointer whitespace-nowrap text-secondary-text hover:text-primary-text disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <span className="hidden md:inline text-primary-text">
                          NEXT
                        </span>{" "}
                        &gt;
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

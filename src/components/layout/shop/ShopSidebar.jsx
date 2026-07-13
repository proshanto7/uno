"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const productCategories = [
  "Preview",
  "Perspective",
  "Fashion",
  "Furniture",
  "Backpacks",
  "T-Shirts & Bags",
  "Apparel & Fitness",
];

const colors = [
  "#111111",
  "#8B8B8B",
  "#C9A876",
  "#7C3F2E",
  "#4B6043",
  "#2F4858",
];

const sizes = ["S", "M", "L", "XL"];

const brands = ["Active", "Softwear", "Ecoshoes", "Trendify", "Zeal"];

const ShopSidebar = ({ onFilterChange }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 400]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredBrands = brands.filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <aside className="flex flex-col gap-8 text-sm">
      {/* Product Categories */}
      <div>
        <h3 className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-primary-text">
          Product Categories
        </h3>
        <ul className="flex flex-col gap-2.5">
          {productCategories.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                className="cursor-pointer text-left text-secondary-text hover:text-primary-text"
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Color */}
      <div>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary-text">
          Color
        </h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
              className={`h-6 w-6 cursor-pointer rounded-full ring-offset-2 transition-shadow ${
                selectedColor === color
                  ? "ring-2 ring-primary-text"
                  : "ring-0"
              }`}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary-text">
          Sizes
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`h-9 w-9 cursor-pointer rounded-full border text-xs font-medium transition-colors ${
                selectedSize === size
                  ? "border-primary-text bg-primary-text text-white"
                  : "border-border text-primary-text hover:border-primary-text"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary-text">
          Brands
        </h3>
        <Input
          value={brandSearch}
          onChange={(e) => setBrandSearch(e.target.value)}
          placeholder="Search"
          className="mb-3 h-9 rounded-none border-border text-sm"
        />
        <ul className="flex flex-col gap-2.5">
          {filteredBrands.map((brand) => (
            <li key={brand} className="flex items-center gap-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
                className="cursor-pointer rounded-none border-border data-[state=checked]:bg-primary-text data-[state=checked]:border-primary-text"
              />
              <Label
                htmlFor={`brand-${brand}`}
                className="cursor-pointer text-secondary-text"
              >
                {brand}
              </Label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary-text">
          Price
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={1000}
          step={10}
          className="mb-3"
        />
        <p className="text-xs text-secondary-text">
          Price: ${priceRange[0]} — ${priceRange[1]}
        </p>
      </div>
    </aside>
  );
};

export default ShopSidebar;
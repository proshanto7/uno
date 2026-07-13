"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const colors = [
  "#111111",
  "#8B8B8B",
  "#C9A876",
  "#7C3F2E",
  "#4B6043",
  "#2F4858",
];

const sizes = ["S", "M", "L", "XL"];

const ShopSidebar = ({
  categories = [],
  activeCategory,
  onCategoryChange,
  brands = [],
  onFilterChange,
  maxPrice = 1000,
}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, maxPrice]);

  useEffect(() => {
    setPriceRange([0, maxPrice]);
  }, [maxPrice]);

  useEffect(() => {
    onFilterChange?.({
      color: selectedColor,
      size: selectedSize,
      brands: selectedBrands,
      priceRange,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor, selectedSize, selectedBrands, priceRange]);

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
      {/* Product Categories - Dropdown */}
      <div>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary-text">
          Product Categories
        </h3>
        <Select
          value={activeCategory}
          onValueChange={(val) => onCategoryChange?.(val)}
        >
          <SelectTrigger className="h-10 w-full rounded-none border-border text-sm">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent className="max-h-72">
            <SelectGroup>
              {categories.map((cat) => (
                <SelectItem key={cat.slug} value={cat.slug}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
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
              onClick={() =>
                setSelectedColor((prev) => (prev === color ? null : color))
              }
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
              onClick={() =>
                setSelectedSize((prev) => (prev === size ? null : size))
              }
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
      {brands.length > 0 && (
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
          <ul className="flex max-h-52 flex-col gap-2.5 overflow-y-auto">
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
      )}

      {/* Price */}
      <div>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary-text">
          Price
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={maxPrice}
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
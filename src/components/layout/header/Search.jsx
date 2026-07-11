import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function Search() {
  const items = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ];
  return (
    <div className="relative hidden lg:inline-block">
      <input
        className="bg-white w-136 h-12.5 rounded-sm pl-5"
        placeholder="Search products..."
        type="text"
      />
      <div>
        <Select items={items}>
          <SelectTrigger className="w-30 text-primary-text text-sm font-normal leading-6 absolute top-2 right-14">
            <SelectValue placeholder="All Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <button className="absolute top-4 right-3 cursor-pointer z-99">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_47_381)">
              <path
                d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.84769 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.84769 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.84769 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
                fill="#222222"
              />
              <path
                d="M19.762 18.6122L15.1007 13.9509C14.7831 13.6333 14.2687 13.6333 13.9511 13.9509C13.6335 14.2683 13.6335 14.7832 13.9511 15.1005L18.6124 19.7618C18.7711 19.9206 18.979 20 19.1872 20C19.395 20 19.6031 19.9206 19.762 19.7618C20.0796 19.4444 20.0796 18.9295 19.762 18.6122Z"
                fill="#222222"
              />
            </g>
            <defs>
              <clipPath id="clip0_47_381">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;
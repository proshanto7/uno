"use client";
import { useState } from "react";
import Link from "next/link";
import { ChartNoAxesGantt } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navData = [
  { id: 1, title: "HOME", link: "#" },
  { id: 2, title: "COLLECTION", link: "#" },
  { id: 3, title: "JOURNAL", link: "#" },
  { id: 4, title: "LOOKBOOK", link: "#" },
  { id: 5, title: "PAGES", link: "#" },
];

const categoryItems = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="inline-flex cursor-pointer border-0 bg-transparent p-0 lg:hidden">
        <ChartNoAxesGantt className="text-white" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="flex w-full flex-col gap-0 p-0 sm:max-w-xs"
      >
        <SheetHeader className="flex-row items-center justify-between space-y-0 border-b border-border px-5 py-4">
          <SheetTitle className="text-xs font-semibold tracking-widest text-primary-text">
            MENU
          </SheetTitle>
          <SheetClose className="cursor-pointer rounded-sm text-primary-text opacity-70 transition-opacity hover:opacity-100">
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-6">
          {/* search */}
          <div className="relative">
            <input
              className="h-11 w-full rounded-sm border border-border bg-white pl-4 pr-10 text-sm text-primary-text placeholder:text-secondary-text"
              placeholder="Search products..."
              type="text"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_menu_search)">
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
                  <clipPath id="clip0_menu_search">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <Select>
            <SelectTrigger className="w-full text-sm font-normal text-primary-text">
              <SelectValue placeholder="All Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categoryItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* nav links */}
          <ul className="flex flex-col gap-1 border-t border-border pt-4">
            {navData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block cursor-pointer py-2.5 text-sm font-medium text-primary-text"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* buttons */}
          <div className="flex flex-col gap-3 border-t border-border pt-4 text-sm font-medium text-primary-text">
            <button className="cursor-pointer text-left">
              SPECIAL OFFER
            </button>
            <button className="cursor-pointer text-left">
              PURCHASE THEME
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
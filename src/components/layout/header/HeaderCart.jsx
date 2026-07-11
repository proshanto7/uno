"use client";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

const initialItems = [
  {
    id: 1,
    name: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    qty: 4,
    price: 99,
  },
  {
    id: 2,
    name: "Kirby T-Shirt",
    color: "Yellow",
    size: "L",
    qty: 4,
    price: 99,
  },
  {
    id: 3,
    name: "Cableknit Shawl",
    color: "Yellow",
    size: "L",
    qty: 4,
    price: 99,
  },
];

const HeaderCart = () => {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

 const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  return (
    <Sheet>
      <SheetTrigger className="relative inline-flex cursor-pointer border-0 bg-transparent p-0">
        <ShoppingCart className="h-5 w-5" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {items.length}
          </span>
        )}
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-sm">
        <SheetHeader className="flex-row items-center justify-between space-y-0 border-b px-5 py-4">
          <SheetTitle className="text-xs font-semibold tracking-widest">
            SHOPPING BAG ({items.length})
          </SheetTitle>
          <SheetClose className="rounded-sm opacity-70 transition-opacity hover:opacity-100">
            <span className="sr-only cursor-pointer">Close</span>
          </SheetClose>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Your bag is empty.
            </p>
          ) : (
            items.map((item, idx) => (
              <div
                key={item.id}
                className={`flex gap-3 py-4 ${
                  idx !== items.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="h-20 w-20 shrink-0 rounded-sm bg-muted" />

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Color: {item.color}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Size: {item.size}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <X className="h-3.5 w-3.5" />
                      <span className="sr-only">Remove {item.name}</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Decrease quantity</span>
                      </button>
                      <span className="w-4 text-center text-xs">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Increase quantity</span>
                      </button>
                    </div>
                    <span className="text-sm font-medium"> ${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <SheetFooter className="flex-col gap-3 border-t px-5 py-5 sm:flex-col">
          <div className="flex w-full items-center justify-between text-xs font-semibold tracking-widest">
            <span>SUBTOTAL:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Button className="w-full rounded-none py-6 bg-[#E4E4E4] text-black cursor-pointer">
            VIEW CART
          </Button>
          <Button className="w-full rounded-none bg-black py-6 text-white cursor-pointer hover:bg-black/90">
            CHECKOUT
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderCart;

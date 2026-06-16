import Logo from "@/components/common/Logo";
import React from "react";
import Container from "../Container";
import Search from "./Search";
import { ChartNoAxesGantt, Heart, ShoppingCart, UserRound } from "lucide-react";

function Topheader() {
  return (
    <div className="bg-secondary">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-8.25">
            <Logo />
            <Search />
          </div>
          <div className="flex items-center gap-7.5 text-white ">
            <button className="cursor-pointer">
              <UserRound />
            </button>
            <button className="cursor-pointer">
              <Heart />
            </button>
            <button className="cursor-pointe relative">
              <ShoppingCart />
              <span className="absolute -bottom-4 right-0 flex h-4 w-4 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">5</span>
            </button>
            <button className="cursor-pointer">
              <ChartNoAxesGantt />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Topheader;

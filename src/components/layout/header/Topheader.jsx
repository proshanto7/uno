import Logo from "@/components/common/Logo";
import React from "react";
import Container from "../Container";
import Search from "./Search";
import {  Heart } from "lucide-react";
import HeaderCart from "./HeaderCart";
import HeaderAuth from "./HeaderAuth";
import NavMenu from "./NavMenu";

function Topheader() {
  return (
    <div className="bg-secondary">
      <Container>
        <div className="flex items-center justify-between py-4 lg:py-2">
          <div className="flex items-center gap-8.25">
            <Logo />
            <Search />
          </div>
          <div className="flex items-center gap-7.5 text-white ">
           <HeaderAuth/>
            <button className="cursor-pointer">
              <Heart />
            </button>
            <HeaderCart />
           <NavMenu className="block md:hidden"/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Topheader;

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import React from "react";

export default function Mainlayout({ children }) {
  return (
    <>
      <Header />
      {children}



      
      <Footer />
    </>
  );
}

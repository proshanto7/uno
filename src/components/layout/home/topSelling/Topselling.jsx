import React from "react";
import Container from "../../Container";
import Title from "../Title";
import Button from "@/components/common/Button";
import TopsellingSwiper from "./TopsellingSwiper";

const Topselling = async () => {
 const res = await fetch("https://fakestoreapi.com/products", {
  next: { revalidate: 3600 },
});

if (!res.ok) {
  throw new Error(`Fetch failed: ${res.status}`);
}
if (!res.ok) {
  throw new Error(`Discount: ${res.status}`);
}
const contentType = res.headers.get("content-type");

if (!contentType?.includes("application/json")) {
  const text = await res.text();
  throw new Error(`Expected JSON but got: ${text.slice(0, 100)}`);
}

const data = await res.json();

  const products = data.slice(0, 8).map((item) => ({
    id: item.id,
    category: item.category,
    name: item.title,
    rating: item.rating.rate,
    reviewCount: item.rating.count,
    price: item.price,
    image: item.image,
  }));

  return (
    <section className="pt-22.75">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <Title title="Top Selling Products" />
          <Button name="SEE ALL PRODUCT" />
        </div>

        <TopsellingSwiper products={products} />
      </Container>
    </section>
  );
};

export default Topselling;

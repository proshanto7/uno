import React from "react";
import Container from "../../Container";
import Cardcontent from "./Cardcontent";
import { Gift, Headset, ShieldCheck, TruckElectric } from "lucide-react";

function Content() {
  const contentData = [
    {
      id: 1,
      icon: <TruckElectric className="text-primary size-11.25" />,
      title: "Fast and Free Delivery",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: <Headset className="text-primary size-11.25" />,

      title: "24/7 Customer Support",
      description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: <ShieldCheck className="text-primary size-11.25" />,

      title: "Money Back Guarantee",
      description: "We return money within 30 days",
    },
    {
      id: 4,
      icon: <Gift className="text-primary size-11.25" />,
      title: "Member Gifts",
      description: "Discount coupons weekends.",
    },
  ];

  return (
    <section className="bg-[#F7F5EE]">
      <Container>
        <div className="flex items-center justify-between">
          {contentData.map((item) => (
            <Cardcontent key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Content;

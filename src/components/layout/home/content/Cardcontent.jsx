import React from "react";
import { TruckElectric } from "lucide-react";
function Cardcontent({ item }) {
  const { icon, title, description } = item;
  return (
    <div className="flex items-center gap-4 py-12.5">
      <div>{icon}</div>
      <div>
        <h5 className="text-[16px] font-medium text-primary-text mb-1">{title} </h5>
        <h4 className="text-[15px] font-normal text-secondary-text">
          {description}
        </h4>
      </div>
    </div>
  );
}

export default Cardcontent;

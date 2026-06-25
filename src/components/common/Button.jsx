import React from "react";

const Button = ({ name }) => {
  return (
    <button className="cursor-pointer relative text-sm font-medium leading-6 text-primary-text uppercase tracking-wide pb-2 after:content-[''] after:absolute after:left-0 after:bottom-2 after:h-0.5 after:w-3/4 after:bg-primary-text">
      {name}
    </button>
  );
};

export default Button;
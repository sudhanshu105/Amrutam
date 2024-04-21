import React from "react";

const sizes = {
  "3xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  "2xl": "text-2xl font-semibold md:text-[22px]",
  xl: "text-xl font-semibold",
  s: "text-[15px] font-semibold",
  md: "text-base font-semibold",
  xs: "text-sm font-semibold",
  lg: "text-lg font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-green-800_01 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

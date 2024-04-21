import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-lg font-normal",
  s: "text-[15px] font-medium",
  "2xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  xl: "text-xl font-medium",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_02 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

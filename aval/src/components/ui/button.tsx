


import React, { type ButtonHTMLAttributes } from "react";
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // use ReactNode instead of ReactChild
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className,
  ...props
}) => {
  const btnClass = classNames(
    "rounded font-semibold focus:outline-none transition",
    {
      "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
      "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "secondary",
      "border border-gray-400 text-gray-800 hover:bg-gray-100": variant === "outline",
      "px-2 py-1 text-sm": size === "small",
      "px-4 py-2 text-base": size === "medium",
      "px-6 py-3 text-lg": size === "large",
    },
    className
  );

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};

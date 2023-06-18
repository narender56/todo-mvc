import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...otherProps }: ButtonProps) {
  return (
    <button {...otherProps}>
      {children}
    </button>
  );
}

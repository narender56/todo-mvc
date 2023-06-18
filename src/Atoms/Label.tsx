import React, { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ children, ...otherProps }: LabelProps) {
  return <label {...otherProps}>{children}</label>;
}

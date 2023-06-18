import React, { ReactNode } from "react";

interface TypographyProps {
    className?: string;
    variant: "h1" | "h2" | "h3" | "p" | "span";
    children: ReactNode;
}

export function Typography ({ className, variant = "p", children }: TypographyProps) {
  const Tag = variant;

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}

import React, { LinkHTMLAttributes, ReactNode } from "react";

interface AnchorProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
}

export function Anchor({ children, ...otherProps }: AnchorProps) {
  return <a {...otherProps}>{children}</a>;
}

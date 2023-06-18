import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ type, value, onChange, ...otherProps }: InputProps) {
  return (
    <input type={type} value={value} onChange={onChange} {...otherProps} />
  )
}
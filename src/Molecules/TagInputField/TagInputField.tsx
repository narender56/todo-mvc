import React, { InputHTMLAttributes } from "react";

import { Label } from "../../Atoms";

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
  onDoubleClick?: () => void;
}

export function TagInputField({ id, className, children, label, labelClasses, inputClasses, onDoubleClick, ...otherProps }: TagInputProps) {
  return (
    <div className={className}>
      <input data-testid={id} className={inputClasses} {...otherProps} />
      {
        label && (
          <Label data-testid={`${id}-label`} htmlFor={id} className={labelClasses} onDoubleClick={onDoubleClick}>{label}</Label>
        )
      }
      {
        children && (
          <div data-testid={`${id}-tags`} style={{ padding: '0 55px' }}>{children}</div>
        )
      }
    </div>
  )
}

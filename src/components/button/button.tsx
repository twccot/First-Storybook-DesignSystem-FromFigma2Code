import React from "react";
import cm from "./button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional className for adding custom CSS classes to the Button element */ 
  className?: string;
  /** Custom text content. When provided, status is ignored and no status icons are shown. */
  children?: React.ReactNode;
  /** Type of the button. Defaults to 'button'. */
  type?: 'button' | 'submit' | 'reset';
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Button = ({ className, children, type = 'button', ...props }: ButtonProps) => (
  <button type={type} className={composeClassName(cm.button, className)} {...props}>
    {children}
  </button>
);

Button.displayName = 'Button';


import React from "react";
import cm from "./layout.module.css";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Layout = ({ children, className, ...rest }: LayoutProps) => (
  <div className={composeClassName(cm.layoutRoot, className)} {...rest}>
    {children}
  </div>
);

Layout.displayName = "Layout";

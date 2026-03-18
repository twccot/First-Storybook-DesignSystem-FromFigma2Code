import React from "react";
import { Layout } from "../layout";
import cm from "./header.module.css";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Optional className for adding custom CSS classes to the Header element */
  className?: string;
  /** Content to display on the left side of the header */
  left?: React.ReactNode;
  /** Content to display in the middle of the header */
  middle?: React.ReactNode;
  /** Content to display on the right side of the header */
  right?: React.ReactNode;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Header = ({ className, left, middle, right, ...rest }: HeaderProps) => (
  <header className={composeClassName(cm.headerRoot, className)} {...rest}>
    <Layout className={cm.headerInner}>
      <div className={cm.headerLeft}>{left}</div>
      <div className={cm.headerMiddle}>{middle}</div>
      <div className={cm.headerRight}>{right}</div>
    </Layout>
  </header>
);

Header.displayName = "Header";

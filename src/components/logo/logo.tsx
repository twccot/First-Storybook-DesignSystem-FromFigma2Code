import React from "react";
import cm from "./logo.module.css";

import PearIcon from "./pear.svg?react";


export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional className for adding custom CSS classes to the Logo element */
  className?: string;
  /** Optional width of the logo */
  width?: number | string;
  /** Optional height of the logo */
  height?: number | string;
  /** Variant of the logo. 'blank' uses blank color, default uses primary color */
  variant?: 'blank' | 'default';
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Logo = ({ className, width, height, variant = 'default', ...props }: LogoProps) => {
  const style: React.CSSProperties = {
    ...(width && { width }),
    ...(height && { height }),
  };

  const variantClass = variant === 'blank' ? cm.logoBlank : '';
  const rootClassName = composeClassName(cm.logo, composeClassName(variantClass, className));

  return (
    <div className={rootClassName} style={style} {...props}>
      <PearIcon className={cm.logoIcon} />
    </div>
  );
};

Logo.displayName = 'Logo';


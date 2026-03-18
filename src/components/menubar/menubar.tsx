import React from "react";
import cm from "./menubar.module.css";

export interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional className for adding custom CSS classes to the Menubar element */
  className?: string;
  /** Menubar content */
  children: React.ReactNode;
  /**
   * Variant of the menubar
   * @default 'default'
   */
  variant?: 'default' | 'transparent';
}

export interface MenubarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Item content */
  children: React.ReactNode;
  /** Optional href for making the item a link */
  href?: string;
  /** Whether the menu item is active */
  active?: boolean;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Menubar = ({ className, children, variant = 'default', ...props }: MenubarProps) => {
  const variantClass = variant === 'transparent' ? cm.menubarTransparent : '';
  const rootClassName = composeClassName(cm.menubar, composeClassName(variantClass, className));
  
  return (
    <nav className={rootClassName} role="menubar" {...props}>
      {children}
    </nav>
  );
};

Menubar.displayName = 'Menubar';

export const MenubarItem = ({ className, children, href, active, ...props }: MenubarItemProps) => {
  const activeClass = active ? cm.menubarItemActive : '';
  const itemClassName = composeClassName(cm.menubarItem, composeClassName(activeClass, className));
  
  if (href) {
    return (
      <a href={href} className={itemClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  
  return (
    <button type="button" className={itemClassName} {...props}>
      {children}
    </button>
  );
};

MenubarItem.displayName = 'MenubarItem';


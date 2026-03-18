import React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import cm from "./tabs.module.css";

export interface TabsProps extends TabsPrimitive.TabsProps {
  /** Optional className for adding custom CSS classes to the Tabs element */
  className?: string;
  /** Tabs content */
  children: React.ReactNode;
}

export interface TabsListProps extends TabsPrimitive.TabsListProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** List content */
  children: React.ReactNode;
}

export interface TabsTriggerProps extends TabsPrimitive.TabsTriggerProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Trigger content */
  children: React.ReactNode;
}

export interface TabsContentProps extends TabsPrimitive.TabsContentProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Tabs = ({ className, children, ...props }: TabsProps) => (
  <TabsPrimitive.Root className={composeClassName(cm.tabs, className)} {...props}>
    {children}
  </TabsPrimitive.Root>
);

Tabs.displayName = 'Tabs';

export const TabsList = ({ className, children, ...props }: TabsListProps) => (
  <TabsPrimitive.List className={composeClassName(cm.tabsList, className)} {...props}>
    {children}
  </TabsPrimitive.List>
);

TabsList.displayName = 'TabsList';

export const TabsTrigger = ({ className, children, ...props }: TabsTriggerProps) => (
  <TabsPrimitive.Trigger className={composeClassName(cm.tabsTrigger, className)} {...props}>
    {children}
  </TabsPrimitive.Trigger>
);

TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = ({ className, children, ...props }: TabsContentProps) => (
  <TabsPrimitive.Content className={composeClassName(cm.tabsContent, className)} {...props}>
    {children}
  </TabsPrimitive.Content>
);

TabsContent.displayName = 'TabsContent';


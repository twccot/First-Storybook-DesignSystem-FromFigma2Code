import React from "react";
import cm from "./table.module.css";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Optional className for adding custom CSS classes to the Table element */
  className?: string;
  /** Table content */
  children: React.ReactNode;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Header content */
  children: React.ReactNode;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Body content */
  children: React.ReactNode;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Row content */
  children: React.ReactNode;
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Header cell content */
  children: React.ReactNode;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Cell content */
  children: React.ReactNode;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Table = ({ className, children, ...props }: TableProps) => (
  <table className={composeClassName(cm.table, className)} {...props}>
    {children}
  </table>
);

Table.displayName = 'Table';

export const TableHeader = ({ className, children, ...props }: TableHeaderProps) => (
  <thead className={composeClassName(cm.tableHeader, className)} {...props}>
    {children}
  </thead>
);

TableHeader.displayName = 'TableHeader';

export const TableBody = ({ className, children, ...props }: TableBodyProps) => (
  <tbody className={composeClassName(cm.tableBody, className)} {...props}>
    {children}
  </tbody>
);

TableBody.displayName = 'TableBody';

export const TableRow = ({ className, children, ...props }: TableRowProps) => (
  <tr className={composeClassName(cm.tableRow, className)} {...props}>
    {children}
  </tr>
);

TableRow.displayName = 'TableRow';

export const TableHead = ({ className, children, ...props }: TableHeadProps) => (
  <th className={composeClassName(cm.tableHead, className)} {...props}>
    {children}
  </th>
);

TableHead.displayName = 'TableHead';

export const TableCell = ({ className, children, ...props }: TableCellProps) => (
  <td className={composeClassName(cm.tableCell, className)} {...props}>
    {children}
  </td>
);

TableCell.displayName = 'TableCell';


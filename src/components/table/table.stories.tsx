import type { Meta, StoryObj } from '@storybook/react';

import { PropsCategory } from '@/.storybook/constants'

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/src/components';


const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTableData = {
  headers: ['Name', 'Status', 'Role', 'Email'],
  rows: [
    ['John Doe', 'Active', 'Developer', 'john@example.com'],
    ['Jane Smith', 'Active', 'Designer', 'jane@example.com'],
    ['Bob Johnson', 'Inactive', 'Manager', 'bob@example.com'],
  ],
};

export const Controls: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            {defaultTableData.headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {defaultTableData.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
}

/**
 * Basic table with header and body sections.
 * Use cases:
 * - Data display
 * - User lists
 * - Product catalogs
 * - Reports and dashboards
 */
export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell>150</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>$39.99</TableCell>
          <TableCell>75</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell>$49.99</TableCell>
          <TableCell>200</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Table with multiple columns and rows.
 * Use cases:
 * - Complex data sets
 * - Detailed reports
 * - Comparison tables
 */
export const MultipleRows: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#001</TableCell>
          <TableCell>Project Alpha</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>2024-01-15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#002</TableCell>
          <TableCell>Project Beta</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell>2024-02-20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#003</TableCell>
          <TableCell>Project Gamma</TableCell>
          <TableCell>Planning</TableCell>
          <TableCell>2024-03-10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#004</TableCell>
          <TableCell>Project Delta</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>2024-03-25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}


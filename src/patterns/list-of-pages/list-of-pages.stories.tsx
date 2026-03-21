import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components';
import { Badge } from '@/components';
// @ts-ignore - JSON import from data directory
import pagesData from '../../../data/list-of-pages.data.json';

interface Page {
  id: number;
  header: string;
  sectionType: string;
  status: string;
  target: number;
  limit: number;
  reviewer: string | null;
}

const meta: Meta = {
  title: 'Patterns/List of Pages',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

/**
 * List of pages pattern displays a table with page information including
 * header, section type, status, target/limit counts, and reviewer assignment.
 * 
 * Use cases:
 * - Document management systems
 * - Proposal page tracking
 * - Content review workflows
 * - Project documentation
 */
export const Default: Story = {
  render: () => {
    const getStatusBadge = (status: string) => {
      const statusLower = status.toLowerCase();
      if (statusLower === 'done') {
        return <Badge status="done" />;
      } else if (statusLower.includes('process')) {
        return <Badge status="in progress" />;
      }
      return <Badge status="planned" />;
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
            <TableHead>Section Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Limit</TableHead>
            <TableHead>Reviewer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(pagesData.pages as Page[]).map((page) => (
            <TableRow key={page.id}>
              <TableCell>{page.header}</TableCell>
              <TableCell>{page.sectionType}</TableCell>
              <TableCell>{getStatusBadge(page.status)}</TableCell>
              <TableCell>{page.target}</TableCell>
              <TableCell>{page.limit}</TableCell>
              <TableCell>{page.reviewer || 'Assign reviewer'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};


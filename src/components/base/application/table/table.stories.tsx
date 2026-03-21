import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Table, TableCard } from './table'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

const tableData = [
  { name: 'Olivia Rhye', email: 'olivia@untitledui.com', status: 'Active', role: 'Product Designer' },
  { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', status: 'Pending', role: 'Frontend Dev' },
  { name: 'Lana Steiner', email: 'lana@untitledui.com', status: 'Active', role: 'Engineering Manager' },
  { name: 'Demi Wilkinson', email: 'demi@untitledui.com', status: 'Inactive', role: 'Product Manager' },
]

export const Default: Story = {
  render: () => (
    <TableCard.Root>
      <Table aria-label="Users table">
        <Table.Header>
          <Table.Head id="name" label="Name" />
          <Table.Head id="email" label="Email" />
          <Table.Head id="status" label="Status" />
          <Table.Head id="role" label="Role" />
        </Table.Header>
        <Table.Body items={tableData}>
          {(row) => (
            <Table.Row id={row.email}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </TableCard.Root>
  ),
}

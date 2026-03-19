import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Badge, BadgeWithDot, BadgeWithIcon } from './badges'
import { Check, ArrowUp } from '@untitledui/icons'

const meta: Meta<typeof Badge> = {
  title: 'Base/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['pill-color', 'color', 'modern'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: [
        'gray', 'brand', 'error', 'warning', 'success',
        'blue', 'indigo', 'purple', 'pink', 'orange',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    type: 'pill-color',
    size: 'md',
    color: 'gray',
    children: 'Badge',
  },
}

export const Success: Story = {
  args: {
    type: 'pill-color',
    size: 'md',
    color: 'success',
    children: 'Active',
  },
}

export const Error: Story = {
  args: {
    type: 'pill-color',
    size: 'md',
    color: 'error',
    children: 'Cancelled',
  },
}

export const Warning: Story = {
  args: {
    type: 'pill-color',
    size: 'md',
    color: 'warning',
    children: 'Pending',
  },
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-4">
      <Badge color="gray">Gray</Badge>
      <Badge color="brand">Brand</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
      <Badge color="orange">Orange</Badge>
    </div>
  ),
}

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-4">
      <BadgeWithDot color="success">Active</BadgeWithDot>
      <BadgeWithDot color="error">Cancelled</BadgeWithDot>
      <BadgeWithDot color="warning">Pending</BadgeWithDot>
      <BadgeWithDot color="gray">Inactive</BadgeWithDot>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-4">
      <BadgeWithDot type="pill-color" color="success" size="sm">Active</BadgeWithDot>
      <BadgeWithDot type="pill-color" color="warning" size="sm">Pending</BadgeWithDot>
      <BadgeWithDot type="pill-color" color="error" size="sm">Cancelled</BadgeWithDot>
      <BadgeWithDot type="pill-color" color="gray" size="sm">Inactive</BadgeWithDot>
      <BadgeWithDot type="pill-color" color="blue" size="sm">Processing</BadgeWithDot>
    </div>
  ),
}


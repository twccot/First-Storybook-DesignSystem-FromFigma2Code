import type { Meta, StoryObj } from '@storybook/react';

import { PropsCategory } from '@/.storybook/constants'

import { Badge } from '@/src/components';


const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: {
      control: 'select',
      table: {
        category: PropsCategory.ACCESSIBILITY,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  status: 'planned' as const,
}

export const Controls: Story = {
  args: defaultArgs,
}

/**
 * Planned status badge indicates items that are scheduled or queued.
 * Use cases:
 * - Task management systems
 * - Project planning boards
 * - Feature roadmaps
 * - Work item tracking
 */
export const Planned: Story = {
  args: {
    ...defaultArgs,
    status: 'planned',
  },
}

/**
 * In progress status badge indicates items currently being worked on.
 * Use cases:
 * - Active task indicators
 * - Work-in-progress items
 * - Current sprint items
 * - Ongoing projects
 */
export const InProgress: Story = {
  args: {
    ...defaultArgs,
    status: 'in progress',
  },
}

/**
 * Done status badge indicates completed items.
 * Use cases:
 * - Completed tasks
 * - Finished features
 * - Resolved issues
 * - Delivered milestones
 */
export const Done: Story = {
  args: {
    ...defaultArgs,
    status: 'done',
  },
}

/**
 * Badge text is automatically derived from the status.
 * The component displays predefined text based on the status value.
 */
export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge status="planned" />
      <Badge status="in progress" />
      <Badge status="done" />
    </div>
  ),
}

/**
 * Badge component supports custom text through the `children` prop.
 * When children are provided, status is ignored and no status icons are shown.
 * Use cases:
 * - Custom status labels
 * - Task names or identifiers
 * - Feature tags with specific names
 * - Any custom badge text
 */
export const CustomText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge>Q1 2024</Badge>
        <Badge>Sprint 12</Badge>
        <Badge>Version 2.0</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge>Feature: Dark Mode</Badge>
        <Badge>Bug Fix #123</Badge>
        <Badge>Deployed</Badge>
      </div>
    </div>
  ),
}


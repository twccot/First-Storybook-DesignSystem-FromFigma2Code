import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MetricsSimple as Metric } from './metrics'

const meta: Meta<typeof Metric> = {
  title: 'Components/Metrics',
  component: Metric,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Metric>

export const Default: Story = {
  args: {
    subtitle: 'Total revenue',
    title: '$45,231.89',
    type: 'simple',
    trend: 'positive',
    change: '+20.1% from last month',
  },
}

export const Negative: Story = {
  args: {
    subtitle: 'Total revenue',
    title: '$31,420.10',
    type: 'simple',
    trend: 'negative',
    change: '-4.3% from last month',
  },
}

export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Metric subtitle="Total Revenue" title="$45,231.89" type="simple" trend="positive" change="+20.1%" />
      <Metric subtitle="Active Users" title="2,350" type="simple" trend="positive" change="+15.3%" />
      <Metric subtitle="New Customers" title="+573" type="simple" trend="positive" change="+8.2%" />
    </div>
  ),
}


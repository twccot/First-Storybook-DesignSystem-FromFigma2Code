import type { Meta, StoryObj } from '@storybook/react'
import { Check, Trash01, Upload01 } from '@untitledui/icons'
import React from 'react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'primary-destructive',
        'secondary-destructive',
        'tertiary-destructive',
        'link-gray',
        'link-color',
        'link-destructive',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'md',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    size: 'md',
    children: 'Button',
  },
}

export const Destructive: Story = {
  args: {
    color: 'primary-destructive',
    size: 'md',
    children: 'Delete project',
  },
}

export const WithLeadingIcon: Story = {
  args: {
    color: 'primary',
    size: 'md',
    children: 'Publish now',
    iconLeading: <Check data-icon />,
  },
}

export const WithTrailingIcon: Story = {
  args: {
    color: 'secondary',
    size: 'md',
    children: 'Upload file',
    iconTrailing: <Upload01 data-icon />,
  },
}

export const Loading: Story = {
  args: {
    color: 'primary',
    size: 'md',
    children: 'Saving...',
    isLoading: true,
  },
}

export const Disabled: Story = {
  args: {
    color: 'primary',
    size: 'md',
    children: 'Button',
    isDisabled: true,
  },
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      <Button color="primary" size="md">Primary</Button>
      <Button color="secondary" size="md">Secondary</Button>
      <Button color="tertiary" size="md">Tertiary</Button>
      <Button color="primary-destructive" size="md">Delete project</Button>
      <Button color="secondary-destructive" size="md">Secondary destructive</Button>
      <Button color="link-gray" size="md">Link gray</Button>
      <Button color="link-color" size="md">Link color</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Button color="primary" size="sm">Small</Button>
      <Button color="primary" size="md">Medium</Button>
      <Button color="primary" size="lg">Large</Button>
      <Button color="primary" size="xl">Extra large</Button>
    </div>
  ),
}


import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Input } from './input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    size: 'sm',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    hint: 'This is a hint text to help user.',
    size: 'sm',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    hint: 'This email is already taken.',
    isInvalid: true,
    size: 'sm',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    isDisabled: true,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    size: 'md',
  },
}

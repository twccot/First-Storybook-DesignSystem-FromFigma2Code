import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Base/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

const avatarSrc = 'https://i.pravatar.cc/150?img=1'
const avatarAlt = 'User Avatar'

export const Default: Story = {
  args: {
    src: avatarSrc,
    alt: avatarAlt,
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
      <Avatar src={avatarSrc} alt={avatarAlt} size="xs" />
      <Avatar src={avatarSrc} alt={avatarAlt} size="sm" />
      <Avatar src={avatarSrc} alt={avatarAlt} size="md" />
      <Avatar src={avatarSrc} alt={avatarAlt} size="lg" />
      <Avatar src={avatarSrc} alt={avatarAlt} size="xl" />
      <Avatar src={avatarSrc} alt={avatarAlt} size="2xl" />
    </div>
  ),
}

export const Fallback: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=99999',
    alt: 'Broken Avatar',
  },
}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            marginLeft: i === 1 ? 0 : '-10px',
            zIndex: 10 - i,
          }}
        >
          <Avatar src={`https://i.pravatar.cc/150?img=${i}`} alt={`User ${i}`} size="md" />
        </div>
      ))}
    </div>
  ),
}


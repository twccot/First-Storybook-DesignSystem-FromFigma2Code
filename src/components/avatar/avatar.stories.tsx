import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { PropsCategory } from '@/.storybook/constants'

import { Avatar } from '@/src/components';


const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    alt: {
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
  src: "https://i.pravatar.cc/150",
  alt: "User Avatar",
}

export const Controls: Story = {
  args: defaultArgs,
}

/**
 * Small avatar size is ideal for compact UI elements where space is limited.
 * Use cases:
 * - User mentions in comments or chat messages
 * - Inline user tags in text content
 * - Activity logs or notification lists
 * - Compact user lists or tables
 */
export const Small: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
  },
}

/**
 * Medium avatar size is the default and most commonly used size.
 * Use cases:
 * - Standard user profiles in lists
 * - Navigation bars and headers
 * - Comment sections and forums
 * - Social media feeds
 * - Team member directories
 */
export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: 'medium',
  },
}

/**
 * Large avatar size provides maximum visibility for user profiles.
 * Use cases:
 * - User profile pages and detailed views
 * - Account settings and preferences
 * - Contact cards and detailed user information
 * - Featured user displays or hero sections
 * - Authentication and welcome screens
 */
export const Large: Story = {
  args: {
    ...defaultArgs,
    size: 'large',
  },
}
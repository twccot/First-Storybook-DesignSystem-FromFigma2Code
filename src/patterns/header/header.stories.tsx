import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Header, Logo, Avatar } from '@/src/components';
import { Menubar, MenubarItem } from '@/src/components';

const meta: Meta = {
  title: 'Patterns/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

/**
 * Header pattern displays a complete application header with logo, navigation menu, and user avatar.
 * 
 * Use cases:
 * - Application headers
 * - Dashboard navigation
 * - Main application layouts
 * - Multi-page applications
 */
export const Default: Story = {
  render: () => (
    <Header
      left={<Logo variant="blank" />}
      middle={
        <Menubar variant="transparent">
          <MenubarItem>Products</MenubarItem>
          <MenubarItem active>Solutions</MenubarItem>
          <MenubarItem>Resources</MenubarItem>
          <MenubarItem>Company</MenubarItem>
        </Menubar>
      }
      right={<Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="small" />}
    />
  ),
};


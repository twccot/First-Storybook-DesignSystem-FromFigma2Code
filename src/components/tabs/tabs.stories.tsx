import type { Meta, StoryObj } from '@storybook/react';

import { PropsCategory } from '@/.storybook/constants'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/components';


const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Controls: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
}

/**
 * Basic tabs with multiple tab panels.
 * Use cases:
 * - Content organization
 * - Settings panels
 * - Multi-section forms
 * - Tabbed interfaces
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p>This is the overview content.</p>
      </TabsContent>
      <TabsContent value="details">
        <p>This is the details content.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>This is the settings content.</p>
      </TabsContent>
    </Tabs>
  ),
}

/**
 * Tabs with more content in each panel.
 * Use cases:
 * - Detailed information display
 * - Complex tabbed interfaces
 * - Multi-step workflows
 */
export const WithContent: Story = {
  render: () => (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div>
          <h3>Profile Information</h3>
          <p>Manage your profile settings and personal information here.</p>
        </div>
      </TabsContent>
      <TabsContent value="account">
        <div>
          <h3>Account Settings</h3>
          <p>Update your account preferences and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div>
          <h3>Notification Preferences</h3>
          <p>Configure how and when you receive notifications.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}


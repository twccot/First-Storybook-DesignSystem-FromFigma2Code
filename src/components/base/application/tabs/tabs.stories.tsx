import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Tabs, TabList, TabPanel } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Base/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

const defaultTabs = [
  { id: 'tab1', label: 'Overview' },
  { id: 'tab2', label: 'Analytics' },
  { id: 'tab3', label: 'Reports' },
  { id: 'tab4', label: 'Settings' },
]

export const Default: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1">
      <TabList type="underline" items={defaultTabs} />
      <TabPanel id="tab1">Overview content</TabPanel>
      <TabPanel id="tab2">Analytics content</TabPanel>
      <TabPanel id="tab3">Reports content</TabPanel>
      <TabPanel id="tab4">Settings content</TabPanel>
    </Tabs>
  ),
}

const threeTabs = [
  { id: 'tab1', label: 'Overview' },
  { id: 'tab2', label: 'Analytics' },
  { id: 'tab3', label: 'Reports' },
]

export const ButtonBrand: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1">
      <TabList type="button-brand" items={threeTabs} />
      <TabPanel id="tab1">Overview content</TabPanel>
      <TabPanel id="tab2">Analytics content</TabPanel>
      <TabPanel id="tab3">Reports content</TabPanel>
    </Tabs>
  ),
}

export const ButtonGray: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1">
      <TabList type="button-gray" items={threeTabs} />
      <TabPanel id="tab1">Overview content</TabPanel>
      <TabPanel id="tab2">Analytics content</TabPanel>
      <TabPanel id="tab3">Reports content</TabPanel>
    </Tabs>
  ),
}

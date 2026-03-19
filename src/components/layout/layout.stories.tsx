import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Layout } from '@/components';

type StyleWithCustomProps = React.CSSProperties & {
  '--layout-max-width'?: string;
};

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Layout>;

const sampleChildren = (
  <>
    <div style={{ backgroundColor: 'pink' }}>Placeholder content</div>
  </>
);

export const Default: Story = {
  args: {
    children: sampleChildren,
    style: { 'backgroundColor': 'lightblue' } as StyleWithCustomProps,
  },
};

export const Wide: Story = {
  args: {
    children: sampleChildren,
    style: { '--layout-max-width': '1200px', 'backgroundColor': 'lightblue' } as StyleWithCustomProps,
  },
};

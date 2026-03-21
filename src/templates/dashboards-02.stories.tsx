import type { Meta, StoryObj } from '@storybook/react'
import { Dashboard02 } from './dashboards-02'

const meta: Meta<typeof Dashboard02> = {
  title: 'Templates/Dashboard 02',
  component: Dashboard02,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Dashboard02>

export const Default: Story = {}


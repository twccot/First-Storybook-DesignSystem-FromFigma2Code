import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { PaginationCardMinimal } from './pagination'

const meta: Meta<typeof PaginationCardMinimal> = {
  title: 'Base/Pagination',
  component: PaginationCardMinimal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PaginationCardMinimal>

function PaginationDefaultStory() {
  const [page, setPage] = useState(1)
  return <PaginationCardMinimal page={page} total={10} onPageChange={setPage} />
}

export const Default: Story = {
  render: () => <PaginationDefaultStory />,
}

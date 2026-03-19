import type { HTMLAttributes } from 'react'
import React from 'react'

import { cx } from '@/utils/cx'

type DotSize = 'xs' | 'sm' | 'md'

interface DotProps extends HTMLAttributes<HTMLSpanElement> {
  size?: DotSize
}

const sizeClassName: Record<DotSize, string> = {
  xs: 'w-1 h-1',
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
}

export const Dot = ({ size = 'md', className, ...props }: DotProps) => {
  return (
    <span
      aria-hidden="true"
      className={cx('inline-block rounded-full bg-current', sizeClassName[size], className)}
      {...props}
    />
  )
}


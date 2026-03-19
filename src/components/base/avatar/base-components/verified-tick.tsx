"use client";

import type { HTMLAttributes } from 'react'

import { cx } from '@/utils/cx'

export type VerifiedTickSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'

interface VerifiedTickProps extends HTMLAttributes<SVGSVGElement> {
  size: VerifiedTickSize
  className?: string
}

const sizes: Record<VerifiedTickSize, string> = {
  xs: 'size-1.5',
  sm: 'size-2',
  md: 'size-2.5',
  lg: 'size-3',
  xl: 'size-3.5',
  '2xl': 'size-4',
  '3xl': 'size-4.5',
  '4xl': 'size-5',
}

export const VerifiedTick = ({ size, className, ...props }: VerifiedTickProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cx('text-brand-600', sizes[size], className)}
      fill="currentColor"
      {...props}
    >
      <path d="M6.2 11.2 2.9 7.9l1.4-1.4 1.9 1.9 5-5 1.4 1.4-6.4 6.4z" />
    </svg>
  )
}


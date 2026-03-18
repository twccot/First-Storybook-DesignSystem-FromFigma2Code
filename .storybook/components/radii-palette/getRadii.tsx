interface RadiiVariables {
  [variant: string]: string
}

const RADIUS_TOKENS: RadiiVariables = {
  none: '0px',
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

const SHADOW_TOKENS: RadiiVariables = {
  xs: '0px 1px 2px rgba(10, 13, 18, 0.05)',
  sm: '0px 1px 3px rgba(10, 13, 18, 0.1), 0px 1px 2px -1px rgba(10, 13, 18, 0.1)',
  md: '0px 4px 6px -1px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)',
  lg: '0px 12px 16px -4px rgba(10, 13, 18, 0.08), 0px 4px 6px -2px rgba(10, 13, 18, 0.03)',
  xl: '0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)',
  '2xl': '0px 24px 48px -12px rgba(10, 13, 18, 0.18)',
  '3xl': '0px 32px 64px -12px rgba(10, 13, 18, 0.14)',
}

export const getRadii = (radiiRange: string): RadiiVariables => {
  if (radiiRange === 'radius') return RADIUS_TOKENS
  if (radiiRange === 'shadow') return SHADOW_TOKENS
  return {}
}


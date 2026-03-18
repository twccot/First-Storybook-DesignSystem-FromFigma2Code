interface SpaceVariables {
  [variant: string]: string
}

const SHADOW_TOKENS: SpaceVariables = {
  xs: '0px 1px 2px rgba(10, 13, 18, 0.05)',
  sm: '0px 1px 3px rgba(10, 13, 18, 0.1), 0px 1px 2px -1px rgba(10, 13, 18, 0.1)',
  md: '0px 4px 6px -1px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)',
  lg: '0px 12px 16px -4px rgba(10, 13, 18, 0.08), 0px 4px 6px -2px rgba(10, 13, 18, 0.03)',
  xl: '0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)',
  '2xl': '0px 24px 48px -12px rgba(10, 13, 18, 0.18)',
  '3xl': '0px 32px 64px -12px rgba(10, 13, 18, 0.14)',
}

const SPACING_TOKENS: SpaceVariables = {
  '0': '0px',
  '0.5': '2px',
  '1': '4px',
  '1.5': '6px',
  '2': '8px',
  '2.5': '10px',
  '3': '12px',
  '3.5': '14px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '7': '28px',
  '8': '32px',
  '9': '36px',
  '10': '40px',
  '11': '44px',
  '12': '48px',
  '14': '56px',
  '16': '64px',
  '20': '80px',
  '24': '96px',
}

export const getSpaces = (spaceRange: string): SpaceVariables => {
  if (spaceRange === 'shadow') return SHADOW_TOKENS
  if (spaceRange === 'spacing') return SPACING_TOKENS
  return {}
}


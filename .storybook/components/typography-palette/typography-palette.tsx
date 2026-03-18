import React, { useEffect, useState } from 'react'
import { getTypography } from './getTypography'

interface TypographyVariables {
  [category: string]: {
    [variant: string]: string
  }
}

interface TypographyPaletteDisplayProps {
  typographyRange: string
}

export const TypographyPaletteDisplay = ({ typographyRange }: TypographyPaletteDisplayProps) => {
  const [typographyVariables, setTypographyVariables] = useState<TypographyVariables>({})
  
  useEffect(() => {
    const fetchedTypography = getTypography(typographyRange)
    setTypographyVariables(fetchedTypography)
  }, [typographyRange])
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {Object.entries(typographyVariables).map(([category, variants]) => (
        <div key={category}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 600, 
            marginBottom: '1rem',
            textTransform: 'capitalize'
          }}>
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {Object.entries(variants).map(([variant, value]) => (
              <div 
                key={variant}
                style={{
                  padding: '1rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  backgroundColor: '#fafafa'
                }}
              >
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: '#666',
                  marginBottom: '0.5rem',
                  textTransform: 'capitalize'
                }}>
                  {variant}
                </div>
                <div style={{ 
                  fontSize: '1rem', 
                  fontWeight: 600,
                  fontFamily: 'monospace',
                  marginBottom: '0.5rem'
                }}>
                  {value}
                </div>
                <div style={{ 
                  fontSize: category === 'fontSize' ? value : '1rem',
                  lineHeight: category === 'lineHeight' ? value : '1.5',
                  fontWeight: category === 'fontWeight' ? value : '400',
                  color: '#1a1a1a'
                }}>
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


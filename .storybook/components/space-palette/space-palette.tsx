import React, { useEffect, useState } from 'react'
import { getSpaces } from './getSpaces'

interface SpaceVariables {
  [variant: string]: string
}

interface SpacePaletteDisplayProps {
  spaceRange: string
}

export const SpacePaletteDisplay = ({ spaceRange }: SpacePaletteDisplayProps) => {
  const [spaceVariables, setSpaceVariables] = useState<SpaceVariables>({})
  
  useEffect(() => {
    const fetchedSpaces = getSpaces(spaceRange)
    setSpaceVariables(fetchedSpaces)
  }, [spaceRange])
  
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem'
    }}>
      {Object.entries(spaceVariables).map(([variant, value]) => (
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
            textTransform: 'capitalize',
            fontFamily: 'monospace'
          }}>
            {variant}
          </div>
          <div style={{ 
            fontSize: '1rem', 
            fontWeight: 600,
            fontFamily: 'monospace',
            marginBottom: '1rem'
          }}>
            {value}
          </div>
          <div 
            style={{
              width: '100%',
              height: value,
              backgroundColor: '#01949a',
              borderRadius: '2px'
            }}
            title={`${variant}: ${value}`}
          />
        </div>
      ))}
    </div>
  )
}


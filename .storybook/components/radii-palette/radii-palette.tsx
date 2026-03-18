import React, { useEffect, useState } from 'react'
import { getRadii } from './getRadii'

interface RadiiVariables {
  [variant: string]: string
}

interface RadiiPaletteDisplayProps {
  radiiRange: string
}

export const RadiiPaletteDisplay = ({ radiiRange }: RadiiPaletteDisplayProps) => {
  const [radiiVariables, setRadiiVariables] = useState<RadiiVariables>({})

  useEffect(() => {
    const fetchedRadii = getRadii(radiiRange)
    setRadiiVariables(fetchedRadii)
  }, [radiiRange])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
      }}
    >
      {Object.entries(radiiVariables).map(([variant, value]) => (
        <div
          key={variant}
          style={{
            padding: '1rem',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            backgroundColor: '#fafafa',
          }}
        >
          <div
            style={{
              fontSize: '0.875rem',
              color: '#666',
              marginBottom: '0.5rem',
              textTransform: 'capitalize',
              fontFamily: 'monospace',
            }}
          >
            {variant}
          </div>
          <div
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: 'monospace',
              marginBottom: '1rem',
            }}
          >
            {value}
          </div>
          <div
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              backgroundColor: '#01949a',
              borderRadius: value,
            }}
            title={`${variant}: ${value}`}
          />
        </div>
      ))}
    </div>
  )
}

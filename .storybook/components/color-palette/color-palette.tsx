import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks'
import React, { useEffect, useState } from 'react'
import { getColors } from './getColors'

interface ColorPaletteDisplayProps {
  colorRange: string
  titlePrefix?: string
}

interface ColorVariables {
  [colorType: string]: {
    [shade: string]: string
  }
}

export const ColorPaletteDisplay = ({ 
  colorRange, 
  titlePrefix = 'theme.colors' 
}: ColorPaletteDisplayProps) => {
  const [colorVariables, setColorVariables] = useState<ColorVariables>({})
  
  useEffect(() => {
    const fetchedColors = getColors(colorRange)
    setColorVariables(fetchedColors)
  }, [colorRange])
  
  return (
    <ColorPalette>
      {Object.entries(colorVariables).map(([colorType, shades]) => (
        <ColorItem 
          key={colorType} 
          title={`${titlePrefix}.${colorType}`}
          subtitle=""
          colors={shades as Record<string, string>} 
        />
      ))}
    </ColorPalette>
  )
}


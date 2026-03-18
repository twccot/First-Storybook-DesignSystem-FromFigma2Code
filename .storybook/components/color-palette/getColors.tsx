interface StyleRule extends CSSRule {
    type: number
    style: CSSStyleDeclaration
  }
  
  interface CustomStyleSheet extends StyleSheet {
    href: string | null // Changed from href?: string
    cssRules: CSSRuleList
  }
  
  const isStyleRule = (rule: CSSRule): rule is StyleRule => rule.type === 1
  
  const isSameDomain = (styleSheet: CustomStyleSheet): boolean => {
    if (!styleSheet.href) {
      return true
    }
  
    return styleSheet.href.indexOf(window.location.origin) === 0
  }
  
  type ColorProperty = [string, string] // [propertyName, propertyValue]
  
  const getCSSCustomPropIndex = (): ColorProperty[] =>
    [...document.styleSheets].filter(isSameDomain).reduce<ColorProperty[]>(
      (finalArr, sheet) =>
        finalArr.concat(
          [...(sheet as CustomStyleSheet).cssRules]
            .filter(isStyleRule)
            .reduce<ColorProperty[]>((propValArr, rule) => {
              const props = [...rule.style]
                .map(
                  (propName) =>
                    [propName.trim(), rule.style.getPropertyValue(propName).trim()] as ColorProperty
                )
                .filter(([propName]) => propName.indexOf('--ds') === 0)
  
              return [...propValArr, ...props]
            }, [])
        ),
      []
    )
  
  interface ColorVariables {
    [colorType: string]: {
      [shade: string]: string
    }
  }
  
  export const getColors = (colorRange: string): ColorVariables => {
    const colorsArray = getCSSCustomPropIndex()
    const colorVariables: ColorVariables = {}
    const prefix = `--ds-color-${colorRange}-`
  
    colorsArray.forEach(([varName, colorValue]) => {
      // Only process variables that match the colorRange prefix
      if (!varName.startsWith(prefix)) {
        return
      }

      const strippedName = varName.replace(prefix, '')
      const parts = strippedName.split('-')
      
      // Handle concept colors (no shade numbers): --ds-color-concept-primary
      // vs global colors (with shade numbers): --ds-color-global-primary-500
      if (parts.length === 1) {
        // Concept color pattern: just the color name
        const colorName = parts[0]
        if (colorName) {
          if (!colorVariables[colorName]) {
            colorVariables[colorName] = {}
          }
          colorVariables[colorName]['default'] = colorValue
        }
      } else {
        // Global color pattern: colorType-shade
        const colorType = parts[0]
        const colorShade = parts.slice(1).join('-') // Handle multi-part shades like "1000"
  
        if (colorType && colorShade) {
          if (!colorVariables[colorType]) {
            colorVariables[colorType] = {}
          }
          colorVariables[colorType][colorShade] = colorValue
        }
      }
    })
  
    return colorVariables
  }


interface ColorVariables {
  [colorType: string]: {
    [shade: string]: string
  }
}

type ColorProperty = [string, string]

const collectProps = (rules: CSSRuleList, styles: CSSStyleDeclaration, props: ColorProperty[]) => {
  for (const rule of rules) {
    if (rule instanceof CSSStyleRule) {
      for (const prop of rule.style) {
        const name = prop.trim()
        if (name.startsWith('--color-')) {
          const value = styles.getPropertyValue(name).trim()
          if (value) props.push([name, value])
        }
      }
    }
    // Recurse into @layer, @media, @supports etc
    if ('cssRules' in rule && (rule as CSSGroupingRule).cssRules) {
      collectProps((rule as CSSGroupingRule).cssRules, styles, props)
    }
  }
}

const getCSSCustomPropIndex = (): ColorProperty[] => {
  const styles = getComputedStyle(document.documentElement)
  const props: ColorProperty[] = []

  for (const sheet of document.styleSheets) {
    try {
      collectProps(sheet.cssRules, styles, props)
    } catch {
      // Skip cross-origin stylesheets
    }
  }

  return props
}

export const getColors = (colorRange: string): ColorVariables => {
  const colorsArray = getCSSCustomPropIndex()
  const colorVariables: ColorVariables = {}
  const prefix = `--color-${colorRange}-`

  colorsArray.forEach(([varName, colorValue]) => {
    if (!varName.startsWith(prefix)) return

    const strippedName = varName.replace(prefix, '')
    const parts = strippedName.split('-')

    if (parts.length === 1) {
      const colorName = parts[0]
      if (colorName) {
        if (!colorVariables[colorName]) colorVariables[colorName] = {}
        colorVariables[colorName]['default'] = colorValue
      }
    } else {
      const colorType = parts[0]
      const colorShade = parts.slice(1).join('-')
      if (colorType && colorShade) {
        if (!colorVariables[colorType]) colorVariables[colorType] = {}
        colorVariables[colorType][colorShade] = colorValue
      }
    }
  })

  return colorVariables
}


type TypographyProperty = [string, string]

interface TypographyVariables {
  [category: string]: {
    [variant: string]: string
  }
}

const collectProps = (rules: CSSRuleList, styles: CSSStyleDeclaration, props: TypographyProperty[]) => {
  for (const rule of rules) {
    if (rule instanceof CSSStyleRule) {
      for (const prop of rule.style) {
        const name = prop.trim()
        if (name.startsWith('--') ) {
          const value = styles.getPropertyValue(name).trim()
          if (value) props.push([name, value])
        }
      }
    }
    if ('cssRules' in rule && (rule as CSSGroupingRule).cssRules) {
      collectProps((rule as CSSGroupingRule).cssRules, styles, props)
    }
  }
}

const getCSSCustomPropIndex = (): TypographyProperty[] => {
  const styles = getComputedStyle(document.documentElement)
  const props: TypographyProperty[] = []
  for (const sheet of document.styleSheets) {
    try {
      collectProps(sheet.cssRules, styles, props)
    } catch {
      // Skip cross-origin stylesheets
    }
  }
  return props
}

export const getTypography = (typographyRange: string): TypographyVariables => {
  const typographyArray = getCSSCustomPropIndex()
  const typographyVariables: TypographyVariables = {}
  const prefix = `--${typographyRange}-`

  typographyArray.forEach(([varName, varValue]) => {
    if (!varName.startsWith(prefix)) return

    const strippedName = varName.replace(prefix, '')
    const parts = strippedName.split('-')

    if (parts.length >= 2) {
      const category = parts[0]
      const variant = parts.slice(1).join('-')
      if (category && variant) {
        if (!typographyVariables[category]) typographyVariables[category] = {}
        typographyVariables[category][variant] = varValue
      }
    } else if (parts.length === 1 && parts[0]) {
      if (!typographyVariables['base']) typographyVariables['base'] = {}
      typographyVariables['base'][parts[0]] = varValue
    }
  })

  return typographyVariables
}


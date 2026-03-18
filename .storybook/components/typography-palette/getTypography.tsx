interface StyleRule extends CSSRule {
  type: number
  style: CSSStyleDeclaration
}

interface CustomStyleSheet extends StyleSheet {
  href: string | null
  cssRules: CSSRuleList
}

const isStyleRule = (rule: CSSRule): rule is StyleRule => rule.type === 1

const isSameDomain = (styleSheet: CustomStyleSheet): boolean => {
  if (!styleSheet.href) {
    return true
  }

  return styleSheet.href.indexOf(window.location.origin) === 0
}

type TypographyProperty = [string, string] // [propertyName, propertyValue]

const getCSSCustomPropIndex = (): TypographyProperty[] =>
  [...document.styleSheets].filter(isSameDomain).reduce<TypographyProperty[]>(
    (finalArr, sheet) =>
      finalArr.concat(
        [...(sheet as CustomStyleSheet).cssRules]
          .filter(isStyleRule)
          .reduce<TypographyProperty[]>((propValArr, rule) => {
            const props = [...rule.style]
              .map(
                (propName) =>
                  [propName.trim(), rule.style.getPropertyValue(propName).trim()] as TypographyProperty
              )
              .filter(([propName]) => propName.indexOf('--ds-typography-') === 0)

            return [...propValArr, ...props]
          }, [])
      ),
    []
  )

interface TypographyVariables {
  [category: string]: {
    [variant: string]: string
  }
}

export const getTypography = (typographyRange: string): TypographyVariables => {
  const typographyArray = getCSSCustomPropIndex()
  const typographyVariables: TypographyVariables = {}
  const prefix = `--ds-typography-${typographyRange}-`

  typographyArray.forEach(([varName, varValue]) => {
    // Only process variables that match the typography range prefix
    if (!varName.startsWith(prefix)) {
      return
    }

    const strippedName = varName.replace(prefix, '')
    const parts = strippedName.split('-')
    
    if (parts.length >= 2) {
      const category = parts[0] // fontSize, lineHeight, fontWeight
      const variant = parts.slice(1).join('-') // small, base, large, etc.

      if (category && variant) {
        if (!typographyVariables[category]) {
          typographyVariables[category] = {}
        }
        typographyVariables[category][variant] = varValue
      }
    }
  })

  return typographyVariables
}


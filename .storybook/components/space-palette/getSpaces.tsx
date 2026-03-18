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

type SpaceProperty = [string, string] // [propertyName, propertyValue]

const getCSSCustomPropIndex = (): SpaceProperty[] =>
  [...document.styleSheets].filter(isSameDomain).reduce<SpaceProperty[]>(
    (finalArr, sheet) =>
      finalArr.concat(
        [...(sheet as CustomStyleSheet).cssRules]
          .filter(isStyleRule)
          .reduce<SpaceProperty[]>((propValArr, rule) => {
            const props = [...rule.style]
              .map(
                (propName) =>
                  [propName.trim(), rule.style.getPropertyValue(propName).trim()] as SpaceProperty
              )
              .filter(([propName]) => propName.indexOf('--ds-space-') === 0)

            return [...propValArr, ...props]
          }, [])
      ),
    []
  )

interface SpaceVariables {
  [variant: string]: string
}

export const getSpaces = (spaceRange: string): SpaceVariables => {
  const spacesArray = getCSSCustomPropIndex()
  const spaceVariables: SpaceVariables = {}
  const prefix = `--ds-space-${spaceRange}-`

  spacesArray.forEach(([varName, varValue]) => {
    // Only process variables that match the space range prefix
    if (!varName.startsWith(prefix)) {
      return
    }

    const strippedName = varName.replace(prefix, '')
    
    if (strippedName) {
      spaceVariables[strippedName] = varValue
    }
  })

  return spaceVariables
}


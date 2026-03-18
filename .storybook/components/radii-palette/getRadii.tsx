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

type RadiiProperty = [string, string]

const getCSSCustomPropIndex = (): RadiiProperty[] =>
  [...document.styleSheets].filter(isSameDomain).reduce<RadiiProperty[]>(
    (finalArr, sheet) =>
      finalArr.concat(
        [...(sheet as CustomStyleSheet).cssRules]
          .filter(isStyleRule)
          .reduce<RadiiProperty[]>((propValArr, rule) => {
            const props = [...rule.style]
              .map(
                (propName) =>
                  [propName.trim(), rule.style.getPropertyValue(propName).trim()] as RadiiProperty
              )
              .filter(([propName]) => propName.indexOf('--ds-radii-') === 0)

            return [...propValArr, ...props]
          }, [])
      ),
    []
  )

interface RadiiVariables {
  [variant: string]: string
}

export const getRadii = (radiiRange: string): RadiiVariables => {
  const radiiArray = getCSSCustomPropIndex()
  const radiiVariables: RadiiVariables = {}
  const prefix = `--ds-radii-${radiiRange}-`

  radiiArray.forEach(([varName, varValue]) => {
    if (!varName.startsWith(prefix)) {
      return
    }

    const strippedName = varName.replace(prefix, '')

    if (strippedName) {
      radiiVariables[strippedName] = varValue
    }
  })

  return radiiVariables
}

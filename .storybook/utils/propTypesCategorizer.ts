import {
  ArgTypes,
  ArgTypesEnhancer,
  StoryContextForEnhancers,
  StrictArgTypes,
  InputType,
} from 'storybook/internal/types'
import { PropsCategory } from '../constants'

export const categoryMap: Partial<Record<PropsCategory, string[]>> = {
  [PropsCategory.VISUAL]: [
    'loading',
    'size',
    'disabled',
    'variant',
    'helpText',
    'errorText',
    'infoText',
    'fullWidth',
    'leftIcon',
    'rightIcon',
    'infoTextWidth',
    'checked',
    'invalid',
    'lozenge',
    'orientation',
    'required',
    'autoFocus',
    'height',
    'label',
  ],
  [PropsCategory.ACCESSIBILITY]: ['role', 'labelId', 'tabIndex'],
}

const EVENT_HANDLER_NAME_REGEX = /^on[A-Z].*/

export const categorizeProps = (argTypes: ArgTypes): StrictArgTypes => {
  const updatedArgTypes: StrictArgTypes = {}

  for (const [key, value] of Object.entries(argTypes || {})) {
    let category = value?.table?.category

    if (!category) {
      for (const [categoryKey, propNames] of Object.entries(categoryMap)) {
        if (propNames.includes(key)) {
          category = categoryKey
          break
        }
      }

      if (!category) {
        if (key.startsWith('aria')) {
          category = PropsCategory.ACCESSIBILITY
        } else if (EVENT_HANDLER_NAME_REGEX.test(key)) {
          category = PropsCategory.EVENTS
        } else {
          category = PropsCategory.ATTRIBUTES
        }
      }
    }

    // Set control types depending on the type of the property
    const defaultControl = (() => {
      if (typeof value?.type !== 'object' || !('value' in value.type)) {
        return {}
      }

      const typeName = String(value.type.name)
      const typeValue = String(value.type.value)
      const controlTypes = {
        string: { type: 'text' },
        boolean: { type: 'boolean' },
        number: { type: 'number' },
      }

      // Handle enum type separately based on number of options
      if (typeName === 'enum' && Array.isArray(value.type.value)) {
        // Process enum values
        const processedOptions = value.type.value.map((valueType) => {
          const value =
            typeof valueType === 'object' && valueType !== null && 'value' in valueType
              ? valueType.value
              : valueType

          return value === 'undefined' ? undefined : value
        }) as (string | number)[]

        // Update the type value
        value.type.value = processedOptions

        // Determine control type
        const controlType = processedOptions.length > 3 ? 'select' : 'radio'
        return { type: controlType }
      }

      return Object.entries(controlTypes).reduce((control, [type, config]) => {
        return typeName === type || typeValue.includes(type) ? config : control
      }, {})
    })()

    const strictValue: InputType = {
      ...value,
      name: value?.name || key,
      control: Object.assign({}, defaultControl, value?.control || {}),
      table: {
        ...value?.table,
        category,
      },
    }

    updatedArgTypes[key] = strictValue as StrictArgTypes[string]
  }

  return updatedArgTypes
}

export const argTypesEnhancer: ArgTypesEnhancer = (
  context: StoryContextForEnhancers,
): StrictArgTypes => {
  const { argTypes = {} } = context
  return categorizeProps(argTypes)
}

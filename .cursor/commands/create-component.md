# Create Component

## Overview

Create a new component following the established patterns in this design system. Components should be built on top of RadixUI primitives (if such a primitive exists), styled with our design tokens, and fully documented with TypeScript and Storybook.

## File Structure

Keep the component in its own directory under `src/components/<component-name>/`.

Each component directory must contain:

- `<component>.tsx` - Main component implementation
- `<component>.module.css` - Component styles using CSS modules
- `<component>.stories.tsx` - Storybook stories
- `index.ts` - Component exports

**Example structure:**
```
src/components/button/
├── button.tsx
├── button.module.css
├── button.stories.tsx
└── index.ts
```

## Component Implementation (`<component>.tsx`)

### Import Pattern

```typescript
import React from "react";
import cm from "./<component>.module.css";
// If using RadixUI:
import { ComponentName as ComponentPrimitive } from "radix-ui";
```

**Note:** Always use `cm` as the alias for CSS module imports.

### TypeScript Interface

1. **Define interface extending appropriate base type:**
   - For native HTML elements: extend `React.HTMLAttributes<HTMLElement>` or specific element types
   - For RadixUI components: extend the primitive's props type (e.g., `ComponentPrimitive.ComponentProps`)

2. **Document ALL props with JSDoc comments** - descriptions are automatically extracted for Storybook

3. **For literal union types, use `as const` pattern:**
   ```typescript
   const componentSizes = ['small', 'medium', 'large'] as const;
   
   export interface ComponentProps {
     /** Size variant of the component. Defaults to 'medium' */
     size?: typeof componentSizes[number];
   }
   ```

### Helper Function

Include the `composeClassName` helper for className composition:

```typescript
const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;
```

### Component Implementation

1. **For simple components:**
   ```typescript
   export const Component = ({ className, children, ...props }: ComponentProps) => (
     <element className={composeClassName(cm.component, className)} {...props}>
       {children}
     </element>
   );
   ```

2. **For RadixUI-based components:**
   ```typescript
   export const Component = ({ className, children, ...props }: ComponentProps) => (
     <ComponentPrimitive.Root className={composeClassName(cm.component, className)} {...props}>
       {children}
     </ComponentPrimitive.Root>
   );
   ```

3. **Always set displayName:**
   ```typescript
   Component.displayName = 'Component';
   ```

### Subcomponents Pattern

For components with subcomponents (like Tabs, Table), define all in the same file:

```typescript
export const Component = ({ ... }: ComponentProps) => { /* ... */ };
Component.displayName = 'Component';

export const ComponentItem = ({ ... }: ComponentItemProps) => { /* ... */ };
ComponentItem.displayName = 'ComponentItem';

export const ComponentTrigger = ({ ... }: ComponentTriggerProps) => { /* ... */ };
ComponentTrigger.displayName = 'ComponentTrigger';
```

### JSDoc Documentation

For complex components, add a comprehensive JSDoc block above the component:

```typescript
/**
 * The Component displays [description].
 *
 * Key Features:
 * - Feature 1: [description]
 * - Feature 2: [description]
 *
 * [Github](https://github.com/your-org/repo/tree/main/src/components/component)
 *
 * [Figma Design](https://www.figma.com/...)
 */
export const Component = ({ ... }) => { /* ... */ };
```

## Styles (`<component>.module.css`)

### Structure

1. **Define component tokens at the top using CSS custom properties:**
   ```css
   .component {
     /* Component Tokens */
     --ds-component-background: var(--ds-color-semantic-background-primary);
     --ds-component-label-color: var(--ds-color-semantic-foreground-primary);
     --ds-component-label-fontSize: var(--ds-typography-label-fontSize);
     
     /* Styles */
     display: flex;
     background-color: var(--ds-component-background);
     color: var(--ds-component-label-color);
     font-size: var(--ds-component-label-fontSize);
   }
   ```

2. **Use design system tokens from `src/tokens/`:**
   - Colors: `--ds-color-semantic-*` or `--ds-color-global-*`
   - Typography: `--ds-typography-*`
   - Spacing: `--ds-space-*`
   - Radii: `--ds-radii-*`

3. **NEVER use primitive values directly** - always reference tokens

4. **Include interaction states:**
   ```css
   .component:hover { /* ... */ }
   .component:active { /* ... */ }
   .component:focus { /* ... */ }
   .component:disabled { /* ... */ }
   ```

5. **For state-based styling, use data attributes:**
   ```css
   .component[data-state="active"] { /* ... */ }
   .component[data-disabled] { /* ... */ }
   ```

### CSS Class Naming

Use BEM-like naming conventions:
- Base: `.component`
- Modifiers: `.component--modifier`
- Elements: `.componentElement`
- Element modifiers: `.componentElement--modifier`

**Example:**
```css
.tabs { /* base */ }
.tabsList { /* element */ }
.tabsTrigger { /* element */ }
.tabsTrigger[data-state="active"] { /* state-based */ }
```

## Stories (`<component>.stories.tsx`)

### Imports

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { PropsCategory } from '@/.storybook/constants';
import { Component } from '@/src/components';
```

**Important:** Import from central `@/src/components` index, not directly from component file.

### Meta Definition

```typescript
const meta: Meta<typeof Component> = {
  title: 'Components/ComponentName',
  component: Component,
  parameters: {
    layout: 'centered', // or 'fullscreen', 'padded'
  },
  argTypes: {
    // Categorize accessibility-related props
    alt: {
      table: {
        category: PropsCategory.ACCESSIBILITY,
      },
    },
    onClick: {
      table: {
        category: PropsCategory.EVENTS,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;
```

### Default Args Pattern

```typescript
const defaultArgs = {
  children: "Component",
  // other common props
}
```

### Stories

1. **First story MUST be named `Controls`:**
   ```typescript
   export const Controls: Story = {
     args: defaultArgs,
   }
   ```

   `Controls` story should always pass `args` and never use `render` function.

   If `Controls` story needs to pass children, this should be done via `args`:
   ```typescript
   export const Controls: Story = {
     render: () => (
       <Component>
         {/* Complex structure */}
       </Component>
     ),
   }
   export const Controls: Story = {
    args: {
        children: (
        <>
          <Component>
            {/* Complex structure */}
          </Component>
        </>
        ),
    },
   ```

2. **Additional stories with JSDoc comments:**
   ```typescript
   /**
    * Brief description of this variant.
    * Use cases:
    * - Use case 1
    * - Use case 2
    * - Use case 3
    */
   export const VariantName: Story = {
     args: {
       ...defaultArgs,
       propName: 'value',
     },
   }
   ```

### PropTypes Documentation

**DO NOT use `argTypes` to describe properties.** Ensure descriptions come from JSDoc comments in the component interface. The Storybook will automatically extract them.

Use `argTypes` ONLY for:
- Categorizing props (ACCESSIBILITY, EVENTS, VISUAL, ATTRIBUTES)
- Advanced control configurations if needed

## Exports (`index.ts`)

### Component Index

In `src/components/<component>/index.ts`:

```typescript
export { Component } from './component';
// For components with subcomponents:
export { Component, ComponentItem, ComponentTrigger } from './component';
```

### Main Index

Update `src/components/index.ts` to include the new component:

```typescript
export { Component } from './component';
// or for subcomponents:
export { Component, ComponentItem, ComponentTrigger } from './component';
```

## RadixUI Integration

When building on top of RadixUI:

1. **Import the primitive:**
   ```typescript
   import { Component as ComponentPrimitive } from "radix-ui";
   ```

2. **Extend the primitive's props:**
   ```typescript
   export interface ComponentProps extends ComponentPrimitive.ComponentProps {
     className?: string;
     // additional custom props
   }
   ```

3. **Wrap with styled component:**
   ```typescript
   export const Component = ({ className, ...props }: ComponentProps) => (
     <ComponentPrimitive.Root 
       className={composeClassName(cm.component, className)} 
       {...props}
     />
   );
   ```

4. **For subcomponents, use the primitive's subcomponent structure:**
   - `ComponentPrimitive.Root`
   - `ComponentPrimitive.List`
   - `ComponentPrimitive.Trigger`
   - `ComponentPrimitive.Content`
   - etc.

## Code Style Guidelines

1. **TypeScript:** Use strict typing, no `any` types
2. **Props destructuring:** Destructure in function signature
3. **Spread props:** Always include `{...props}` to allow HTML attributes
4. **Consistent naming:** Use PascalCase for components, camelCase for props
5. **Comments:** Use JSDoc format for all exported items
6. **Formatting:** Follow existing code style (2-space indentation)
7. **Imports order:**
   - React imports
   - Third-party libraries (RadixUI)
   - Local imports (CSS modules)

## Testing & Validation

After creating a component:

1. Run Storybook to verify stories render correctly
2. Check that Controls story shows interactive controls
3. Verify JSDoc descriptions appear in Storybook Docs
4. Test keyboard navigation and accessibility
5. Ensure all variants/states are documented with stories

## Checklist

- [ ] Component directory created under `src/components/`
- [ ] Component file (`*.tsx`) with TypeScript interface and JSDoc
- [ ] Styles file (`*.module.css`) using design tokens
- [ ] Stories file (`*.stories.tsx`) with Controls story first
- [ ] Index file (`index.ts`) with exports
- [ ] Added to main `src/components/index.ts`
- [ ] All props documented with JSDoc comments
- [ ] Component has `displayName` set
- [ ] Stories include use case descriptions
- [ ] Accessibility props categorized in `argTypes`
- [ ] Tested in Storybook
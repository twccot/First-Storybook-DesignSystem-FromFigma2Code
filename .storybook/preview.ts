import type { Preview } from '@storybook/react-vite'
import { DocsPage } from './components/docs-page/docs-page'
import { argTypesEnhancer } from './utils/propTypesCategorizer'
import React, { useEffect } from 'react'

import '@/styles/globals.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light'

      useEffect(() => {
        const isDark = theme === 'dark'
        document.documentElement.classList.toggle('dark-mode', isDark)
        document.body.classList.toggle('dark-mode', isDark)

        // Also target parent iframe
        try {
          const parentDoc = window.parent.document
          parentDoc.documentElement.classList.toggle('dark-mode', isDark)
          parentDoc.body.classList.toggle('dark-mode', isDark)
        } catch (e) {
          // cross-origin, ignore
        }
      }, [theme])

      return React.createElement(Story)
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    options: {
      storySort: {
        order: [
          'Tokens',
          'Components',
          [
            'Avatar',
            'Badge',
            'Button',
            'Input',
            'Metrics',
            'Pagination',
            'Table',
            'Tabs',
          ],
          'Templates',
          '*',
        ],
      },
    },

    docs: {
      page: DocsPage,
    },
  },
  argTypesEnhancers: [argTypesEnhancer],
};

export default preview;

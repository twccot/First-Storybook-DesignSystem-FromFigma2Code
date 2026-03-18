import type { Preview } from '@storybook/react-vite'
import { DocsPage } from './components/docs-page/docs-page'
import { argTypesEnhancer } from './utils/propTypesCategorizer'

import '@/src/styles/globals.css';

const preview: Preview = {
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
        order: ['Tokens', 'Components', 'Patterns', 'Templates', '*'],
      }
    },

    docs: {
      page: DocsPage,
    },
  },
  argTypesEnhancers: [argTypesEnhancer],
};

export default preview;
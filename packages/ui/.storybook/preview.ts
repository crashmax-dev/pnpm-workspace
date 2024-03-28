import type { Preview } from '@storybook/vue3'
import { templateDecorator } from './template-decorator.js'
import { themeDecorator } from './theme-decorator.js'
import './style.css'
import '../src/themes/zinc.css'

const preview: Preview = {
  decorators: [templateDecorator, themeDecorator],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview

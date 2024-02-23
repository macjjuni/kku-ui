import type { Preview } from '@storybook/react'
import './preview.scss';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'configure',
        includeNames: true,
        order: [
          'Components', ['Button', 'Icon'],
          'Input', ['TextField', 'Checkbox', 'CheckboxGroup', 'Select', '*'],
          '*'
        ],
      },
    },
  },
}

export default preview

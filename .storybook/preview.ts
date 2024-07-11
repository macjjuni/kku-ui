import type { Preview } from '@storybook/react'
import './preview.scss';

const preview: Preview = {
  parameters: {
    actions: {
      // argTypesRegex 대신 handles를 사용하여 더 명시적으로 action을 정의합니다.
      handles: ['click', 'focus', 'blur', 'change', 'submit'],
    },
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
  tags: ['autodocs']
};

export default preview;

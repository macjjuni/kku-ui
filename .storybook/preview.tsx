import type { Preview } from '@storybook/react-vite';
import '../src/components/index.scss';
import './preview.scss';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
  },
};

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#212121' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Actions',
          ['Button', 'ButtonGroup', 'Switch'],
          'Input',
          ['TextField', 'Select'],
          'Data Display',
          'Feedbacks',
          'Layout',
          'Foundations',
          'Core',
          ['Button', 'TextField', 'Switch', 'Menu', 'Accordion', 'Panel'],
        ],
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      const isDark = ctx.globals.backgrounds?.value === '#1e1e1e';
      if (isDark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }

      return (<Story/>);
    },
  ],
};

export default preview;

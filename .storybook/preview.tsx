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

const setHtmlDataTheme = (theme: string) => {
  const body = document.querySelector('body');
  const isDark = theme === 'dark';

  if (isDark) {
    body!.classList.remove('light');
    body!.classList.add('dark');
  } else {
    body!.classList.remove('dark');
    body!.classList.add('light');
  }
};


const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'white',
      options: {
        dark: { name: 'Dark', value: '#000000' },
        light: { name: 'Light', value: '#ffffff' },
      },
    },
    options: {
      storySort: {
        order: [
          'Actions',
          ['Button', 'ButtonGroup', 'ToggleButton', 'Switch'],
          'Input',
          ['TextField', 'Select'],
          'Data Display',
          ['Accordion', 'Menu', 'Dropdown', 'Skeleton'],
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
    (Story, context) => {

      const theme = context.globals.backgrounds.value || 'light';
      setHtmlDataTheme(theme);

      return <Story {...context} />;
    },
  ],
};

export default preview;

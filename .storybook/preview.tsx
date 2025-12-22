import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.css';
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
      default: '#fff',
      values: [
        { name: 'white', value: '#fff' },
        { name: 'dark', value: '#000' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Actions',
          ['KSwitch', 'ButtonGroup', 'ToggleButton', 'Switch'],
          'KInput',
          ['TextField', 'Select'],
          'Data Display',
          ['KAccordion', 'Menu', 'Dropdown', 'Skeleton'],
          'Feedbacks',
          'Layout',
          'Foundations',
          'Core',
          ['KSwitch', 'TextField', 'Switch', 'Menu', 'KAccordion', 'Panel'],
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

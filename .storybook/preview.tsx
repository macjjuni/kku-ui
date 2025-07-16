import type { Preview, ReactRenderer } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
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
  const element = document.documentElement;
  const isDark = theme === 'dark';

  if (isDark) {
    element.classList.remove('light');
    element.classList.add('dark');
  } else {
    element.classList.remove('dark');
    element.classList.add('light');
  }
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
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;

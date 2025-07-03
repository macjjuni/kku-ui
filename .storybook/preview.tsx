import type { Preview } from '@storybook/react-vite'
import './preview.scss';
import '../src/components/index.scss'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#fff' },
        { name: 'dark', value: '#1e1e1e' },
      ],
    },
  },
  decorators: [
    (Story, ctx) => {
      const isDark = ctx.globals.backgrounds?.value === '#1e1e1e'

      if (isDark) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }

      return <Story />
    },
  ],
}

export default preview

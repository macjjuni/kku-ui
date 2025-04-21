import type { Preview } from '@storybook/react'
import './preview.scss';


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
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      return <Story />
    },
  ],
}

export default preview

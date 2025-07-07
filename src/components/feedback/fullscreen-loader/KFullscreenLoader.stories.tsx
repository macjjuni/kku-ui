import { useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { KButton, KFullscreenLoader, KInitializer } from '@/components';
import { useFullLoader } from '@/common/hooks';


const meta: Meta = {
  component: KFullscreenLoader,
  decorators: [
    (Story) => (
      <>
        <KInitializer/>
        <Story/>
      </>
    ),
  ],
  title: 'Feedbacks/FullscreenLoader',
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;


const Template = () => {

  const { open, close } = useFullLoader();

  const onShow = useCallback(() => {
    open();
    setTimeout(() => {
      close();
    }, 3000);
  }, []);

  return (<KButton label="열기" onClick={onShow}/>);
};

type Story = StoryObj<typeof KFullscreenLoader>

export const Default: Story = {
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
import { KButton, KInitializer } from "kku-ui";
import { useFullLoader } from "kku-ui/hooks";

const Example = () => {
  const { open } = useFullLoader();

  return (
    <>
      <KInitializer />
      <KButton label="Open Loader" onClick={open} />
    </>
  );
};

export default Example;`,
        language: 'tsx',
      },
    },
  },
};


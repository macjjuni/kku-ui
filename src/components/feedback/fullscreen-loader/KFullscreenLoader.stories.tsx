import { useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KButton, KFullscreenLoader, KInitializer } from '@/components';
import { useFullLoader } from '@/common/hooks';
import { baseArgTyp } from '@/common/storybook/argTypes';

const meta: Meta = {
  component: KFullscreenLoader,
  title: 'Feedbacks/FullscreenLoader',
  argTypes: {
    ...baseArgTyp,
  },
  tags: ['autodocs'],
};

export default meta;


const Template = () => {

  const { show, hide } = useFullLoader();

  const onShow = useCallback(() => {
    show();
    setTimeout(() => {
      hide();
    }, 3000);
  }, []);

  return (
    <>
      <KInitializer/>
      <KButton label="열기" onClick={onShow}/>
    </>
  );
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
      <KInitializer /> {/* 앱 전체에서 한 번만 사용되어야 합니다 */}
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


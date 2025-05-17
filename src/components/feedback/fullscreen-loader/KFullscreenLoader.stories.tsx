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
      <KButton label="open" onClick={onShow}/>
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
import { useFullLoader } from "kku-ui/hooks"; // Import

const { open } = useFullLoader();             // Define

open();                                       // Usage`,
        language: 'tsx',
      },
    },
  },
};


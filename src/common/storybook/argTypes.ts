import { ArgTypes } from '@storybook/react-vite';
import { SIZES } from '@/common/base/base.interface';

export const sizeArgType: ArgTypes = {
  size: {
    description: '컴포넌트의 크기를 설정합니다.',
    control: { type: 'radio' },
    options: SIZES,
    table: { type: { summary: SIZES.join(' | ') } },
  },
};

export const disabledArgType: ArgTypes = {
  disabled: {
    description: '비활성화 상태를 설정합니다.',
    control: { type: 'boolean' },
    type: 'boolean',
  },
};

export const colorArgType: ArgTypes = {
  color: { description: '색상을 설정합니다.', type: 'string', defaultValue: { summary: 'undefined' } },
};

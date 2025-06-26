import { ArgTypes } from '@storybook/react';
import { SIZES } from '@/common/base/base.interface';

export const sizeArgType: ArgTypes = {
  size: {
    description: '요소의 크기를 설정합니다.',
    control: { type: 'radio' },
    type: 'string',
    options: SIZES,
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

export const baseArgTyp: ArgTypes = {
  id: {
    description: 'id 속성 값을 설정합니다.',
    type: 'string',
    defaultValue: { summary: undefined },
    control: { type: 'text' },
  },
  className: {
    description: 'class 속성 값을 설정합니다.',
    type: 'string',
    control: { type: 'text' },
  },
  style: {
    description: 'style 속성 값을 설정합니다.',
    type: 'function',
    control: { type: 'object' },
  },
};

export const onClickArgType: ArgTypes = {
  onClick: {
    description: '클릭 이벤트를 설정합니다.',
    type: 'function',
    control: { type: 'object' },
  },
};


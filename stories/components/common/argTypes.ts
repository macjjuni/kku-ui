import { ArgTypes } from '@storybook/react';
import { SIZES, VARIANTS } from '@/common/base/base.interface';

const sizes = Object.keys(SIZES);
const variants = Object.keys(VARIANTS);

export const variantArgType: ArgTypes = {
    variant: {
        description: '형태를 설정합니다.',
        defaultValue: { summary: variants[0] },
        control: { type: 'select' },
        options: variants
    },
};

export const sizeArgType: ArgTypes = {
    size: {
        description: '요소의 크기를 설정합니다.',
        defaultValue: {summary: sizes[0]},
        control: { type: 'select' },
        options: sizes
    },
};

export const disabledArgType: ArgTypes = {
    disabled: {
        description: '비활성화 상태를 설정합니다.',
        defaultValue: {summary: false},
        control: { type: 'boolean' },
    },
};

export const colorArgType: ArgTypes = {
    color: {description: '색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
};

export const baseArgTyp: ArgTypes = {
    id: {description: 'id 속성 값을 설정합니다.', defaultValue: {summary: ''}, control: { type: 'text' }},
    className: {description: 'class 속성 값을 설정합니다.', defaultValue: {summary: ''}, control: { type: 'text' }},
    style: {description: 'style 속성 값을 설정합니다.', defaultValue: {summary: {}}, control: { type: 'object' }},
};

export const onClickArgType: ArgTypes = {
    onClick: {description: '클릭 이벤트를 설정합니다.', defaultValue: {summary: undefined}, control: { type: 'object' }},
};


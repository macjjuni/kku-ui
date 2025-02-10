export const variantArgType = {
    variant: {
        description: '색상 또는 형태를 설정합니다. 개별적으로 boolean 형태인 contained, outlined Prop 으로도 설정할 수 있습니다.',
        defaultValue: {summary: 'default'},
        controls: {includes: ['default', 'contained', 'outlined']},
    },
};

export const sizeArgType = {
    size: {description: '요소의 크기를 설정합니다.', defaultValue: {summary: 'medium'}},
};

export const disabledArgType = {
    disabled: {description: '비활성화 상태를 설정합니다.', defaultValue: {summary: 'false'}},
};

export const colorArgType = {
    color: {description: '색상을 설정합니다.', defaultValue: {summary: 'undefined'}},
};

export const baseArgTyp = {
    id: {description: 'id 속성 값을 설정합니다.', defaultValue: {summary: 'undefined'}},
    className: {description: 'class 속성 값을 설정합니다.', defaultValue: {summary: 'undefined'}},
    style: {description: 'style 속성 값을 설정합니다.', defaultValue: {summary: 'undefined'}},
};

export const onClickArgType = {
    onClick: {description: '클릭 이벤트를 설정합니다.', defaultValue: {summary: 'undefined'}},
};

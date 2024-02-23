

export const variantArgType = {
    variant: {description: '색상 또는 형태를 설정합니다.', defaultValue: { summary: 'default' }},
}

export const sizeArgType = {
    size: {description: '내부 여백 크기를 설정합니다.', defaultValue: {summary: 'medium'}},
}
export const individualSizeArgType = {
    large: {description: '여백 크기를 Large 크기만큼 설정합니다.', defaultValue: {summary: 'false'}},
    medium: {description: '여백 크기를 Medium 크기만큼 설정합니다.', defaultValue: {summary: 'false'}},
    small: {description: '여백 크기를 Small 크기만큼 설정합니다.', defaultValue: {summary: 'false'}},
}

export const disabledArgType = {
    disabled: {description: '비활성화 상태를 설정합니다.', defaultValue: {summary: 'false'}},
}

export const colorArgType = {
    color: {description: '색상을 설정합니다.', defaultValue: { summary: 'undefined' }},
}

export const commonArgType = {
    id: {description: 'id 속성 값을 설정합니다.', defaultValue: { summary: 'undefined' }},
    className: {description: 'class 속성 값을 설정합니다.', defaultValue: { summary: 'undefined' }},
    style: {description: 'style 속성 값을 설정합니다.', defaultValue: { summary: 'undefined' }},
}

export const onClickArgType = {
    onClick: {description: '클릭 이벤트를 설정합니다.', defaultValue: {summary: 'undefined'}},
}

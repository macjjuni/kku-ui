import { MouseEvent, ReactNode } from 'react';
import { SizeType } from '@/common/base/base.interface';
import { ButtonProps } from '@/core';

export const BUTTON_VARIANTS = ['default', 'outlined', 'primary', 'success', 'warning', 'error'] as const;
export type KButtonVariantType = (typeof BUTTON_VARIANTS)[number];


export interface KButtonProps extends ButtonProps {
  /**
   * 버튼 안에 들어갈 콘텐츠입니다.
   */
  children?: ReactNode;

  /**
   * 버튼 크기입니다. small / medium / large 등의 값을 가질 수 있습니다.
   */
  size?: SizeType;

  /**
   * 버튼의 스타일 타입입니다.
   * 예: 'default', 'primary', 'outlined', 'success' 등
   * @default 'default'
   */
  variant?: KButtonVariantType;

  /**
   * 버튼 배경색을 커스터마이징할 수 있습니다.
   */
  color?: string;

  /**
   * 텍스트 색상을 커스터마이징할 수 있습니다.
   */
  fontColor?: string;

  /**
   * 버튼 클릭 시 호출되는 이벤트 핸들러입니다.
   */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;

  /**
   * 버튼 비활성화 여부입니다.
   * @default false
   */
  disabled?: boolean;
}

export interface KButtonRefs {
  focus: () => void;
  blur: () => void;
  click: () => void;
}
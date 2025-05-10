import { ReactNode } from 'react';
import { KBaseProp } from '@/common/base/base.interface';

export interface KCardProps extends KBaseProp {
  children?: ReactNode;

  title?: string;
  subTitle?: string;

  disabled?: boolean;
  clickable?: boolean;

  // Styles
  /* 카드의 가로(px). 지정하지 않으면 100% 사용  */
  width?: number;
  /* 카드의 세로(px). 지정하면 aspectRatio 는 무시. */
  height?: number;

  /* 가로:세로 비율. (예: "16/9", "1/1") height 지정되지 않은 경우에만 적용 */
  aspectRatio?: string;

  onClick?: () => void;
}

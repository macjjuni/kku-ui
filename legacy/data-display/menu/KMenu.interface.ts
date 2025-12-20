import { HTMLAttributes, ReactNode } from 'react';
import { MenuItemProps, MenuProps } from 'src/core';
import { SizeType } from 'src/common/base/base.interface';

export interface KMenuProps extends Omit<MenuProps, 'as'> {
  size?: SizeType;
  width?: number | string;
}

export interface KMenuItemProps extends Omit<MenuItemProps, 'as'> {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  shortcut?: string;
  label?: string;

  size?: SizeType;
}

export interface KMenuItemSelectableProps extends Omit<KMenuItemProps, 'leftContent'> {
  selected?: boolean
}

export interface KMenuItemDividerProps extends HTMLAttributes<HTMLLIElement> {
}
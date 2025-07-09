import { ReactNode } from "react";
import { MenuItemProps, MenuProps } from "@/core";
import { SizeType } from "@/common/base/base.interface";

export interface KMenuProps extends MenuProps<'div'> {
  size?: SizeType;
  width?: number | string
}

export interface KMenuItemProps extends MenuItemProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  shortcut?: string;
  label?: string;
  size?: SizeType;
}

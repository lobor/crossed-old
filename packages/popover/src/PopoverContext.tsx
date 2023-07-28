import { createContext } from '@crossed/utils';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');

export const [PopoverContentProvider, usePopoverContent] =
  createContext<any>('PopoverContext');

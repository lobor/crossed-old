import { createContext } from '@crossed/utils';

export const [PopoverProvider, usePopover] =
  createContext<any>('PopoverContext');

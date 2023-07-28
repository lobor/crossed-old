import { createContext } from '@crossed/utils';

export const [CheckboxProvider, useCheckbox] =
  createContext<any>('CheckboxContext');

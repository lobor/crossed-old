import { createContext } from '@crossed/utils';

export const [RadioGroupProvider, useRadioGroup] =
  createContext<any>('RadioGroupContext');

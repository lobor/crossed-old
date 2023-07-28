import { createContext } from '@crossed/utils';

export const [ProgressProvider, useProgress] =
  createContext<any>('ProgressContext');

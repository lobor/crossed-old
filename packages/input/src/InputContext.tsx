import type { InputContext } from './types';
import { createContext } from '@crossed/utils';

export const [InputProvider, useInput] =
  createContext<InputContext>('InputContext');

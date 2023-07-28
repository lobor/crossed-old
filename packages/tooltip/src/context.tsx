import { createContext } from '@crossed/utils';
export const [TooltipProvider, useTooltipContext] =
  createContext<any>('TooltipContext');

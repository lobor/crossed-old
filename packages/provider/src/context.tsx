import { createContext } from '@crossed/utils';

export const [AlertProvider, useAlert] = createContext<any>('AlertContext');

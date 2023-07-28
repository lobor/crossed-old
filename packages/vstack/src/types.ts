import type { ViewProps } from 'react-native';
// import type { SxProps } from '@crossed/core';
export interface IVStackProps extends ViewProps {
  reversed?: boolean;
  space?: string;
  ref?: any;
  children?: any;
}

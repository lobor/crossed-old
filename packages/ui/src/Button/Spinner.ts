import { styled } from '@crossed/core';
import { ActivityIndicator } from 'react-native';

export const Spinner = styled(
  ActivityIndicator,
  {},
  { ancestorStyle: ['_spinner'], resolveProps: ['color'] }
);

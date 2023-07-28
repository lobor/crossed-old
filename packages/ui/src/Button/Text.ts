import { styled } from '@crossed/core';
import { Text as TextNative } from 'react-native';

export const Text = styled(
  TextNative,
  {
    color: '$color',
    fontFamily: '$body',
    //@ts-ignore
    userSelect: 'none',
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);

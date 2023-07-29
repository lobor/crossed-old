import { styled } from '@crossed/core';
import { createHStack } from '@crossed/hstack';
import { View } from 'react-native';

const Root = styled(
  View,
  {
    flexDirection: 'row',

    defaultProps: {
      space: 'md',
    },
  },
  {}
);

const Spacer = styled(
  View,
  {
    variants: {
      size: {
        'xs': {
          width: `$1`,
        },
        'sm': {
          width: `$2`,
        },
        'md': {
          width: `$3`,
        },
        'lg': {
          width: `$4`,
        },
        'xl': {
          width: `$5`,
        },
        '2xl': {
          width: `$6`,
        },
        '3xl': {
          width: `$7`,
        },
        '4xl': {
          width: `$8`,
        },
      },
    },
  },
  {}
);
export const HStack = createHStack({
  Root,
  Spacer,
});

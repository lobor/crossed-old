import { styled } from '@crossed/core';
import { View } from 'react-native';

export const GroupVSpacer = styled(
  View,
  {
    variants: {
      space: {
        xs: {
          height: '$1',
        },
        sm: {
          height: '$1.5',
        },
        md: {
          height: '$2',
        },
        lg: {
          height: '$3',
        },
        xl: {
          height: '$4',
        },
      },
    },
  },
  { ancestorStyle: ['_groupVSpacer'] }
);

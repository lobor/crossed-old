import { styled, AsForwarder } from '@crossed/core';

const IconTmp = styled(AsForwarder, {}, {});

export const Icon = styled(
  IconTmp,
  {},
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

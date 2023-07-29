import { VStack } from '@crossed/ui';

export const VStackDemo = () => {
  return (
    <VStack>
      <VStack width="$10" height="$10" backgroundColor="$blue.3" />
      <VStack width="$10" height="$10" backgroundColor="$blue.4" />
      <VStack width="$10" height="$10" backgroundColor="$blue.5" />
    </VStack>
  );
};

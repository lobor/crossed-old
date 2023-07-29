import { Button, HStack } from '@crossed/ui';
import { useState } from 'react';

export const ButtonDemo = () => {
  const [color, setColor] = useState<'red' | 'green' | 'gray'>('green');
  return (
    <HStack>
      <Button colors={color} variant="outlined">
        <Button.Text>toto</Button.Text>
      </Button>

      <Button colors={'red'} variant="filled" onPress={() => setColor('red')} />
      <Button
        colors={'green'}
        variant="filled"
        onPress={() => setColor('green')}
      />
      <Button
        colors={'gray'}
        variant="filled"
        onPress={() => setColor('gray')}
      />
    </HStack>
  );
};

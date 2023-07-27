import { Flex } from "@crossed/core";

export const FlexDemo = () => {
  return (
    <Flex
      w-full
      border-red-500
      border
      items-center
    >
      <Flex
        h-52
        w-52
        bg-blue-500
      />
    </Flex>
  );
};

import { VStack as VStackMain } from "./VStack";
function createVStack({
  Root,
  Spacer
}) {
  const VStack = VStackMain(Root, Spacer);
  VStack.displayName = "VStack";
  return VStack;
}
export {
  createVStack
};
//# sourceMappingURL=index.js.map

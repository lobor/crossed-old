import { HStack as HStackMain } from "./HStack";
function createHStack({
  Root,
  Spacer
}) {
  const HStack = HStackMain(Root, Spacer);
  HStack.displayName = "HStack";
  return HStack;
}
export {
  createHStack
};
//# sourceMappingURL=index.js.map

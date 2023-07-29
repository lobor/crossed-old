import { Stack as StackMain } from "./Stack";
function createStack({
  Root,
  HSpacer,
  VSpacer
}) {
  const Stack = StackMain(Root, HSpacer, VSpacer);
  Stack.displayName = "Stack";
  return Stack;
}
export {
  createStack
};
//# sourceMappingURL=index.js.map

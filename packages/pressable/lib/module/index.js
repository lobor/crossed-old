import { default as PressableMain } from "./Pressable";
function createPressable({
  Root
}) {
  const Pressable = PressableMain(Root);
  Pressable.displayName = "Pressable";
  return Pressable;
}
export {
  createPressable
};
//# sourceMappingURL=index.js.map

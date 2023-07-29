import { Switch as SwitchMain } from "./Switch";
function createSwitch({
  Root
}) {
  const Switch = SwitchMain(Root);
  Switch.displayName = "Switch";
  return Switch;
}
export {
  createSwitch
};
//# sourceMappingURL=index.js.map

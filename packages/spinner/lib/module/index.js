import { Spinner } from "./Spinner";
function createSpinner({
  Root
}) {
  const SpinnerTemp = Spinner(Root);
  SpinnerTemp.displayName = "Spinner";
  return SpinnerTemp;
}
export {
  createSpinner
};
//# sourceMappingURL=index.js.map

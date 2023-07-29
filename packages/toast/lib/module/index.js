import { useToast } from "./Toast";
import { ToastComponent } from "./ToastComponent";
import { ToastTitle } from "./ToastTitle";
import { ToastDescription } from "./ToastDescription";
const createToastHook = () => {
  return useToast;
};
function createToast({
  Root,
  Title,
  Description
}) {
  const Toast = ToastComponent(Root);
  Toast.Title = ToastTitle(Title);
  Toast.Description = ToastDescription(Description);
  Toast.displayName = "Toast";
  Toast.Title.displayName = "Toast.Title";
  Toast.Description.displayName = "Toast.Description";
  return Toast;
}
import { ToastProvider } from "./Toast";
export {
  ToastProvider,
  createToast,
  createToastHook
};
//# sourceMappingURL=index.js.map

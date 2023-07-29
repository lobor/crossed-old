import { createContext } from "react";
const ToastContext = createContext({
  toastInfo: {},
  setToastInfo: () => {
  },
  setToast: () => {
  },
  removeToast: () => {
  },
  hideAll: () => {
  },
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {
  },
  hideToast: () => {
  }
});
export {
  ToastContext
};
//# sourceMappingURL=ToastContext.js.map

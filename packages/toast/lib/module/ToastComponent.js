import React, { forwardRef } from "react";
function ToastComponent(StyledToast) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      return /* @__PURE__ */ React.createElement(StyledToast, { ...props, ref }, children);
    }
  );
}
export {
  ToastComponent
};
//# sourceMappingURL=ToastComponent.js.map

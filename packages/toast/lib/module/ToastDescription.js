import React, { forwardRef } from "react";
function ToastDescription(StyledToastDescription) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      return /* @__PURE__ */ React.createElement(
        StyledToastDescription,
        {
          ...props,
          ref
        },
        children
      );
    }
  );
}
export {
  ToastDescription
};
//# sourceMappingURL=ToastDescription.js.map

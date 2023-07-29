import React, { forwardRef } from "react";
function ActionsheetScrollView(StyledActionsheetScrollView) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      return /* @__PURE__ */ React.createElement(StyledActionsheetScrollView, { ref, ...props }, children);
    }
  );
}
export {
  ActionsheetScrollView
};
//# sourceMappingURL=ActionsheetScrollView.js.map

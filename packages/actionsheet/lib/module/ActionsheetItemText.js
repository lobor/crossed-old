import React, { forwardRef } from "react";
function ActionsheetItemText(StyledActionsheetText) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      return /* @__PURE__ */ React.createElement(StyledActionsheetText, { ref, ...props }, children);
    }
  );
}
export {
  ActionsheetItemText
};
//# sourceMappingURL=ActionsheetItemText.js.map

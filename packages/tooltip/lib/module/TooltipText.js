import React, { forwardRef } from "react";
const TooltipText = (StyledTooltipText) => forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(StyledTooltipText, { ref, ...props }, children);
});
export {
  TooltipText
};
//# sourceMappingURL=TooltipText.js.map

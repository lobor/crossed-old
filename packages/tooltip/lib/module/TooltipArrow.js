import React, { forwardRef } from "react";
function TooltipArrow(StyledTooltipArrow) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      return /* @__PURE__ */ React.createElement(StyledTooltipArrow, { ref, ...props }, children);
    }
  );
}
export {
  TooltipArrow
};
//# sourceMappingURL=TooltipArrow.js.map

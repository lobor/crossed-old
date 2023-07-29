import React, { forwardRef } from "react";
const ButtonText = (StyledButtonText) => forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(StyledButtonText, { ref, ...props }, children);
});
export {
  ButtonText
};
//# sourceMappingURL=ButtonText.js.map

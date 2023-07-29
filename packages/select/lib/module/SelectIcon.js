import React, { forwardRef } from "react";
const SelectIcon = (StyledSelectIcon) => forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(StyledSelectIcon, { focusable: false, ...props, ref }, children);
});
export {
  SelectIcon
};
//# sourceMappingURL=SelectIcon.js.map

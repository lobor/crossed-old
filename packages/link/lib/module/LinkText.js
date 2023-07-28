import React, { forwardRef } from "react";
const LinkText = (StyledButtonText) => forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(StyledButtonText, { ref, ...props }, children);
});
export {
  LinkText
};
//# sourceMappingURL=LinkText.js.map

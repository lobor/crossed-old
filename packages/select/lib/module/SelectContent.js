import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectContent = (StyledSelectContent) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  }
  return /* @__PURE__ */ React.createElement(StyledSelectContent, { ...props, ref }, children);
});
export {
  SelectContent
};
//# sourceMappingURL=SelectContent.js.map

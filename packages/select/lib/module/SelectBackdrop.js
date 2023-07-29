import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectBackdrop = (StyledSelectBackdrop) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return /* @__PURE__ */ React.createElement(StyledSelectBackdrop, { ...props, ref }, children);
});
export {
  SelectBackdrop
};
//# sourceMappingURL=SelectBackdrop.js.map

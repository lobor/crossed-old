import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectDragIndicator = (StyledSelectDragIndicator) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return /* @__PURE__ */ React.createElement(StyledSelectDragIndicator, { ...props, ref }, children);
});
export {
  SelectDragIndicator
};
//# sourceMappingURL=SelectDragIndicator.js.map

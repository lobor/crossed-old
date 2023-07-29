import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectDragIndicatorWrapper = (StyledSelectDragIndicatorWrapper) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return /* @__PURE__ */ React.createElement(StyledSelectDragIndicatorWrapper, { ...props, ref }, children);
});
export {
  SelectDragIndicatorWrapper
};
//# sourceMappingURL=SelectDragIndicatorWrapper.js.map

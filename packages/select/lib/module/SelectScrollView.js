import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectScrollView = (StyledSelectScrollView) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  }
  return /* @__PURE__ */ React.createElement(StyledSelectScrollView, { ...props, ref }, children);
});
export {
  SelectScrollView
};
//# sourceMappingURL=SelectScrollView.js.map

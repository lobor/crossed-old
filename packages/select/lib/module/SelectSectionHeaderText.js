import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectSectionHeaderText = (StyledSelectSectionHeaderText) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return /* @__PURE__ */ React.createElement(StyledSelectSectionHeaderText, { ...props, ref }, children);
});
export {
  SelectSectionHeaderText
};
//# sourceMappingURL=SelectSectionHeaderText.js.map

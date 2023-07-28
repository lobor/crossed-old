import React, { forwardRef } from "react";
import { Platform } from "react-native";
function Divider(StyledDivider) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      const { orientation } = props;
      return /* @__PURE__ */ React.createElement(
        StyledDivider,
        {
          ref,
          ...props,
          "aria-orientation": orientation,
          accessibilityRole: Platform.OS === "web" ? "separator" : void 0
        },
        children
      );
    }
  );
}
export {
  Divider
};
//# sourceMappingURL=Divider.js.map

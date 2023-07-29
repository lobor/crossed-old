import React, { forwardRef } from "react";
import { AccessibilityInfo } from "react-native";
function ToastTitle(StyledToastTitle) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      React.useEffect(() => {
        AccessibilityInfo.announceForAccessibility(children);
      });
      return /* @__PURE__ */ React.createElement(
        StyledToastTitle,
        {
          ...props,
          ref,
          accessibilityLiveRegion: "assertive",
          "aria-atomic": "true",
          accessibilityRole: "alert"
        },
        children
      );
    }
  );
}
export {
  ToastTitle
};
//# sourceMappingURL=ToastTitle.js.map

import React, { forwardRef } from "react";
const Alert = (StyledAlert) => forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(
    StyledAlert,
    {
      ref,
      accessibilityRole: (props == null ? void 0 : props.accessibilityRole) || "alert",
      ...props
    },
    children
  );
});
export {
  Alert
};
//# sourceMappingURL=Alert.js.map

import React, { forwardRef } from "react";
const ButtonSpinner = (StyledButtonSpinner) => forwardRef((props, ref) => {
  return /* @__PURE__ */ React.createElement(
    StyledButtonSpinner,
    {
      ...props,
      accessible: true,
      accessibilityLabel: "loading",
      ref
    }
  );
});
export {
  ButtonSpinner
};
//# sourceMappingURL=ButtonSpinner.js.map

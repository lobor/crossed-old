import React, { forwardRef } from "react";
function Spinner(StyledSpinner) {
  return forwardRef(({ ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(
      StyledSpinner,
      {
        ...props,
        ref,
        focusable: true,
        accessibilityLabel: "loading"
      }
    );
  });
}
export {
  Spinner
};
//# sourceMappingURL=Spinner.js.map

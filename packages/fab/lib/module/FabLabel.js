import React, { forwardRef } from "react";
function FabLabel(StyledFabLabel) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      return /* @__PURE__ */ React.createElement(StyledFabLabel, { ref, ...props }, children);
    }
  );
}
var FabLabel_default = FabLabel;
export {
  FabLabel_default as default
};
//# sourceMappingURL=FabLabel.js.map

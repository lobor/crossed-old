import React, { memo } from "react";
import { forwardRef } from "react";
const TabIcon = (StyledTabIcon) => memo(
  forwardRef(({ ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(StyledTabIcon, { ...props, ref });
  })
);
export {
  TabIcon
};
//# sourceMappingURL=TabIcon.js.map

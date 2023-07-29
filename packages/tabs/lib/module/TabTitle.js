import React, { memo } from "react";
import { forwardRef } from "react";
const TabTitle = (StyledTabTitle) => memo(
  forwardRef(({ ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(StyledTabTitle, { ...props, ref });
  })
);
export {
  TabTitle
};
//# sourceMappingURL=TabTitle.js.map

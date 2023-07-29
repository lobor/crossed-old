import React, { memo, useMemo } from "react";
import { forwardRef } from "react";
const TabPanels = (StyledTabPanels) => memo(
  forwardRef(
    ({ children, ...props }, ref) => {
      let tabIndex = 0;
      const modiefiedTabPanels = useMemo(
        () => React.Children.toArray(children).map((child) => {
          return React.cloneElement(child, {
            key: child.key ?? `tabpanel-${tabIndex}`,
            value: `tab-${tabIndex++}`,
            ...child == null ? void 0 : child.props
          });
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children]
      );
      return /* @__PURE__ */ React.createElement(StyledTabPanels, { ...props, ref }, modiefiedTabPanels);
    }
  )
);
export {
  TabPanels
};
//# sourceMappingURL=TabPanels.js.map

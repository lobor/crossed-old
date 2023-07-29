import React, { memo, useMemo } from "react";
import { forwardRef } from "react";
const TabList = (StyledTabList) => memo(
  forwardRef(
    ({ children, ...props }, ref) => {
      let tabIndex = 0;
      const modifiedTabList = useMemo(
        () => React.Children.toArray(children).map((tab) => {
          return React.cloneElement(tab, {
            key: tab.key ?? `tab-${tabIndex}`,
            value: `tab-${tabIndex++}`,
            ...tab == null ? void 0 : tab.props
          });
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children]
      );
      return /* @__PURE__ */ React.createElement(
        StyledTabList,
        {
          accessibilityRole: "tablist",
          ...props,
          ref
        },
        modifiedTabList
      );
    }
  )
);
export {
  TabList
};
//# sourceMappingURL=TabList.js.map

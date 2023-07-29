import React, { memo } from "react";
import { forwardRef } from "react";
import { TabProvider } from "./TabProvider";
const Tabs = (StyledTabs) => memo(
  forwardRef(
    ({ value, ...props }, ref) => {
      const DEFAULT_TAB = "tab-0";
      const [currentActiveTab, setCurrentActiveTab] = React.useState(
        value ?? DEFAULT_TAB
      );
      const onChange = (currentValue) => setCurrentActiveTab(currentValue);
      return /* @__PURE__ */ React.createElement(TabProvider, { currentActiveTab, onChange }, /* @__PURE__ */ React.createElement(StyledTabs, { ...props, ref }));
    }
  )
);
export {
  Tabs
};
//# sourceMappingURL=Tabs.js.map

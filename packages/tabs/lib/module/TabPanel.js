import React, { memo } from "react";
import { forwardRef } from "react";
import { Platform } from "react-native";
import { useTab } from "./TabProvider";
const TabPanel = (StyledTabPanel) => memo(
  forwardRef(
    ({ value, ...props }, ref) => {
      const { currentActiveTab } = useTab("TabContext");
      const isActive = value === currentActiveTab;
      return /* @__PURE__ */ React.createElement(
        StyledTabPanel,
        {
          accessibilityRole: Platform.OS === "web" ? "tabpanel" : void 0,
          ...props,
          style: { display: isActive ? "flex" : "none" },
          ref
        }
      );
    }
  )
);
export {
  TabPanel
};
//# sourceMappingURL=TabPanel.js.map

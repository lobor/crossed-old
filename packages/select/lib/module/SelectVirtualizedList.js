import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectVirtualizedList = (StyledSelectVirtualizedList) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, props.data.map((_, index) => {
      const item = props.getItem(props.data, index);
      return props.renderItem({ item });
    }));
  }
  return /* @__PURE__ */ React.createElement(StyledSelectVirtualizedList, { ...props, ref }, children);
});
export {
  SelectVirtualizedList
};
//# sourceMappingURL=SelectVirtualizedList.js.map

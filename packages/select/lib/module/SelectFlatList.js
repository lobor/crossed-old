import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectFlatList = (StyledSelectFlatList) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, props.data.map((item) => {
      return props.renderItem({ item });
    }));
  }
  return /* @__PURE__ */ React.createElement(StyledSelectFlatList, { ...props, ref }, children);
});
export {
  SelectFlatList
};
//# sourceMappingURL=SelectFlatList.js.map

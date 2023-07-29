import React, { forwardRef } from "react";
import { Platform } from "react-native";
const SelectSectionList = (StyledSelectSectionList) => forwardRef(({ children, ...props }, ref) => {
  if (Platform.OS === "web") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, props.sections.map((section) => {
      return /* @__PURE__ */ React.createElement("optgroup", { label: section.title, ref }, section.data.map((item) => /* @__PURE__ */ React.createElement("option", { value: item }, item)));
    }));
  }
  return /* @__PURE__ */ React.createElement(StyledSelectSectionList, { ...props, ref }, children);
});
export {
  SelectSectionList
};
//# sourceMappingURL=SelectSectionList.js.map

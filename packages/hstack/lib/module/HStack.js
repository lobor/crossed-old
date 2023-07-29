import React, { forwardRef } from "react";
import { flattenChildren } from "@crossed/utils";
function HStack(Root, Spacer) {
  return forwardRef(
    ({ children, reversed, space, ...props }, ref) => {
      const getSpacedChildren = (children2) => {
        let childrenArray = React.Children.toArray(flattenChildren(children2));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child, index) => {
          return /* @__PURE__ */ React.createElement(React.Fragment, { key: child.key ?? `spaced-child-${index}` }, child, index < childrenArray.length - 1 && space && //@ts-ignore
          /* @__PURE__ */ React.createElement(Spacer, { size: space }));
        });
        return childrenArray;
      };
      return /* @__PURE__ */ React.createElement(Root, { ref, ...props }, getSpacedChildren(children));
    }
  );
}
export {
  HStack
};
//# sourceMappingURL=HStack.js.map

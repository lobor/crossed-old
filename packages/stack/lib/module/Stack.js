import React, { forwardRef } from "react";
import { flattenChildren } from "@crossed/utils";
function Stack(Root, HSpacer, VSpacer) {
  return forwardRef(
    ({
      children,
      reversed,
      space,
      direction,
      ...props
    }, ref) => {
      const getSpacedChildren = (children2) => {
        let childrenArray = React.Children.toArray(flattenChildren(children2));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child, index) => {
          return /* @__PURE__ */ React.createElement(React.Fragment, { key: child.key ?? `spaced-child-${index}` }, child, index < childrenArray.length - 1 && (direction === "column" ? (
            //@ts-ignore
            /* @__PURE__ */ React.createElement(HSpacer, { size: space })
          ) : (
            //@ts-ignore
            /* @__PURE__ */ React.createElement(VSpacer, { size: space })
          )));
        });
        return childrenArray;
      };
      return /* @__PURE__ */ React.createElement(
        Root,
        {
          ref,
          ...props,
          sx: {
            flexDirection: direction
          }
        },
        getSpacedChildren(children)
      );
    }
  );
}
export {
  Stack
};
//# sourceMappingURL=Stack.js.map

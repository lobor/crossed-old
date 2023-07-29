import React, { forwardRef } from "react";
import { flattenChildren } from "@crossed/utils";
const ButtonGroup = (StyledButtonGroup, StyledButtonGroupHSpacer, StyledButtonGroupVSpacer) => forwardRef(
  ({
    space,
    direction = "row",
    isAttached,
    isDisabled,
    children,
    reversed,
    ...props
  }, ref) => {
    let computedChildren;
    let childrenArray = React.Children.toArray(flattenChildren(children));
    childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
    if (childrenArray) {
      computedChildren = childrenArray.map((child, index) => {
        if (typeof child === "string" || typeof child === "number") {
          return child;
        }
        const attachedStyles = {};
        if (index === 0) {
          if (direction === "column") {
            attachedStyles.borderBottomLeftRadius = 0;
            attachedStyles.borderBottomRightRadius = 0;
          } else {
            attachedStyles.borderTopRightRadius = 0;
            attachedStyles.borderBottomRightRadius = 0;
          }
        } else if (index === (children == null ? void 0 : children.length) - 1) {
          if (direction === "column") {
            attachedStyles.borderTopLeftRadius = 0;
            attachedStyles.borderTopRightRadius = 0;
          } else {
            attachedStyles.borderTopLeftRadius = 0;
            attachedStyles.borderBottomLeftRadius = 0;
          }
        } else {
          attachedStyles.borderRadius = 0;
        }
        const childProps = {
          isDisabled,
          ...child.props,
          style: {
            ...isAttached ? attachedStyles : {},
            ...child.props.style
          }
        };
        const clonedChild = React.cloneElement(child, {
          ...childProps
        });
        return /* @__PURE__ */ React.createElement(React.Fragment, { key: child.key ?? `spaced-child-${index}` }, clonedChild, index < childrenArray.length - 1 && (direction === "column" ? /* @__PURE__ */ React.createElement(StyledButtonGroupVSpacer, { space: !isAttached ? space : 0 }) : /* @__PURE__ */ React.createElement(StyledButtonGroupHSpacer, { space: !isAttached ? space : 0 })));
      });
    }
    if (computedChildren)
      return /* @__PURE__ */ React.createElement(StyledButtonGroup, { flexDirection: direction, ...props, ref }, computedChildren);
    return null;
  }
);
export {
  ButtonGroup
};
//# sourceMappingURL=ButtonGroup.js.map

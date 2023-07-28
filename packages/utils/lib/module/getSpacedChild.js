import React from "react";
function flattenChildren(children, keys = []) {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.reduce(
    (flatChildren, child, index) => {
      if (child.type === React.Fragment) {
        return flatChildren.concat(
          flattenChildren(
            child.props.children,
            keys.concat(child.key || index)
          )
        );
      }
      if (React.isValidElement(child)) {
        flatChildren.push(
          React.cloneElement(child, {
            key: keys.concat(String(child.key || index)).join(".")
          })
        );
      } else {
        flatChildren.push(child);
      }
      return flatChildren;
    },
    []
  );
}
const getSpacedChildren = (children, space, SpacerComponent) => {
  let childrenArray = React.Children.toArray(flattenChildren(children));
  childrenArray = childrenArray.map((child, index) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, { key: child.key ?? `spaced-child-${index}` }, child, index < childrenArray.length - 1 && space && /* @__PURE__ */ React.createElement(SpacerComponent, { size: space }));
  });
  return childrenArray;
};
var getSpacedChild_default = getSpacedChildren;
export {
  getSpacedChild_default as default,
  flattenChildren
};
//# sourceMappingURL=getSpacedChild.js.map

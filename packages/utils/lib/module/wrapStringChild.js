import React from "react";
const wrapStringChild = (children, StyledBoxText) => {
  return React.Children.map(children, (child) => {
    var _a, _b;
    return typeof child === "string" || typeof child === "number" || (child == null ? void 0 : child.type) === React.Fragment && (typeof ((_a = child.props) == null ? void 0 : _a.children) === "string" || typeof ((_b = child.props) == null ? void 0 : _b.children) === "number") ? /* @__PURE__ */ React.createElement(StyledBoxText, null, child) : child;
  });
};
export {
  wrapStringChild
};
//# sourceMappingURL=wrapStringChild.js.map

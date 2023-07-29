import React, { forwardRef } from "react";
import { G } from "./nbSvg";
import { CrossedContext } from "@crossed/provider";
const SVGIcon = ({ children, ...props }, ref) => {
  const { StyledSvg } = React.useContext(CrossedContext);
  const { focusable, stroke, color, size, ...resolvedProps } = props;
  const strokeHex = stroke || "";
  const colorHex = color || "";
  return /* @__PURE__ */ React.createElement(
    StyledSvg,
    {
      ...resolvedProps,
      size,
      color: colorHex,
      stroke: strokeHex,
      focusable,
      accessibilityRole: "image",
      ref
    },
    React.Children.count(children) > 0 ? /* @__PURE__ */ React.createElement(G, null, React.Children.map(children, (child, i) => /* @__PURE__ */ React.createElement(
      ChildPath,
      {
        key: (child == null ? void 0 : child.key) ?? i,
        element: child,
        ...child == null ? void 0 : child.props
      }
    ))) : null
  );
};
const ChildPath = ({ element, fill, stroke: pathStroke }) => {
  const pathStrokeColor = pathStroke || "";
  const fillColor = fill || "";
  if (!element) {
    return null;
  }
  return React.cloneElement(element, {
    fill: fillColor ? fillColor : "currentColor",
    stroke: pathStrokeColor
  });
};
var SVGIcon_default = forwardRef(SVGIcon);
export {
  SVGIcon_default as default
};
//# sourceMappingURL=SVGIcon.js.map

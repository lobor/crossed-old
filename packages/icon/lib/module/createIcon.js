import React, { forwardRef } from "react";
import { Path, G } from "./nbSvg";
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
const createIcon = ({
  Root,
  path,
  d,
  ...initialProps
}) => {
  const createdIcon = (props, ref) => {
    var _a;
    let children = path;
    if (d && (!path || Object.keys(path).length === 0)) {
      children = /* @__PURE__ */ React.createElement(Path, { fill: "currentColor", d });
    }
    const finalProps = {
      ...initialProps,
      ...props
    };
    const { focusable, stroke, color, ...resolvedProps } = finalProps;
    let type = resolvedProps.type;
    if (type === void 0) {
      type = "svg";
    }
    let colorProps = {};
    if (color) {
      colorProps = { ...colorProps, color };
    }
    if (stroke) {
      colorProps = { ...colorProps, color: stroke };
    }
    let sizeProps = {};
    if (type === "font") {
      if (resolvedProps.sx) {
        sizeProps = { ...sizeProps, fontSize: (_a = resolvedProps == null ? void 0 : resolvedProps.sx) == null ? void 0 : _a.h };
      }
      if (resolvedProps.size) {
      }
    }
    return /* @__PURE__ */ React.createElement(
      Root,
      {
        ...resolvedProps,
        ...colorProps,
        focusable,
        accessibilityRole: "image",
        ref,
        ...sizeProps
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
  return forwardRef(createdIcon);
};
export {
  createIcon
};
//# sourceMappingURL=createIcon.js.map

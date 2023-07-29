"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createIcon_exports = {};
__export(createIcon_exports, {
  createIcon: () => createIcon
});
module.exports = __toCommonJS(createIcon_exports);
var import_react = __toESM(require("react"));
var import_nbSvg = require("./nbSvg");
const ChildPath = ({ element, fill, stroke: pathStroke }) => {
  const pathStrokeColor = pathStroke || "";
  const fillColor = fill || "";
  if (!element) {
    return null;
  }
  return import_react.default.cloneElement(element, {
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
      children = /* @__PURE__ */ import_react.default.createElement(import_nbSvg.Path, { fill: "currentColor", d });
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
    return /* @__PURE__ */ import_react.default.createElement(
      Root,
      {
        ...resolvedProps,
        ...colorProps,
        focusable,
        accessibilityRole: "image",
        ref,
        ...sizeProps
      },
      import_react.default.Children.count(children) > 0 ? /* @__PURE__ */ import_react.default.createElement(import_nbSvg.G, null, import_react.default.Children.map(children, (child, i) => /* @__PURE__ */ import_react.default.createElement(
        ChildPath,
        {
          key: (child == null ? void 0 : child.key) ?? i,
          element: child,
          ...child == null ? void 0 : child.props
        }
      ))) : null
    );
  };
  return (0, import_react.forwardRef)(createdIcon);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createIcon
});
//# sourceMappingURL=createIcon.js.map

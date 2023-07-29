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
var SVGIcon_exports = {};
__export(SVGIcon_exports, {
  default: () => SVGIcon_default
});
module.exports = __toCommonJS(SVGIcon_exports);
var import_react = __toESM(require("react"));
var import_nbSvg = require("./nbSvg");
var import_provider = require("@crossed/provider");
const SVGIcon = ({ children, ...props }, ref) => {
  const { StyledSvg } = import_react.default.useContext(import_provider.CrossedContext);
  const { focusable, stroke, color, size, ...resolvedProps } = props;
  const strokeHex = stroke || "";
  const colorHex = color || "";
  return /* @__PURE__ */ import_react.default.createElement(
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
var SVGIcon_default = (0, import_react.forwardRef)(SVGIcon);
//# sourceMappingURL=SVGIcon.js.map

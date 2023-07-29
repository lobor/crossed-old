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
var ButtonGroup_exports = {};
__export(ButtonGroup_exports, {
  ButtonGroup: () => ButtonGroup
});
module.exports = __toCommonJS(ButtonGroup_exports);
var import_react = __toESM(require("react"));
var import_utils = require("@crossed/utils");
const ButtonGroup = (StyledButtonGroup, StyledButtonGroupHSpacer, StyledButtonGroupVSpacer) => (0, import_react.forwardRef)(
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
    let childrenArray = import_react.default.Children.toArray((0, import_utils.flattenChildren)(children));
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
        const clonedChild = import_react.default.cloneElement(child, {
          ...childProps
        });
        return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, { key: child.key ?? `spaced-child-${index}` }, clonedChild, index < childrenArray.length - 1 && (direction === "column" ? /* @__PURE__ */ import_react.default.createElement(StyledButtonGroupVSpacer, { space: !isAttached ? space : 0 }) : /* @__PURE__ */ import_react.default.createElement(StyledButtonGroupHSpacer, { space: !isAttached ? space : 0 })));
      });
    }
    if (computedChildren)
      return /* @__PURE__ */ import_react.default.createElement(StyledButtonGroup, { flexDirection: direction, ...props, ref }, computedChildren);
    return null;
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonGroup
});
//# sourceMappingURL=ButtonGroup.js.map

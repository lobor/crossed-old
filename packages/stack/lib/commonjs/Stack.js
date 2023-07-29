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
var Stack_exports = {};
__export(Stack_exports, {
  Stack: () => Stack
});
module.exports = __toCommonJS(Stack_exports);
var import_react = __toESM(require("react"));
var import_utils = require("@crossed/utils");
function Stack(Root, HSpacer, VSpacer) {
  return (0, import_react.forwardRef)(
    ({
      children,
      reversed,
      space,
      direction,
      ...props
    }, ref) => {
      const getSpacedChildren = (children2) => {
        let childrenArray = import_react.default.Children.toArray((0, import_utils.flattenChildren)(children2));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child, index) => {
          return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, { key: child.key ?? `spaced-child-${index}` }, child, index < childrenArray.length - 1 && (direction === "column" ? (
            //@ts-ignore
            /* @__PURE__ */ import_react.default.createElement(HSpacer, { size: space })
          ) : (
            //@ts-ignore
            /* @__PURE__ */ import_react.default.createElement(VSpacer, { size: space })
          )));
        });
        return childrenArray;
      };
      return /* @__PURE__ */ import_react.default.createElement(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Stack
});
//# sourceMappingURL=Stack.js.map

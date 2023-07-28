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
var getSpacedChild_exports = {};
__export(getSpacedChild_exports, {
  default: () => getSpacedChild_default,
  flattenChildren: () => flattenChildren
});
module.exports = __toCommonJS(getSpacedChild_exports);
var import_react = __toESM(require("react"));
function flattenChildren(children, keys = []) {
  const childrenArray = import_react.default.Children.toArray(children);
  return childrenArray.reduce(
    (flatChildren, child, index) => {
      if (child.type === import_react.default.Fragment) {
        return flatChildren.concat(
          flattenChildren(
            child.props.children,
            keys.concat(child.key || index)
          )
        );
      }
      if (import_react.default.isValidElement(child)) {
        flatChildren.push(
          import_react.default.cloneElement(child, {
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
  let childrenArray = import_react.default.Children.toArray(flattenChildren(children));
  childrenArray = childrenArray.map((child, index) => {
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, { key: child.key ?? `spaced-child-${index}` }, child, index < childrenArray.length - 1 && space && /* @__PURE__ */ import_react.default.createElement(SpacerComponent, { size: space }));
  });
  return childrenArray;
};
var getSpacedChild_default = getSpacedChildren;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  flattenChildren
});
//# sourceMappingURL=getSpacedChild.js.map

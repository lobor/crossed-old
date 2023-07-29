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
var Stagger_exports = {};
__export(Stagger_exports, {
  default: () => Stagger_default
});
module.exports = __toCommonJS(Stagger_exports);
var import_react = __toESM(require("react"));
var import_PresenceTransition = __toESM(require("./PresenceTransition"));
const defaultStaggerConfig = { offset: 0, reverse: false };
const cloneDeep = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let copy;
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = cloneDeep(obj[i]);
    }
    return copy;
  } else if (obj instanceof Object) {
    copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = cloneDeep(obj[key]);
      }
    }
    return copy;
  }
};
const Stagger = ({ children, ...restProps }) => {
  return import_react.default.Children.map(children, (child, index) => {
    const clonedAnimationConfig = cloneDeep(restProps);
    const { animate, exit } = clonedAnimationConfig;
    if (animate) {
      if (!animate.transition) {
        animate.transition = {};
      }
      animate.transition.delay = animate.transition.delay ?? 0;
      const stagger = animate.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse ? (import_react.default.Children.count(children) - 1 - index) * stagger.offset : index * stagger.offset;
      animate.transition.delay = animate.transition.delay + offset;
    }
    if (exit) {
      if (!exit.transition) {
        exit.transition = {};
      }
      exit.transition.delay = exit.transition.delay ?? 0;
      const stagger = exit.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse ? (import_react.default.Children.count(children) - 1 - index) * stagger.offset : index * stagger.offset;
      exit.transition.delay = exit.transition.delay + offset;
    }
    return /* @__PURE__ */ import_react.default.createElement(import_PresenceTransition.default, { key: child.key, ...clonedAnimationConfig }, child);
  });
};
var Stagger_default = Stagger;
//# sourceMappingURL=Stagger.js.map

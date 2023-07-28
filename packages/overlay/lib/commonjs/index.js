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
var src_exports = {};
__export(src_exports, {
  ExitAnimationContext: () => ExitAnimationContext,
  Overlay: () => Overlay,
  OverlayProvider: () => import_overlays2.OverlayProvider
});
module.exports = __toCommonJS(src_exports);
var import_overlays = require("@react-native-aria/overlays");
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_interactions = require("@react-native-aria/interactions");
var import_overlays2 = require("@react-native-aria/overlays");
const ExitAnimationContext = import_react.default.createContext({
  exited: true,
  setExited: (_exited) => {
  }
});
const Overlay = ({
  children,
  isOpen,
  useRNModal = false,
  useRNModalOnAndroid = false,
  isKeyboardDismissable = true,
  animationPreset = "fade",
  onRequestClose,
  style,
  ref,
  unmountOnExit
}) => {
  const [exited, setExited] = import_react.default.useState(!isOpen);
  (0, import_interactions.useKeyboardDismissable)({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {
    }
  });
  const styleObj = { ...style };
  if (import_react_native.Platform.OS === "web") {
    styleObj.zIndex = 9999;
  }
  if (animationPreset === "slide") {
    styleObj.overflow = "hidden";
    styleObj.display = "flex";
  } else {
    styleObj.display = exited && !isOpen ? "none" : "flex";
  }
  if (unmountOnExit && !isOpen && exited) {
    return null;
  }
  if (useRNModal || useRNModalOnAndroid && import_react_native.Platform.OS === "android") {
    return /* @__PURE__ */ import_react.default.createElement(ExitAnimationContext.Provider, { value: { exited, setExited } }, /* @__PURE__ */ import_react.default.createElement(
      import_react_native.Modal,
      {
        statusBarTranslucent: true,
        transparent: true,
        visible: isOpen,
        onRequestClose,
        animationType: animationPreset,
        ref
      },
      children
    ));
  }
  return /* @__PURE__ */ import_react.default.createElement(import_overlays.OverlayContainer, { style: { ...styleObj } }, /* @__PURE__ */ import_react.default.createElement(ExitAnimationContext.Provider, { value: { exited, setExited } }, children));
};
Overlay.displayName = "Overlay";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExitAnimationContext,
  Overlay,
  OverlayProvider
});
//# sourceMappingURL=index.js.map

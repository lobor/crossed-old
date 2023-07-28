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
var Popover_web_exports = {};
__export(Popover_web_exports, {
  Popover: () => Popover
});
module.exports = __toCommonJS(Popover_web_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_overlays = require("@react-aria/overlays");
var import_MenuContext = require("../MenuContext");
function Popover({
  StyledBackdrop,
  // @ts-ignore
  _experimentalOverlay = true,
  ...props
}) {
  const ref = import_react.default.useRef(null);
  const { state, children } = props;
  const { onClose } = import_react.default.useContext(import_MenuContext.MenuContext);
  const { popoverProps, underlayProps } = (0, import_overlays.usePopover)(
    {
      ...props,
      popoverRef: ref,
      isNonModal: true
    },
    state
  );
  if (!state.isOpen) {
    return null;
  }
  if (!_experimentalOverlay) {
    return (
      // @ts-ignore
      /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { ...popoverProps, ref }, /* @__PURE__ */ import_react.default.createElement(import_overlays.DismissButton, { onDismiss: state.close }), children, /* @__PURE__ */ import_react.default.createElement(import_overlays.DismissButton, { onDismiss: state.close }))
    );
  }
  return /* @__PURE__ */ import_react.default.createElement(import_overlays.Overlay, null, /* @__PURE__ */ import_react.default.createElement(
    StyledBackdrop,
    {
      ...underlayProps,
      onPress: onClose,
      focusable: false,
      "aria-hidden": true
    }
  ), /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { ...popoverProps, ref }, /* @__PURE__ */ import_react.default.createElement(import_overlays.DismissButton, { onDismiss: state.close }), children, /* @__PURE__ */ import_react.default.createElement(import_overlays.DismissButton, { onDismiss: state.close })));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Popover
});
//# sourceMappingURL=Popover.web.js.map

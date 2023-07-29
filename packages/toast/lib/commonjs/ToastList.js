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
var ToastList_exports = {};
__export(ToastList_exports, {
  ToastList: () => ToastList
});
module.exports = __toCommonJS(ToastList_exports);
var import_react = __toESM(require("react"));
var import_Toast = require("./Toast");
var import_overlay = require("@crossed/overlay");
var import_transitions = require("@crossed/transitions");
var import_react_native = require("react-native");
var import_react_native2 = require("react-native");
var import_hooks = require("@crossed/hooks");
const initialAnimationOffset = 24;
const transitionConfig = {
  "bottom": initialAnimationOffset,
  "top": -initialAnimationOffset,
  "top right": -initialAnimationOffset,
  "top left": -initialAnimationOffset,
  "bottom left": initialAnimationOffset,
  "bottom right": initialAnimationOffset
};
const toastPositionStyle = import_react_native2.Platform.OS === "web" ? "fixed" : "absolute";
const POSITIONS = {
  "top": {
    top: 0,
    left: 0,
    right: 0
  },
  "top right": {
    top: 0,
    right: 0
  },
  "top left": {
    top: 0,
    left: 0
  },
  "bottom": {
    bottom: 0,
    left: 0,
    right: 0
  },
  "bottom left": {
    bottom: 0,
    left: 0
  },
  "bottom right": {
    bottom: 0,
    right: 0
  }
};
const ToastList = () => {
  const { toastInfo, visibleToasts, removeToast } = import_react.default.useContext(import_Toast.ToastContext);
  const bottomInset = (0, import_hooks.useKeyboardBottomInset)() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };
  let hasToastOnOverlay = false;
  getPositions().map((position) => {
    var _a;
    if (((_a = toastInfo[position]) == null ? void 0 : _a.length) > 0)
      hasToastOnOverlay = true;
  });
  return getPositions().length > 0 ? /* @__PURE__ */ import_react.default.createElement(import_overlay.Overlay, { isOpen: hasToastOnOverlay, isKeyboardDismissable: false }, getPositions().map((position) => {
    if (Object.keys(POSITIONS).includes(position))
      return /* @__PURE__ */ import_react.default.createElement(
        import_react_native2.View,
        {
          key: position,
          pointerEvents: "box-none",
          style: {
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            position: toastPositionStyle,
            //@ts-ignore
            ...POSITIONS[position]
          }
        },
        toastInfo[position].map((toast) => {
          var _a;
          return /* @__PURE__ */ import_react.default.createElement(
            import_transitions.PresenceTransition,
            {
              key: toast.id,
              visible: visibleToasts[toast.id],
              onTransitionComplete: (status) => {
                var _a2, _b;
                if (status === "exited") {
                  removeToast(toast.id);
                  ((_a2 = toast.config) == null ? void 0 : _a2.onCloseComplete) && ((_b = toast.config) == null ? void 0 : _b.onCloseComplete());
                }
              },
              initial: {
                opacity: 0,
                translateY: transitionConfig[position]
              }
            },
            /* @__PURE__ */ import_react.default.createElement(import_react_native.SafeAreaView, { pointerEvents: "box-none" }, /* @__PURE__ */ import_react.default.createElement(
              import_react_native2.View,
              {
                style: {
                  bottom: ["bottom", "bottom-left", "bottom-right"].includes(
                    position
                  ) && ((_a = toast.config) == null ? void 0 : _a.avoidKeyboard) ? bottomInset : void 0
                }
              },
              toast.component
            ))
          );
        })
      );
    else
      return null;
  })) : null;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ToastList
});
//# sourceMappingURL=ToastList.js.map

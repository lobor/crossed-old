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
var OverlayAnimatePresence_exports = {};
__export(OverlayAnimatePresence_exports, {
  OverlayAnimatePresence: () => OverlayAnimatePresence
});
module.exports = __toCommonJS(OverlayAnimatePresence_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_overlay = require("@crossed/overlay");
const defaultTransitionConfig = {
  type: "timing",
  useNativeDriver: true,
  duration: 0,
  delay: 0
};
const OverlayAnimatePresence = (0, import_react.forwardRef)(
  ({ children, visible = false, AnimatePresence }, ref) => {
    const animateValue = import_react.default.useRef(new import_react_native.Animated.Value(0)).current;
    const [animationState, setAnimationState] = import_react.default.useState("");
    const prevVisible = import_react.default.useRef(visible);
    const { setExited } = import_react.default.useContext(import_overlay.ExitAnimationContext);
    import_react.default.useEffect(() => {
      if (animationState === "entering" || animationState === "exiting") {
        const startAnimation = animationState === "entering" ? 1 : 0;
        const transition = defaultTransitionConfig;
        if (AnimatePresence) {
          import_react_native.Animated.sequence([
            // @ts-ignore - delay is present in defaultTransitionConfig
            //@ts-ignore
            import_react_native.Animated[transition.type ?? "timing"](animateValue, {
              toValue: startAnimation,
              useNativeDriver: true
            })
          ]).start(() => {
            if (animationState === "entering") {
              setAnimationState("entered");
            } else if (animationState === "exiting") {
              setAnimationState("exited");
            }
          });
        }
      }
      if (animationState === "exited") {
        setExited(true);
      } else if (animationState === "entered") {
        setExited(false);
      }
    }, [animationState]);
    import_react.default.useEffect(() => {
      if (prevVisible.current !== visible && !visible) {
        setAnimationState("exiting");
      }
      if (visible) {
        setAnimationState("entering");
      }
      prevVisible.current = visible;
    }, [visible]);
    if (!AnimatePresence) {
      return children;
    }
    return /* @__PURE__ */ import_react.default.createElement(AnimatePresence, { ref }, visible ? children : null);
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OverlayAnimatePresence
});
//# sourceMappingURL=OverlayAnimatePresence.js.map

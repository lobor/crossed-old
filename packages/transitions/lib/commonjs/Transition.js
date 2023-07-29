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
var Transition_exports = {};
__export(Transition_exports, {
  Transition: () => Transition
});
module.exports = __toCommonJS(Transition_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
const transformStylesMap = {
  translateY: true,
  translateX: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true
};
const defaultStyles = {
  opacity: 1,
  translateY: 0,
  translateX: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: "0deg"
};
const getAnimatedStyles = (animateValue) => (initial, to) => {
  var _a;
  const styles = {
    transform: []
  };
  for (let key in initial) {
    if (key === "transition") {
      continue;
    }
    if (key in transformStylesMap) {
      (_a = styles.transform) == null ? void 0 : _a.push({
        [key]: animateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [initial[key], to[key]]
        })
      });
    } else {
      styles[key] = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [initial[key], to[key]]
      });
    }
  }
  return styles;
};
const defaultTransitionConfig = {
  type: "timing",
  useNativeDriver: true,
  duration: 250,
  delay: 0
};
const Transition = (0, import_react.forwardRef)(
  ({
    children,
    onTransitionComplete,
    visible = false,
    initial,
    animate,
    exit,
    style,
    as,
    ...rest
  }, ref) => {
    const animateValue = import_react.default.useRef(new import_react_native.Animated.Value(0)).current;
    const Component = import_react.default.useMemo(() => {
      if (as) {
        return import_react_native.Animated.createAnimatedComponent(as);
      }
      return import_react_native.Animated.View;
    }, [as]);
    const [animationState, setAnimationState] = import_react.default.useState("");
    const prevVisible = import_react.default.useRef(visible);
    import_react.default.useEffect(() => {
      if (animationState === "entering" || animationState === "exiting") {
        const entryTransition = {
          ...defaultTransitionConfig,
          ...animate == null ? void 0 : animate.transition
        };
        const exitTransition = {
          ...defaultTransitionConfig,
          ...exit == null ? void 0 : exit.transition
        };
        const startAnimation = animationState === "entering" ? 1 : 0;
        const transition = startAnimation ? entryTransition : exitTransition;
        import_react_native.Animated.sequence([
          // @ts-ignore - delay is present in defaultTransitionConfig
          import_react_native.Animated.delay(transition.delay),
          //@ts-ignore
          import_react_native.Animated[transition.type ?? "timing"](animateValue, {
            toValue: startAnimation,
            useNativeDriver: true,
            ...transition
          })
        ]).start(() => {
          if (animationState === "entering") {
            setAnimationState("entered");
          } else if (animationState === "exiting") {
            setAnimationState("exited");
          }
        });
      }
      if (animationState === "exited") {
        onTransitionComplete && onTransitionComplete("exited");
      } else if (animationState === "entered") {
        onTransitionComplete && onTransitionComplete("entered");
      }
    }, [animationState, onTransitionComplete]);
    import_react.default.useEffect(() => {
      if (prevVisible.current !== visible && !visible) {
        setAnimationState("exiting");
      }
      if (visible) {
        setAnimationState("entering");
      }
      prevVisible.current = visible;
    }, [visible]);
    const initialState = animationState === "exited" && exit ? { ...defaultStyles, ...exit } : { ...defaultStyles, ...initial };
    const animateState = { ...defaultStyles, ...animate };
    const styles = import_react.default.useMemo(() => {
      return [
        getAnimatedStyles(animateValue)(
          initialState,
          animateState
        ),
        style
      ];
    }, [animateValue, initial, animate, style]);
    return /* @__PURE__ */ import_react.default.createElement(
      Component,
      {
        pointerEvents: !visible ? "none" : "box-none",
        style: [styles],
        ref,
        ...rest
      },
      children
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Transition
});
//# sourceMappingURL=Transition.js.map

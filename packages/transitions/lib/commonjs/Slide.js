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
var Slide_exports = {};
__export(Slide_exports, {
  Slide: () => Slide,
  default: () => Slide_default
});
module.exports = __toCommonJS(Slide_exports);
var import_react = __toESM(require("react"));
var import_overlay = require("@crossed/overlay");
var import_PresenceTransition = __toESM(require("./PresenceTransition"));
var import_react_native = require("react-native");
const holderStyle = {
  top: {
    top: 0,
    right: 0,
    left: 0
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0
  },
  bottom: {
    bottom: 0,
    right: 0,
    left: 0
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0
  }
};
const Slide = (0, import_react.memo)(
  (0, import_react.forwardRef)(({ children, ...props }, ref) => {
    const {
      in: visible,
      placement = "bottom",
      overlay = true,
      duration = 500,
      ...resolvedProps
    } = props;
    const [containerOpacity, setContainerOpacity] = import_react.default.useState(0);
    const [size, setSize] = import_react.default.useState(0);
    const provideSize = (layoutSize) => {
      if (placement === "right" || placement === "left")
        setSize(layoutSize.width);
      else
        setSize(layoutSize.height);
      setContainerOpacity(1);
    };
    const transition = { duration };
    const animationStyle = {
      top: {
        initial: {
          translateY: -size
        },
        animate: {
          translateY: 0,
          transition
        }
      },
      bottom: {
        initial: {
          translateY: size
        },
        animate: {
          translateY: 0,
          transition
        },
        exit: {
          translateY: size,
          transition
        }
      },
      left: {
        initial: {
          translateX: -size
        },
        animate: {
          translateX: 0,
          transition
        }
      },
      right: {
        initial: {
          translateX: size
        },
        animate: {
          translateX: 0,
          transition
        }
      }
    };
    const slideComponent = /* @__PURE__ */ import_react.default.createElement(
      import_PresenceTransition.default,
      {
        visible,
        ...animationStyle[placement],
        style: [
          { position: "absolute" },
          holderStyle[placement],
          { height: "100%" }
        ]
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_react_native.View,
        {
          ...resolvedProps,
          opacity: containerOpacity,
          ref,
          onLayout: (e) => provideSize(e.nativeEvent.layout)
        },
        size ? children : null
      )
    );
    if (overlay) {
      return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_overlay.Overlay, { isKeyboardDismissable: false }, slideComponent));
    } else {
      return slideComponent;
    }
  })
);
var Slide_default = Slide;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Slide
});
//# sourceMappingURL=Slide.js.map

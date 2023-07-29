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
var ActionsheetDragIndicatorWrapper_exports = {};
__export(ActionsheetDragIndicatorWrapper_exports, {
  ActionsheetDragIndicatorWrapper: () => ActionsheetDragIndicatorWrapper
});
module.exports = __toCommonJS(ActionsheetDragIndicatorWrapper_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_utils = require("@crossed/utils");
var import_ActionsheetContentContext = require("./ActionsheetContentContext");
const windowHeight = import_react_native.Dimensions.get("window").height;
function ActionsheetDragIndicatorWrapper(StyledActionsheetDragIndicatorWrapper) {
  return (0, import_react.forwardRef)((props, ref) => {
    const { pan, handleClose, handleCloseBackdrop, snapPoints } = (0, import_ActionsheetContentContext.useActionsheetContent)("ActionsheetContentContext");
    const handleCloseRef = import_react.default.useRef(null);
    const panResponder = import_react.default.useRef(
      import_react_native.PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_evt, gestureState) => {
          return gestureState.dy > 15;
        },
        onPanResponderMove: (e, gestureState) => {
          if (gestureState.dy > 0) {
            import_react_native.Animated.event([null, { dy: pan.y }], {
              useNativeDriver: false
            })(e, gestureState);
          }
        },
        onPanResponderRelease: (_e, gestureState) => {
          const contentSheetHeight = windowHeight * (parseFloat(snapPoints[0]) * 0.01);
          if (contentSheetHeight / 4 < gestureState.dy) {
            handleCloseBackdrop();
            import_react_native.Animated.timing(pan, {
              toValue: { x: 0, y: contentSheetHeight },
              duration: 200,
              useNativeDriver: true
            }).start(handleClose);
          } else {
            import_react_native.Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              overshootClamping: true,
              useNativeDriver: true
            }).start();
          }
        }
      })
    ).current;
    const mergedRef = (0, import_utils.mergeRefs)([ref, handleCloseRef]);
    return /* @__PURE__ */ import_react.default.createElement(
      StyledActionsheetDragIndicatorWrapper,
      {
        ...panResponder.panHandlers,
        ...props,
        ref: mergedRef
      }
    );
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionsheetDragIndicatorWrapper
});
//# sourceMappingURL=ActionsheetDragIndicatorWrapper.js.map

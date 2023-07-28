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
var useKeyboardBottomInset_exports = {};
__export(useKeyboardBottomInset_exports, {
  useKeyboardBottomInset: () => useKeyboardBottomInset
});
module.exports = __toCommonJS(useKeyboardBottomInset_exports);
var React = __toESM(require("react"));
var import_react_native = require("react-native");
const useKeyboardBottomInset = () => {
  const [bottom, setBottom] = React.useState(0);
  const subscriptions = React.useRef([]);
  React.useEffect(() => {
    function onKeyboardChange(e) {
      if (e.startCoordinates && e.endCoordinates.screenY <= e.startCoordinates.screenY)
        setBottom(e.endCoordinates.height / 2);
      else
        setBottom(0);
    }
    if (import_react_native.Platform.OS === "ios") {
      subscriptions.current = [
        import_react_native.Keyboard.addListener("keyboardWillChangeFrame", onKeyboardChange)
      ];
    } else {
      subscriptions.current = [
        import_react_native.Keyboard.addListener("keyboardDidHide", onKeyboardChange),
        import_react_native.Keyboard.addListener("keyboardDidShow", onKeyboardChange)
      ];
    }
    return () => {
      subscriptions.current.forEach((subscription) => {
        subscription.remove();
      });
    };
  }, [setBottom, subscriptions]);
  return bottom;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useKeyboardBottomInset
});
//# sourceMappingURL=useKeyboardBottomInset.js.map

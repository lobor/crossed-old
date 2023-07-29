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
var useKeyboardDismisssable_exports = {};
__export(useKeyboardDismisssable_exports, {
  keyboardDismissHandlerManager: () => keyboardDismissHandlerManager,
  useBackHandler: () => useBackHandler,
  useKeyboardDismissable: () => useKeyboardDismissable
});
module.exports = __toCommonJS(useKeyboardDismisssable_exports);
var import_react = __toESM(require("react"));
var import_react2 = require("react");
var import_react_native = require("react-native");
let keyboardDismissHandlers = [];
const keyboardDismissHandlerManager = {
  push: (handler) => {
    keyboardDismissHandlers.push(handler);
    return () => {
      keyboardDismissHandlers = keyboardDismissHandlers.filter(
        (h) => h !== handler
      );
    };
  },
  length: () => keyboardDismissHandlers.length,
  pop: () => {
    return keyboardDismissHandlers.pop();
  }
};
const useKeyboardDismissable = ({ enabled, callback }) => {
  import_react.default.useEffect(() => {
    let cleanupFn = () => {
    };
    if (enabled) {
      cleanupFn = keyboardDismissHandlerManager.push(callback);
    } else {
      cleanupFn();
    }
    return () => {
      cleanupFn();
    };
  }, [enabled, callback]);
  useBackHandler({ enabled, callback });
};
function useBackHandler({ enabled, callback }) {
  (0, import_react2.useEffect)(() => {
    let backHandler = () => {
      callback();
      return true;
    };
    if (enabled) {
      import_react_native.BackHandler.addEventListener("hardwareBackPress", backHandler);
    } else {
      import_react_native.BackHandler.removeEventListener("hardwareBackPress", backHandler);
    }
    return () => import_react_native.BackHandler.removeEventListener("hardwareBackPress", backHandler);
  }, [enabled, callback]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  keyboardDismissHandlerManager,
  useBackHandler,
  useKeyboardDismissable
});
//# sourceMappingURL=useKeyboardDismisssable.js.map

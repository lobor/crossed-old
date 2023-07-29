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
var Provider_exports = {};
__export(Provider_exports, {
  CrossedContext: () => CrossedContext,
  CrossedContextProvider: () => CrossedContextProvider,
  Provider: () => Provider
});
module.exports = __toCommonJS(Provider_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_interactions = require("@react-native-aria/interactions");
const CrossedContext = import_react.default.createContext({});
const CrossedContextProvider = ({
  children,
  components,
  ...props
}) => {
  import_react.default.useEffect(() => {
    let escapeKeyListener = null;
    if (import_react_native.Platform.OS === "web") {
      escapeKeyListener = (e) => {
        if (e.key === "Escape") {
          if (import_interactions.keyboardDismissHandlerManager.length() > 0) {
            const lastHandler = import_interactions.keyboardDismissHandlerManager.pop();
            lastHandler();
          }
        }
      };
      document.addEventListener("keydown", escapeKeyListener);
    }
    return () => {
      if (import_react_native.Platform.OS === "web") {
        document.removeEventListener("keydown", escapeKeyListener);
      }
    };
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(CrossedContext.Provider, { value: components, ...props }, children);
};
const Provider = ({ StyledProvider }) => {
  return ({ children, components, config, ...props }) => {
    return /* @__PURE__ */ import_react.default.createElement(CrossedContextProvider, { components }, /* @__PURE__ */ import_react.default.createElement(StyledProvider, { config, ...props }, children));
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CrossedContext,
  CrossedContextProvider,
  Provider
});
//# sourceMappingURL=Provider.js.map

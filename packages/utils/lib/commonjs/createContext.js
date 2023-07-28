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
var createContext_exports = {};
__export(createContext_exports, {
  createContext: () => createContext
});
module.exports = __toCommonJS(createContext_exports);
var import_react = __toESM(require("react"));
function createContext(rootComponentName) {
  const Context = import_react.default.createContext(null);
  function Provider(props) {
    const { children, ...providerProps } = props;
    const value = import_react.default.useMemo(
      () => providerProps,
      //  eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(providerProps)
    );
    return /* @__PURE__ */ import_react.default.createElement(Context.Provider, { value }, children);
  }
  function useContext(consumerName) {
    const context = import_react.default.useContext(Context);
    if (context === null) {
      throw new Error(
        `\`${consumerName}\` must be used within \`${rootComponentName}\``
      );
    }
    return context;
  }
  Provider.displayName = rootComponentName + "Provider";
  return [Provider, useContext];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createContext
});
//# sourceMappingURL=createContext.js.map

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
var SelectItem_exports = {};
__export(SelectItem_exports, {
  SelectItem: () => SelectItem
});
module.exports = __toCommonJS(SelectItem_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_SelectContext = require("./SelectContext");
const SelectItem = (StyledSelectItem, StyledSelectItemText) => (0, import_react.forwardRef)(
  ({
    // isDisabled,
    // isFocused,
    // isFocusVisible,
    // isHovered,
    // isInvalid,
    label,
    value,
    ...props
  }, ref) => {
    const {
      onValueChange,
      handleClose,
      value: activeValue,
      setLabel
    } = import_react.default.useContext(import_SelectContext.SelectPortalContext);
    if (import_react_native.Platform.OS !== "web") {
      return /* @__PURE__ */ import_react.default.createElement(
        StyledSelectItem,
        {
          ref,
          onPress: () => {
            if (!props.isDisabled) {
              onValueChange(value);
              setLabel(label);
              handleClose();
            }
          },
          states: {
            active: activeValue === value
          },
          ...props
        },
        /* @__PURE__ */ import_react.default.createElement(StyledSelectItemText, null, label)
      );
    }
    return /* @__PURE__ */ import_react.default.createElement("option", { value, disabled: props.isDisabled, ref }, label);
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SelectItem
});
//# sourceMappingURL=SelectItem.js.map

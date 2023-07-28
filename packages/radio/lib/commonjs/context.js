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
var context_exports = {};
__export(context_exports, {
  FormControlContext: () => FormControlContext,
  useRadioContext: () => useRadioContext,
  useRadioContextContext: () => useRadioContextContext,
  useRadioContextProvider: () => useRadioContextProvider
});
module.exports = __toCommonJS(context_exports);
var import_react = __toESM(require("react"));
var import_utils = require("@crossed/utils");
const FormControlContext = import_react.default.createContext({});
function useRadioContextProvider(props) {
  const {
    nativeID: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  var idCounter = 0;
  function uniqueId(prefix = "") {
    var id2 = ++idCounter;
    return prefix + id2;
  }
  const id = uniqueId();
  const nativeID = idProp || `field-${id}`;
  const labelId = `${nativeID}-label`;
  const feedbackId = `${nativeID}-feedback`;
  const helpTextId = `${nativeID}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = import_react.default.useState(false);
  const [hasHelpText, setHasHelpText] = import_react.default.useState(false);
  const context = {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    nativeID,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps
  };
  return context;
}
function useRadioContext(props) {
  const field = useRadioContextContext();
  const describedBy = [];
  if (field == null ? void 0 : field.hasFeedbackText)
    describedBy.push(field == null ? void 0 : field.feedbackId);
  if (field == null ? void 0 : field.hasHelpText)
    describedBy.push(field == null ? void 0 : field.helpTextId);
  const ariaDescribedBy = describedBy.join(" ");
  const { isInvalid, isDisabled, isReadOnly, isRequired, ...cleanProps } = props;
  let nativeID = props == null ? void 0 : props.nativeID;
  if (!nativeID && (field == null ? void 0 : field.nativeID)) {
    nativeID = `${field == null ? void 0 : field.nativeID}-input`;
  }
  return {
    ...cleanProps,
    nativeID,
    disabled: isDisabled || (field == null ? void 0 : field.isDisabled),
    readOnly: isReadOnly || (field == null ? void 0 : field.isReadOnly),
    required: isRequired || (field == null ? void 0 : field.isRequired),
    accessibilityInvalid: (0, import_utils.ariaAttr)(isInvalid || (field == null ? void 0 : field.isInvalid)),
    accessibilityRequired: (0, import_utils.ariaAttr)(isRequired || (field == null ? void 0 : field.isRequired)),
    accessibilityReadOnly: (0, import_utils.ariaAttr)(isReadOnly || (field == null ? void 0 : field.isReadOnly)),
    accessibilityDescribedBy: ariaDescribedBy || void 0
  };
}
const useRadioContextContext = () => {
  return import_react.default.useContext(FormControlContext);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormControlContext,
  useRadioContext,
  useRadioContextContext,
  useRadioContextProvider
});
//# sourceMappingURL=context.js.map

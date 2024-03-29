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
var FormControlLabel_exports = {};
__export(FormControlLabel_exports, {
  default: () => FormControlLabel_default
});
module.exports = __toCommonJS(FormControlLabel_exports);
var import_react = __toESM(require("react"));
var import_utils = require("@crossed/utils");
var import_useFormControl = require("./useFormControl");
var import_utils2 = require("@crossed/utils");
const FormControlLabel = ({
  Label: StyledFormControlLabel,
  LabelAstrick: StyledFormControlLabelAstrick
}) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  const formControlContext = (0, import_useFormControl.useFormControlContext)();
  const { isRequired, ...combinedProps } = (0, import_utils.combineContextAndProps)(
    formControlContext,
    props
  );
  const _ref = import_react.default.useRef(null);
  const mergedRef = (0, import_utils2.mergeRefs)([_ref, ref]);
  import_react.default.useEffect(() => {
    if (_ref.current) {
      if (props.htmlFor) {
        _ref.current.htmlFor = props.htmlFor;
      } else if (combinedProps == null ? void 0 : combinedProps.nativeID) {
        _ref.current.htmlFor = combinedProps.nativeID;
      }
    }
  }, [combinedProps == null ? void 0 : combinedProps.nativeID, props.htmlFor]);
  return /* @__PURE__ */ import_react.default.createElement(
    StyledFormControlLabel,
    {
      ref: mergedRef,
      ...combinedProps,
      nativeID: combinedProps == null ? void 0 : combinedProps.labelId
    },
    children,
    isRequired && /* @__PURE__ */ import_react.default.createElement(StyledFormControlLabelAstrick, null, "*")
  );
});
var FormControlLabel_default = FormControlLabel;
//# sourceMappingURL=FormControlLabel.js.map

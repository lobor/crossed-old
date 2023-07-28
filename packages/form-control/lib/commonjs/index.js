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
var src_exports = {};
__export(src_exports, {
  createFormControl: () => createFormControl,
  useFormControl: () => import_useFormControl.useFormControl,
  useFormControlContext: () => import_useFormControl.useFormControlContext
});
module.exports = __toCommonJS(src_exports);
var import_FormControl = __toESM(require("./FormControl"));
var import_FormControlError = __toESM(require("./FormControlError"));
var import_FormControlErrorText = __toESM(require("./FormControlErrorText"));
var import_FormControlErrorIcon = __toESM(require("./FormControlErrorIcon"));
var import_FormControlHelper = __toESM(require("./FormControlHelper"));
var import_FormControlHelper2 = __toESM(require("./FormControlHelper"));
var import_FormControlLabel = __toESM(require("./FormControlLabel"));
var import_FormControlLabelText = __toESM(require("./FormControlLabelText"));
var import_useFormControl = require("./useFormControl");
const createFormControl = ({
  Root,
  Error: Error2,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText
}) => {
  const FormControl = (0, import_FormControl.default)(Root);
  FormControl.Error = (0, import_FormControlError.default)(Error2);
  FormControl.Error.Text = (0, import_FormControlErrorText.default)(ErrorText);
  FormControl.Error.Icon = (0, import_FormControlErrorIcon.default)(ErrorIcon);
  FormControl.Label = (0, import_FormControlLabel.default)({
    Label,
    LabelAstrick
  });
  FormControl.Label.Text = (0, import_FormControlLabelText.default)(LabelText);
  FormControl.Helper = (0, import_FormControlHelper.default)(Helper);
  FormControl.Helper.Text = (0, import_FormControlHelper2.default)(HelperText);
  FormControl.Error.displayName = "FormControl.Error";
  FormControl.Error.Text.displayName = "FormControl.Error.Text";
  FormControl.Error.Icon.displayName = "FormControl.Error.Icon";
  FormControl.Label.displayName = "FormControl.Label";
  FormControl.Label.Text.displayName = "FormControl.Label.Text";
  FormControl.Helper.displayName = "FormControl.Helper";
  FormControl.Helper.Text.displayName = "FormControl.Helper.Text";
  return FormControl;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createFormControl,
  useFormControl,
  useFormControlContext
});
//# sourceMappingURL=index.js.map

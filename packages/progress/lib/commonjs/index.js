"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  createProgress: () => createProgress
});
module.exports = __toCommonJS(src_exports);
var import_Progress = require("./Progress");
var import_ProgressFilledTrack = require("./ProgressFilledTrack");
function createProgress({
  Root,
  FilledTrack
}) {
  const Progress = (0, import_Progress.Progress)(Root);
  Progress.FilledTrack = (0, import_ProgressFilledTrack.ProgressFilledTrack)(FilledTrack);
  Progress.displayName = "Progress";
  Progress.FilledTrack.displayName = "Progress.FilledTrack";
  return Progress;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createProgress
});
//# sourceMappingURL=index.js.map

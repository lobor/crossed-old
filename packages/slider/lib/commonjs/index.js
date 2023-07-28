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
  SliderContext: () => import_Context.SliderContext,
  createSlider: () => createSlider
});
module.exports = __toCommonJS(src_exports);
var import_Slider = __toESM(require("./Slider"));
var import_SliderThumb = __toESM(require("./SliderThumb"));
var import_SliderTrack = __toESM(require("./SliderTrack"));
var import_SliderFilledTrack = __toESM(require("./SliderFilledTrack"));
var import_Context = require("./Context");
function createSlider({
  Root,
  ThumbInteraction,
  Thumb,
  Track,
  FilledTrack
}) {
  const Slider = (0, import_Slider.default)(Root);
  Slider.Thumb = (0, import_SliderThumb.default)(Thumb, ThumbInteraction);
  Slider.Track = (0, import_SliderTrack.default)(Track);
  Slider.FilledTrack = (0, import_SliderFilledTrack.default)(FilledTrack);
  Slider.displayName = "Slider";
  Slider.Thumb.displayName = "Slider.Thumb";
  Slider.Track.displayName = "Slider.Track";
  Slider.FilledTrack.displayName = "Slider.FilledTrack";
  return Slider;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SliderContext,
  createSlider
});
//# sourceMappingURL=index.js.map

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
  createAvatar: () => createAvatar
});
module.exports = __toCommonJS(src_exports);
var import_Avatar = require("./Avatar");
var import_AvatarBadge = __toESM(require("./AvatarBadge"));
var import_AvatarGroup = __toESM(require("./AvatarGroup"));
var import_AvatarImage = __toESM(require("./AvatarImage"));
var import_AvatarFallbackText = require("./AvatarFallbackText");
function createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText
}) {
  const Avatar = (0, import_Avatar.Avatar)(Root);
  Avatar.Badge = (0, import_AvatarBadge.default)(Badge);
  Avatar.Group = (0, import_AvatarGroup.default)(Group);
  Avatar.Image = (0, import_AvatarImage.default)(Image);
  Avatar.FallbackText = (0, import_AvatarFallbackText.AvatarFallbackText)(FallbackText);
  Avatar.displayName = "Avatar";
  Avatar.Badge.displayName = "Avatar.Badge";
  Avatar.Group.displayName = "Avatar.Group";
  Avatar.Image.displayName = "Avatar.Image";
  Avatar.FallbackText.displayName = "Avatar.FallbackText";
  return Avatar;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createAvatar
});
//# sourceMappingURL=index.js.map

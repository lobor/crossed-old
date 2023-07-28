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
var useLink_exports = {};
__export(useLink_exports, {
  useLink: () => useLink
});
module.exports = __toCommonJS(useLink_exports);
var import_react_native = require("react-native");
const linkToHREF = (URL) => {
  import_react_native.Linking.openURL(URL).catch((err) => console.error("An error occurred", err));
};
const addOnPressFunctionality = (href, callback) => {
  href ? linkToHREF(href) : "";
  callback ? callback() : () => {
  };
};
function useLink(props) {
  const { href, isExternal, onPress, _ref } = props;
  let platformLinkProps = {};
  if (import_react_native.Platform.OS === "web") {
    platformLinkProps = {
      href,
      onPress
    };
    if (isExternal && _ref.current) {
      _ref.current.target = "_blank";
      _ref.current.rel = "noopener";
    }
  } else {
    platformLinkProps = {
      onPress: () => {
        addOnPressFunctionality(href, onPress);
      }
    };
  }
  return {
    linkProps: {
      ...platformLinkProps,
      accessibilityRole: "link",
      accessible: true
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useLink
});
//# sourceMappingURL=useLink.js.map

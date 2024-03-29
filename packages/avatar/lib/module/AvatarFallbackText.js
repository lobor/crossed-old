import React, { forwardRef } from "react";
const getFirstCharacters = (str) => {
  const words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      result += words[i].charAt(0);
    }
    if (result.length >= 2) {
      break;
    }
  }
  return result.toUpperCase();
};
const AvatarFallbackText = (StyledAvatarFallbackText) => forwardRef(({ children, ...props }, ref) => {
  let fallbackText = "";
  if (typeof children === "string") {
    fallbackText = getFirstCharacters(children);
  }
  return /* @__PURE__ */ React.createElement(StyledAvatarFallbackText, { ref, ...props }, fallbackText);
});
export {
  AvatarFallbackText
};
//# sourceMappingURL=AvatarFallbackText.js.map

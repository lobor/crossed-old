import React, { forwardRef } from "react";
const AvatarGroup = (StyledAvatarGroup) => forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(StyledAvatarGroup, { ref, ...props }, [...children].flat(Infinity).reverse());
});
var AvatarGroup_default = AvatarGroup;
export {
  AvatarGroup_default as default
};
//# sourceMappingURL=AvatarGroup.js.map

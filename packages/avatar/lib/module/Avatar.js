import React, { createContext, forwardRef } from "react";
const AvatarContext = createContext({});
const Avatar = (StyledAvatar) => forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(StyledAvatar, { ref, ...props }, children);
});
export {
  Avatar,
  AvatarContext
};
//# sourceMappingURL=Avatar.js.map

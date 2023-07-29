import React from "react";
import PresenceTransition from "./PresenceTransition";
const Fade = ({ children, ...props }, ref) => {
  const {
    in: animationState,
    // entryDuration,
    // exitDuration,
    ...resolvedProps
  } = props;
  return /* @__PURE__ */ React.createElement(PresenceTransition, { visible: animationState, ref, ...resolvedProps }, children);
};
var Fade_default = React.forwardRef(Fade);
export {
  Fade_default as default
};
//# sourceMappingURL=Fade.js.map

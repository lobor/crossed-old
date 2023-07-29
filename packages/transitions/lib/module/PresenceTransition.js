import React, { forwardRef } from "react";
import { ExitAnimationContext } from "@crossed/overlay";
import { Transition } from "./Transition";
const PresenceTransition = ({ visible = false, onTransitionComplete, ...rest }, ref) => {
  const { setExited } = React.useContext(ExitAnimationContext);
  return /* @__PURE__ */ React.createElement(
    Transition,
    {
      visible,
      onTransitionComplete: (state) => {
        if (state === "exited") {
          setExited(true);
        } else {
          setExited(false);
        }
        onTransitionComplete && onTransitionComplete(state);
      },
      ...rest,
      ref
    }
  );
};
var PresenceTransition_default = forwardRef(PresenceTransition);
export {
  PresenceTransition_default as default
};
//# sourceMappingURL=PresenceTransition.js.map

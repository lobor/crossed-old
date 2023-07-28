import React, { forwardRef } from "react";
import { useProgress } from "./ProgressContext";
function ProgressFilledTrack(StyledProgressFilledTrack) {
  return forwardRef(
    //@ts-ignore
    ({ sx, ...props }, ref) => {
      const { valueWidth } = useProgress("ProgressContext");
      let mysx = {};
      if (sx) {
        sx["w"] = `${valueWidth}%`;
        mysx = sx;
      } else {
        mysx["w"] = `${valueWidth}%`;
      }
      return /* @__PURE__ */ React.createElement(
        StyledProgressFilledTrack,
        {
          ...props,
          sx: mysx,
          ref
        }
      );
    }
  );
}
export {
  ProgressFilledTrack
};
//# sourceMappingURL=ProgressFilledTrack.js.map

import React, { forwardRef } from "react";
import { ProgressProvider } from "./ProgressContext";
const useProgress = ({
  min,
  max,
  value
}) => {
  const valueWidth = value < max && value > min ? (value - min) / (max - min) * 100 : value > min ? 100 : 0;
  return {
    "accessible": true,
    "focusable": true,
    "role": "progressbar",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": valueWidth,
    "aria-valuetext": `${valueWidth}%`,
    valueWidth,
    "accessibilityRole": "progressbar",
    "accessibilityValueNow": valueWidth,
    "accessibilityValueMin": min,
    "accessibilityValueMax": max,
    "accessibilityValueText": `${valueWidth}%`
  };
};
function Progress(StyledProgress) {
  return forwardRef(
    ({ children, min = 0, max = 100, value = 0, ...props }, ref) => {
      const progressProps = useProgress({ min, max, value });
      return /* @__PURE__ */ React.createElement(
        StyledProgress,
        {
          ref,
          ...progressProps,
          ...props
        },
        /* @__PURE__ */ React.createElement(
          ProgressProvider,
          {
            min,
            max,
            valueWidth: progressProps.valueWidth
          },
          children
        )
      );
    }
  );
}
export {
  Progress
};
//# sourceMappingURL=Progress.js.map

import React, { forwardRef } from "react";
import { SliderContext } from "./Context";
import { Platform } from "react-native";
import { mergeRefs } from "@crossed/utils";
function SliderFilledTrack(StyledSliderFilledTrack) {
  return forwardRef(({ style, ...props }, ref) => {
    const _ref = React.useRef(null);
    const {
      isReversed,
      state,
      trackLayout,
      orientation,
      isDisabled,
      isFocused,
      isHovered,
      isPressed,
      isFocusVisible
    } = React.useContext(SliderContext);
    const getSliderTrackPosition = () => {
      if (orientation === "vertical") {
        return isReversed ? trackLayout.height - trackLayout.height * state.getThumbPercent(0) : trackLayout.height * state.getThumbPercent(0);
      } else {
        return isReversed ? trackLayout.width - trackLayout.width * state.getThumbPercent(0) : trackLayout.width * state.getThumbPercent(0);
      }
    };
    const sliderTrackPosition = getSliderTrackPosition();
    const positionProps = orientation === "vertical" ? { height: sliderTrackPosition } : { width: sliderTrackPosition };
    return /* @__PURE__ */ React.createElement(
      StyledSliderFilledTrack,
      {
        ...props,
        ref: mergeRefs([_ref, ref]),
        style: { ...style, ...positionProps },
        states: {
          hover: isHovered,
          disabled: isDisabled,
          focus: isFocused,
          focusVisible: isFocusVisible,
          active: isPressed
        },
        disabled: isDisabled,
        focusable: Platform.OS === "web" ? false : void 0
      }
    );
  });
}
var SliderFilledTrack_default = SliderFilledTrack;
export {
  SliderFilledTrack_default as default
};
//# sourceMappingURL=SliderFilledTrack.js.map

import React, { forwardRef } from "react";
import { SliderContext } from "./Context";
import { mergeRefs } from "@crossed/utils";
import { useHover } from "@react-native-aria/interactions";
function SliderTrack(StyledSliderTrack) {
  return forwardRef(({ children, style, ...props }, ref) => {
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);
    const { trackProps, onTrackLayout, isDisabled } = React.useContext(SliderContext);
    return /* @__PURE__ */ React.createElement(
      StyledSliderTrack,
      {
        onLayout: onTrackLayout,
        ref: mergeRefs([_ref, ref]),
        ...trackProps,
        style: { ...style },
        ...props,
        isDisabled,
        focusable: false,
        states: { hover: isHovered, disabled: isDisabled },
        disabled: isDisabled
      },
      children
    );
  });
}
var SliderTrack_default = SliderTrack;
export {
  SliderTrack_default as default
};
//# sourceMappingURL=SliderTrack.js.map

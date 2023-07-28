import React, { forwardRef, useEffect } from "react";
import { Platform } from "react-native";
import { useSliderThumb } from "@react-native-aria/slider";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SliderContext } from "./Context";
import { useHover } from "@react-native-aria/interactions";
import { mergeRefs } from "@crossed/utils";
import { useFocusRing, useFocus } from "@react-native-aria/focus";
import { composeEventHandlers } from "@crossed/utils";
function SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction) {
  return forwardRef(
    ({
      children,
      scaleOnPressed = 1,
      style,
      ...props
    }, ref) => {
      var _a;
      const [thumbSize, setThumbSize] = React.useState({
        height: 0,
        width: 0
      });
      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);
      const {
        state,
        trackLayout,
        orientation,
        isDisabled,
        isReversed,
        isPressed,
        setIsHovered,
        setIsPressed,
        setIsFocused,
        setIsFocusVisible
      } = React.useContext(SliderContext);
      const inputRef = React.useRef(null);
      const { thumbProps, inputProps } = useSliderThumb(
        {
          index: 0,
          trackLayout,
          inputRef,
          orientation
        },
        state
      );
      const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
      const { isFocused, focusProps } = useFocus();
      const thumbStyles = {
        bottom: isReversed ? orientation === "vertical" ? `${state.getThumbPercent(0) * 100}%` : void 0 : orientation === "vertical" ? `${state.getThumbPercent(0) * 100}%` : void 0,
        left: isReversed ? orientation !== "vertical" ? `${state.getThumbPercent(0) * 100}%` : void 0 : orientation !== "vertical" ? `${state.getThumbPercent(0) * 100}%` : void 0,
        transform: orientation === "vertical" ? [{ translateY: (thumbSize == null ? void 0 : thumbSize.height) / 2 }] : [{ translateX: -(thumbSize == null ? void 0 : thumbSize.height) / 2 }]
      };
      (_a = thumbStyles == null ? void 0 : thumbStyles.transform) == null ? void 0 : _a.push({
        scale: state.isThumbDragging(0) ? scaleOnPressed : 1
      });
      useEffect(() => {
        setIsPressed(state.isThumbDragging(0));
      }, [state, setIsPressed, isPressed]);
      useEffect(() => {
        setIsFocused(isFocused);
      }, [isFocused, setIsFocused]);
      useEffect(() => {
        setIsFocusVisible(isFocusVisible);
      }, [isFocusVisible, setIsFocusVisible]);
      useEffect(() => {
        setIsHovered(isHovered);
      }, [isHovered, setIsHovered]);
      return /* @__PURE__ */ React.createElement(
        StyledSliderThumb,
        {
          onLayout: (layout) => {
            var _a2, _b, _c, _d;
            setThumbSize({
              height: (_b = (_a2 = layout == null ? void 0 : layout.nativeEvent) == null ? void 0 : _a2.layout) == null ? void 0 : _b.height,
              width: (_d = (_c = layout == null ? void 0 : layout.nativeEvent) == null ? void 0 : _c.layout) == null ? void 0 : _d.width
            });
          },
          states: {
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisible
          },
          disabled: isDisabled,
          ...thumbProps,
          style: {
            ...style,
            ...thumbStyles
          },
          onFocus: composeEventHandlers(
            composeEventHandlers(props == null ? void 0 : props.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          ),
          onBlur: composeEventHandlers(
            composeEventHandlers(props == null ? void 0 : props.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          ),
          ref: mergeRefs([_ref, ref]),
          ...props
        },
        /* @__PURE__ */ React.createElement(
          StyledSliderThumbInteraction,
          {
            states: {
              hover: isHovered,
              focus: isFocused,
              focusVisible: isFocusVisible,
              disabled: isDisabled,
              active: isPressed
            }
          },
          children,
          Platform.OS === "web" && /* @__PURE__ */ React.createElement(VisuallyHidden, null, /* @__PURE__ */ React.createElement("input", { ref: inputRef, ...inputProps }))
        )
      );
    }
  );
}
var SliderThumb_default = SliderThumb;
export {
  SliderThumb_default as default
};
//# sourceMappingURL=SliderThumb.js.map

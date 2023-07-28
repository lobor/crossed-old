import React, { forwardRef } from "react";
import { useSliderState } from "@react-stately/slider";
import { useLayout } from "@crossed/hooks";
import { SliderContext } from "./Context";
import { useSlider } from "@react-native-aria/slider";
import { useFormControlContext } from "@crossed/form-control";
function Slider(StyledSlider) {
  return forwardRef(
    ({
      orientation = "horizontal",
      isReversed = false,
      children,
      ...props
    }, ref) => {
      const formControlContext = useFormControlContext();
      const [isFocused, setIsFocused] = React.useState(false);
      const [isFocusVisible, setIsFocusVisible] = React.useState(false);
      const [isHovered, setIsHovered] = React.useState(false);
      const [isPressed, setIsPressed] = React.useState(false);
      const { isDisabled, isReadOnly, ...newProps } = {
        ...formControlContext,
        ...props,
        "aria-label": props.accessibilityLabel ?? "Slider"
      };
      if (typeof props.value === "number") {
        newProps.value = [props.value];
      }
      if (typeof props.defaultValue === "number") {
        newProps.defaultValue = [props.defaultValue];
      }
      props = newProps;
      const { onLayout, layout: trackLayout } = useLayout();
      const updatedProps = Object.assign({}, props);
      if (isReadOnly || isDisabled) {
        updatedProps.isDisabled = true;
      }
      const state = useSliderState({
        ...updatedProps,
        //@ts-ignore
        numberFormatter: { format: (e) => e },
        minValue: props.minValue,
        maxValue: props.maxValue,
        onChange: (val) => {
          props.onChange && props.onChange(val[0]);
        },
        onChangeEnd: (val) => {
          props.onChangeEnd && props.onChangeEnd(val[0]);
        }
      });
      const { trackProps } = useSlider(
        props,
        state,
        trackLayout
      );
      const contextValue = React.useMemo(() => {
        return {
          trackLayout,
          state,
          orientation,
          isDisabled,
          isFocused,
          setIsFocused,
          isFocusVisible,
          setIsFocusVisible,
          isPressed,
          setIsPressed,
          isHovered,
          setIsHovered,
          isReversed,
          trackProps,
          isReadOnly,
          onTrackLayout: onLayout
        };
      }, [
        trackLayout,
        state,
        orientation,
        isDisabled,
        isReversed,
        isReadOnly,
        onLayout,
        isFocused,
        setIsFocused,
        isFocusVisible,
        setIsFocusVisible,
        isPressed,
        setIsPressed
      ]);
      return /* @__PURE__ */ React.createElement(SliderContext.Provider, { value: contextValue }, /* @__PURE__ */ React.createElement(
        StyledSlider,
        {
          ...props,
          ref,
          states: {
            hover: isHovered,
            disabled: isDisabled,
            focus: isFocused,
            focusVisible: isFocusVisible,
            active: isPressed
          },
          orientation: orientation ?? "horizontal",
          isReversed: isReversed ?? false
        },
        children
      ));
    }
  );
}
var Slider_default = Slider;
export {
  Slider_default as default
};
//# sourceMappingURL=Slider.js.map

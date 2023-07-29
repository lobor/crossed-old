import React, { forwardRef } from "react";
import { SelectContext } from "./SelectContext";
import { useHover } from "@react-native-aria/interactions";
import { useControllableState } from "@crossed/hooks";
import { useFormControlContext } from "@crossed/form-control";
import { useFocusRing } from "@react-native-aria/focus";
const Select = (StyledSelect) => forwardRef(
  ({
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    selectedValue: selectedOption,
    selectedLabel,
    onValueChange,
    defaultValue,
    onClose,
    onOpen,
    closeOnOverlayClick,
    ...props
  }, ref) => {
    const [placeholderState, setPlaceholderState] = React.useState("");
    const [isFocused, setIsFocused] = React.useState(false);
    const { isFocusVisible, focusProps } = useFocusRing();
    const hoverRef = React.useRef(null);
    const { hoverProps, isHovered } = useHover({ isDisabled }, hoverRef);
    const [value, setValue] = useControllableState({
      value: selectedOption,
      defaultValue,
      onChange: (newValue) => {
        onValueChange && onValueChange(newValue);
      }
    });
    const [label, setLabel] = React.useState(selectedLabel);
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClose = React.useCallback(() => {
      setIsOpen(false);
      onClose && onClose();
    }, [onClose, setIsOpen]);
    const inputProps = useFormControlContext();
    const contextValue = React.useMemo(() => {
      return {
        isHovered: isHovered || isHoveredProp,
        isFocused: isFocused || isFocusedProp,
        isDisabled: isDisabled || inputProps.isDisabled,
        isInvalid: isInvalid || inputProps.isInvalid,
        isRequired: isRequired || inputProps.isRequired,
        isReadOnly: isReadOnly || inputProps.isReadOnly,
        hoverRef,
        hoverProps,
        isFocusVisible: isFocusVisibleProp || isFocusVisible,
        setIsOpen,
        onOpen,
        isOpen,
        onValueChange: setValue,
        handleClose,
        closeOnOverlayClick,
        value,
        label,
        setLabel,
        placeholder: placeholderState,
        setPlaceholder: setPlaceholderState,
        setFocused: setIsFocused,
        focusProps
      };
    }, [
      closeOnOverlayClick,
      handleClose,
      hoverProps,
      isDisabled,
      isFocusVisible,
      isFocusVisibleProp,
      isFocused,
      isFocusedProp,
      isHovered,
      isHoveredProp,
      isInvalid,
      isOpen,
      onOpen,
      setValue,
      value,
      setLabel,
      label,
      setIsFocused,
      focusProps,
      isRequired,
      inputProps,
      isReadOnly,
      setPlaceholderState,
      placeholderState
    ]);
    return /* @__PURE__ */ React.createElement(StyledSelect, { ref, focusable: false, ...props }, /* @__PURE__ */ React.createElement(SelectContext.Provider, { value: contextValue }, children));
  }
);
export {
  Select
};
//# sourceMappingURL=Select.js.map

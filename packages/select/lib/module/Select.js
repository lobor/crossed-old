function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { useHover } from '@react-native-aria/interactions';
import { useControllableState } from '@crossed/hooks';
import { useFormControlContext } from '@crossed/form-control';
import { useFocusRing } from '@react-native-aria/focus';
export const Select = StyledSelect => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    selectedValue: selectedOption,
    selectedLabel: selectedLabel,
    onValueChange,
    defaultValue,
    onClose,
    onOpen,
    closeOnOverlayClick,
    ...props
  } = _ref;
  const [placeholderState, setPlaceholderState] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  const hoverRef = React.useRef(null);
  const {
    hoverProps,
    isHovered
  } = useHover({
    isDisabled
  }, hoverRef);
  const [value, setValue] = useControllableState({
    value: selectedOption,
    defaultValue,
    onChange: newValue => {
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
      hoverRef: hoverRef,
      hoverProps: hoverProps,
      isFocusVisible: isFocusVisibleProp || isFocusVisible,
      setIsOpen: setIsOpen,
      onOpen: onOpen,
      isOpen: isOpen,
      onValueChange: setValue,
      handleClose: handleClose,
      closeOnOverlayClick: closeOnOverlayClick,
      value: value,
      label: label,
      setLabel: setLabel,
      placeholder: placeholderState,
      setPlaceholder: setPlaceholderState,
      setFocused: setIsFocused,
      focusProps: focusProps
    };
  }, [closeOnOverlayClick, handleClose, hoverProps, isDisabled, isFocusVisible, isFocusVisibleProp, isFocused, isFocusedProp, isHovered, isHoveredProp, isInvalid, isOpen, onOpen, setValue, value, setLabel, label, setIsFocused, focusProps, isRequired, inputProps, isReadOnly, setPlaceholderState, placeholderState]);
  return /*#__PURE__*/React.createElement(StyledSelect, _extends({
    ref: ref,
    focusable: false
  }, props), /*#__PURE__*/React.createElement(SelectContext.Provider, {
    value: contextValue
  }, children));
});
//# sourceMappingURL=Select.js.map
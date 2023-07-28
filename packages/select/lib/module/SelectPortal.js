function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SelectContext, SelectPortalContext } from './SelectContext';
import { StyleSheet, Platform } from 'react-native';
import { mergeRefs } from '@crossed/utils';
export const SelectPortal = StyledSelectPortal => /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    isOpen,
    handleClose,
    closeOnOverlayClick,
    isDisabled,
    hoverRef,
    hoverProps,
    focusProps,
    onValueChange,
    value,
    setFocused,
    setValue,
    label,
    setLabel,
    onOpen,
    placeholder,
    isReadOnly,
    ...portalProps
  } = React.useContext(SelectContext);
  const tempFix = '__GluestackPlaceholder__';
  if (Platform.OS !== 'web') {
    return /*#__PURE__*/React.createElement(StyledSelectPortal, _extends({
      isOpen: isOpen,
      onClose: handleClose,
      closeOnOverlayClick: closeOnOverlayClick
    }, props, {
      ref: ref
    }), /*#__PURE__*/React.createElement(SelectPortalContext.Provider, {
      value: {
        isOpen,
        handleClose,
        closeOnOverlayClick,
        isDisabled,
        hoverRef,
        hoverProps,
        focusProps,
        setValue,
        value: value === null ? tempFix : value,
        setLabel,
        label,
        isReadOnly,
        setFocused,
        onValueChange,
        placeholder,
        ...portalProps
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("select", _extends({
    disabled: isDisabled || isReadOnly
  }, focusProps, hoverProps, {
    onChange: e => {
      onValueChange(e.target.value);
      setLabel(e.target.options[e.target.selectedIndex].text);
      handleClose();
    },
    onKeyDown: e => {
      if (e.code === 'Space') {
        onOpen && onOpen();
      }
    },
    ref: mergeRefs([ref, hoverRef]),
    value: value === undefined ? tempFix : value,
    "aria-label": placeholder,
    "aria-readonly": isReadOnly,
    style: StyleSheet.flatten([{
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0,
      zIndex: 1,
      cursor: isDisabled ? 'not-allowed' : 'pointer'
    }]),
    onClick: onOpen,
    onFocus: () => {
      setFocused(true);
    },
    onBlur: () => {
      setFocused(false);
    }
  }), /*#__PURE__*/React.createElement("option", {
    disabled: true,
    value: tempFix
  }, placeholder), children));
});
//# sourceMappingURL=SelectPortal.js.map
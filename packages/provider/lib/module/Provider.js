function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Platform } from 'react-native';
import { keyboardDismissHandlerManager } from '@react-native-aria/interactions';
export const CrossedContext = /*#__PURE__*/React.createContext({});
export const CrossedContextProvider = _ref => {
  let {
    children,
    components,
    ...props
  } = _ref;
  React.useEffect(() => {
    let escapeKeyListener = null;
    if (Platform.OS === 'web') {
      escapeKeyListener = e => {
        if (e.key === 'Escape') {
          if (keyboardDismissHandlerManager.length() > 0) {
            const lastHandler = keyboardDismissHandlerManager.pop();
            lastHandler();
          }
        }
      };
      document.addEventListener('keydown', escapeKeyListener);
    }
    return () => {
      if (Platform.OS === 'web') {
        document.removeEventListener('keydown', escapeKeyListener);
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(CrossedContext.Provider, _extends({
    value: components
  }, props), children);
};
export const Provider = _ref2 => {
  let {
    StyledProvider
  } = _ref2;
  return _ref3 => {
    let {
      children,
      components,
      config,
      ...props
    } = _ref3;
    return /*#__PURE__*/React.createElement(CrossedContextProvider, {
      components: components
    }, /*#__PURE__*/React.createElement(StyledProvider, _extends({
      config: config
    }, props), children));
  };
};
//# sourceMappingURL=Provider.js.map
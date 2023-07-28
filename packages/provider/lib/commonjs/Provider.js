"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.CrossedContextProvider = exports.CrossedContext = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _interactions = require("@react-native-aria/interactions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CrossedContext = /*#__PURE__*/_react.default.createContext({});
exports.CrossedContext = CrossedContext;
const CrossedContextProvider = _ref => {
  let {
    children,
    components,
    ...props
  } = _ref;
  _react.default.useEffect(() => {
    let escapeKeyListener = null;
    if (_reactNative.Platform.OS === 'web') {
      escapeKeyListener = e => {
        if (e.key === 'Escape') {
          if (_interactions.keyboardDismissHandlerManager.length() > 0) {
            const lastHandler = _interactions.keyboardDismissHandlerManager.pop();
            lastHandler();
          }
        }
      };
      document.addEventListener('keydown', escapeKeyListener);
    }
    return () => {
      if (_reactNative.Platform.OS === 'web') {
        document.removeEventListener('keydown', escapeKeyListener);
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(CrossedContext.Provider, _extends({
    value: components
  }, props), children);
};
exports.CrossedContextProvider = CrossedContextProvider;
const Provider = _ref2 => {
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
    return /*#__PURE__*/_react.default.createElement(CrossedContextProvider, {
      components: components
    }, /*#__PURE__*/_react.default.createElement(StyledProvider, _extends({
      config: config
    }, props), children));
  };
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map
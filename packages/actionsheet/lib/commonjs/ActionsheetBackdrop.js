"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _context = require("./context");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ActionsheetBackdrop(StyledActionsheetBackdrop, AnimatePresence) {
  return /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
    let {
      children,
      ...props
    } = _ref;
    const {
      closeOnOverlayClick,
      handleClose,
      backdropVisible
    } = _react.default.useContext(_context.ActionsheetContext);
    return /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
      visible: backdropVisible,
      AnimatePresence: AnimatePresence
    }, /*#__PURE__*/_react.default.createElement(StyledActionsheetBackdrop, _extends({
      ref: ref,
      onPress: () => {
        closeOnOverlayClick && handleClose();
      },
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      "aria-hidden": true
    }, props), children));
  });
}
var _default = ActionsheetBackdrop;
exports.default = _default;
//# sourceMappingURL=ActionsheetBackdrop.js.map
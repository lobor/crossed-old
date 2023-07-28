function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
export const FabIcon = StyledFabIcon => /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(StyledFabIcon, _extends({}, props, {
    ref: ref
  }));
});
//# sourceMappingURL=FabIcon.js.map
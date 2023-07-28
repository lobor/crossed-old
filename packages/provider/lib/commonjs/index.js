"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CrossedContext", {
  enumerable: true,
  get: function () {
    return _Provider.CrossedContext;
  }
});
Object.defineProperty(exports, "CrossedContextProvider", {
  enumerable: true,
  get: function () {
    return _Provider.CrossedContextProvider;
  }
});
exports.createProvider = void 0;
var _Provider = require("./Provider");
const createProvider = _ref => {
  let {
    StyledProvider
  } = _ref;
  const CrossedStyledProvider = (0, _Provider.Provider)({
    StyledProvider
  });
  CrossedStyledProvider.displayName = 'CrossedStyledProvider';
  return CrossedStyledProvider;
};
exports.createProvider = createProvider;
//# sourceMappingURL=index.js.map
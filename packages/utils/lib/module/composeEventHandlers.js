function composeEventHandlers(originalEventHandler, ourEventHandler) {
  return function handleEvent(event) {
    try {
      originalEventHandler == null ? void 0 : originalEventHandler(event);
      ourEventHandler == null ? void 0 : ourEventHandler(event);
    } catch (e) {
    }
  };
}
export {
  composeEventHandlers
};
//# sourceMappingURL=composeEventHandlers.js.map

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Popover_exports = {};
__export(Popover_exports, {
  Popover: () => Popover
});
module.exports = __toCommonJS(Popover_exports);
var import_react = __toESM(require("react"));
var import_hooks = require("@crossed/hooks");
var import_overlay = require("@crossed/overlay");
var import_PopoverContext = require("./PopoverContext");
const Popover = (StyledPopover) => (0, import_react.forwardRef)(
  ({
    onOpen,
    trigger,
    onClose,
    isOpen: isOpenProp,
    children,
    defaultIsOpen = false,
    initialFocusRef,
    finalFocusRef,
    useRNModal,
    trapFocus = true,
    placement = "bottom",
    shouldOverlapWithTrigger = false,
    crossOffset,
    offset,
    isKeyboardDismissable = true,
    shouldFlip,
    // @ts-ignore
    _experimentalOverlay = true,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = (0, import_hooks.useControllableState)({
      value: isOpenProp,
      defaultValue: defaultIsOpen,
      onChange: (value) => {
        value ? onOpen && onOpen() : onClose && onClose();
      }
    });
    const [bodyMounted, setBodyMounted] = import_react.default.useState(false);
    const [headerMounted, setHeaderMounted] = import_react.default.useState(false);
    var idCounter = 0;
    function uniqueId(prefix = "") {
      var id2 = ++idCounter;
      return prefix + id2;
    }
    const id = uniqueId();
    const popoverContentId = `${id}-content`;
    const headerId = `${popoverContentId}-header`;
    const bodyId = `${popoverContentId}-body`;
    const handleOpen = import_react.default.useCallback(() => {
      setIsOpen(true);
    }, [setIsOpen]);
    const handleClose = import_react.default.useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);
    const updatedTrigger = (reference) => {
      return trigger(
        {
          "ref": reference,
          "onPress": handleOpen,
          "aria-expanded": isOpen ? true : false,
          "aria-controls": isOpen ? popoverContentId : void 0,
          "aria-haspopup": true
        },
        { open: isOpen }
      );
    };
    const targetRef = import_react.default.useRef(null);
    const contextValue = import_react.default.useMemo(() => {
      return {
        targetRef,
        strategy: "absolute",
        handleClose,
        initialFocusRef,
        finalFocusRef,
        popoverContentId,
        bodyId,
        headerId,
        headerMounted,
        bodyMounted,
        setBodyMounted,
        setHeaderMounted,
        isOpen,
        placement,
        shouldOverlapWithTrigger,
        crossOffset,
        offset,
        trapFocus,
        shouldFlip
      };
    }, [
      targetRef,
      handleClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      bodyId,
      headerId,
      headerMounted,
      bodyMounted,
      setBodyMounted,
      setHeaderMounted,
      isOpen,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      trapFocus,
      shouldFlip
    ]);
    if (!_experimentalOverlay) {
      return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ import_react.default.createElement(import_PopoverContext.PopoverProvider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(StyledPopover, { ref, ...props }, children)));
    }
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ import_react.default.createElement(
      import_overlay.Overlay,
      {
        isOpen,
        onRequestClose: handleClose,
        isKeyboardDismissable,
        useRNModal,
        unmountOnExit: true
      },
      /* @__PURE__ */ import_react.default.createElement(import_PopoverContext.PopoverProvider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(StyledPopover, { ref, ...props }, children))
    ));
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Popover
});
//# sourceMappingURL=Popover.js.map

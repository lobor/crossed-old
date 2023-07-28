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
var import_react_native = require("react-native");
var import_PopoverContext = require("./PopoverContext");
var import_focus = require("@react-native-aria/focus");
var import_PopoverContent = require("./PopoverContent");
var import_MenuContext = require("../MenuContext");
const Popover = (0, import_react.forwardRef)(
  ({
    state,
    onOpen,
    trigger,
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
    triggerRef,
    AnimatePresence,
    shouldFlip,
    focusScope = true,
    StyledBackdrop,
    // @ts-ignore
    _experimentalOverlay = true,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = (0, import_hooks.useControllableState)({
      value: state == null ? void 0 : state.isOpen,
      defaultValue: defaultIsOpen,
      onChange: (value) => {
        value ? onOpen && onOpen() : state.close && state.close();
      }
    });
    const { onClose } = import_react.default.useContext(import_MenuContext.MenuContext);
    const [bodyMounted, setBodyMounted] = import_react.default.useState(false);
    const [headerMounted, setHeaderMounted] = import_react.default.useState(false);
    let idCounter = 0;
    function uniqueId(prefix = "") {
      const id2 = ++idCounter;
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
      if (trigger) {
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
      }
      return null;
    };
    const targetRefTemp = import_react.default.useRef(null);
    const targetRef = triggerRef || targetRefTemp;
    if (!_experimentalOverlay) {
      return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ import_react.default.createElement(
        import_PopoverContext.PopoverProvider,
        {
          value: {
            onClose: handleClose,
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
            shouldFlip
          }
        },
        /* @__PURE__ */ import_react.default.createElement(
          StyledBackdrop,
          {
            onPress: onClose,
            focusable: false,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { ref, ...props }, /* @__PURE__ */ import_react.default.createElement(
          FocusScopeComponent,
          {
            trapFocus,
            focusScope
          },
          /* @__PURE__ */ import_react.default.createElement(import_PopoverContent.PopoverContent, { AnimatePresence }, children)
        ))
      ));
    }
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ import_react.default.createElement(
      import_overlay.Overlay,
      {
        isOpen,
        onRequestClose: handleClose,
        isKeyboardDismissable: true,
        useRNModal,
        unmountOnExit: true
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_PopoverContext.PopoverProvider,
        {
          value: {
            onClose: handleClose,
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
            shouldFlip
          }
        },
        /* @__PURE__ */ import_react.default.createElement(
          StyledBackdrop,
          {
            onPress: onClose,
            focusable: false,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { ref, ...props }, /* @__PURE__ */ import_react.default.createElement(
          FocusScopeComponent,
          {
            trapFocus,
            focusScope
          },
          /* @__PURE__ */ import_react.default.createElement(import_PopoverContent.PopoverContent, { AnimatePresence }, children)
        ))
      )
    ));
  }
);
const FocusScopeComponent = ({ trapFocus, focusScope, children }) => {
  if (focusScope)
    return /* @__PURE__ */ import_react.default.createElement(import_focus.FocusScope, { contain: trapFocus, restoreFocus: true, autoFocus: true }, children);
  return children;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Popover
});
//# sourceMappingURL=Popover.js.map

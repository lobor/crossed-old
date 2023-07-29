import React, { forwardRef } from "react";
import { usePopoverContent } from "./PopoverContext";
const PopoverBody = (StyledPopoverBody) => forwardRef(({ children, ...props }, ref) => {
  const { value } = usePopoverContent("PopoverContext");
  const { setBodyMounted, bodyId } = value;
  React.useEffect(() => {
    if (setBodyMounted) {
      setBodyMounted(true);
      return () => {
        setBodyMounted(false);
      };
    } else {
      return () => {
      };
    }
  }, [setBodyMounted]);
  return /* @__PURE__ */ React.createElement(StyledPopoverBody, { nativeID: bodyId, ref, ...props }, children);
});
var PopoverBody_default = PopoverBody;
export {
  PopoverBody_default as default
};
//# sourceMappingURL=PopoverBody.js.map

import React, { forwardRef } from "react";
import { usePopoverContent } from "./PopoverContext";
const PopoverHeader = (StyledPopoverHeader) => forwardRef(({ children, ...props }, ref) => {
  const { value } = usePopoverContent("PopoverContext");
  const { setHeaderMounted, headerId } = value;
  React.useEffect(() => {
    if (setHeaderMounted) {
      setHeaderMounted(true);
      return () => {
        setHeaderMounted(false);
      };
    } else {
      return () => {
      };
    }
  }, [setHeaderMounted]);
  return /* @__PURE__ */ React.createElement(StyledPopoverHeader, { nativeID: headerId, ref, ...props }, children);
});
var PopoverHeader_default = PopoverHeader;
export {
  PopoverHeader_default as default
};
//# sourceMappingURL=PopoverHeader.js.map

import React, { forwardRef } from "react";
function ActionsheetFlatList(StyledActionsheetFlatList) {
  return forwardRef(
    ({ ...props }, ref) => {
      return /* @__PURE__ */ React.createElement(StyledActionsheetFlatList, { ref, ...props });
    }
  );
}
export {
  ActionsheetFlatList
};
//# sourceMappingURL=ActionsheetFlatList.js.map

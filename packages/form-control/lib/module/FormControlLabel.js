import React, { forwardRef } from "react";
import { combineContextAndProps } from "@crossed/utils";
import { useFormControlContext } from "./useFormControl";
import { mergeRefs } from "@crossed/utils";
const FormControlLabel = ({
  Label: StyledFormControlLabel,
  LabelAstrick: StyledFormControlLabelAstrick
}) => forwardRef(({ children, ...props }, ref) => {
  const formControlContext = useFormControlContext();
  const { isRequired, ...combinedProps } = combineContextAndProps(
    formControlContext,
    props
  );
  const _ref = React.useRef(null);
  const mergedRef = mergeRefs([_ref, ref]);
  React.useEffect(() => {
    if (_ref.current) {
      if (props.htmlFor) {
        _ref.current.htmlFor = props.htmlFor;
      } else if (combinedProps == null ? void 0 : combinedProps.nativeID) {
        _ref.current.htmlFor = combinedProps.nativeID;
      }
    }
  }, [combinedProps == null ? void 0 : combinedProps.nativeID, props.htmlFor]);
  return /* @__PURE__ */ React.createElement(
    StyledFormControlLabel,
    {
      ref: mergedRef,
      ...combinedProps,
      nativeID: combinedProps == null ? void 0 : combinedProps.labelId
    },
    children,
    isRequired && /* @__PURE__ */ React.createElement(StyledFormControlLabelAstrick, null, "*")
  );
});
var FormControlLabel_default = FormControlLabel;
export {
  FormControlLabel_default as default
};
//# sourceMappingURL=FormControlLabel.js.map

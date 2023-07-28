import React from "react";
import { ariaAttr } from "@crossed/utils";
const FormControlContext = React.createContext({});
function useFormControlProvider(props) {
  const {
    nativeID: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  var idCounter = 0;
  function uniqueId(prefix = "") {
    var id2 = ++idCounter;
    return prefix + id2;
  }
  const id = uniqueId();
  const nativeID = idProp || `field-${id}`;
  const labelId = `${nativeID}-label`;
  const feedbackId = `${nativeID}-feedback`;
  const helpTextId = `${nativeID}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = React.useState(false);
  const [hasHelpText, setHasHelpText] = React.useState(false);
  const context = {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    nativeID,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps
  };
  return context;
}
function useFormControl(props) {
  const field = useFormControlContext();
  const describedBy = [];
  if (field == null ? void 0 : field.hasFeedbackText)
    describedBy.push(field == null ? void 0 : field.feedbackId);
  if (field == null ? void 0 : field.hasHelpText)
    describedBy.push(field == null ? void 0 : field.helpTextId);
  const ariaDescribedBy = describedBy.join(" ");
  const { isInvalid, isDisabled, isReadOnly, isRequired, ...cleanProps } = props;
  let nativeID = props == null ? void 0 : props.nativeID;
  if (!nativeID && (field == null ? void 0 : field.nativeID)) {
    nativeID = `${field == null ? void 0 : field.nativeID}-input`;
  }
  return {
    ...cleanProps,
    nativeID,
    disabled: isDisabled || (field == null ? void 0 : field.isDisabled),
    readOnly: isReadOnly || (field == null ? void 0 : field.isReadOnly),
    required: isRequired || (field == null ? void 0 : field.isRequired),
    accessibilityInvalid: ariaAttr(isInvalid || (field == null ? void 0 : field.isInvalid)),
    accessibilityRequired: ariaAttr(isRequired || (field == null ? void 0 : field.isRequired)),
    accessibilityReadOnly: ariaAttr(isReadOnly || (field == null ? void 0 : field.isReadOnly)),
    accessibilityDescribedBy: ariaDescribedBy || void 0
  };
}
const useFormControlContext = () => {
  return React.useContext(FormControlContext);
};
export {
  FormControlContext,
  useFormControl,
  useFormControlContext,
  useFormControlProvider
};
//# sourceMappingURL=useFormControl.js.map

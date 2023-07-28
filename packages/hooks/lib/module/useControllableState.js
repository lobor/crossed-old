import React from "react";
function useControllableProp(prop, state) {
  const { current: isControlled } = React.useRef(prop !== void 0);
  const value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value];
}
function useControllableState(props) {
  const { value: valueProp, defaultValue, onChange } = props;
  const [valueState, setValue] = React.useState(defaultValue);
  const isControlled = valueProp !== void 0;
  const value = isControlled ? valueProp : valueState;
  const updateValue = React.useCallback(
    (next) => {
      const nextValue = typeof next === "function" ? next(value) : next;
      if (!isControlled) {
        setValue(nextValue);
      }
      onChange && onChange(nextValue);
    },
    [isControlled, onChange, value]
  );
  return [value, updateValue];
}
export {
  useControllableProp,
  useControllableState
};
//# sourceMappingURL=useControllableState.js.map

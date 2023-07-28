import { Platform } from "react-native";
const ITEM_ATTR = "data-key";
const getValue = (element) => element.getAttribute(ITEM_ATTR) ?? "";
const useTypeSelect = (state) => {
  if (Platform.OS !== "web")
    return;
  return {
    onKeyDownCapture(event) {
      if (event.key.length === 1 && !(event.ctrlKey || event.altKey || event.metaKey)) {
        const container = event.currentTarget;
        const values = Array.from(
          container.querySelectorAll(`[${ITEM_ATTR}]`)
        ).map(getValue);
        const searchKey = event.key;
        const foundValue = values.find(
          (value) => value.toLowerCase().startsWith(searchKey)
        );
        if (!state.disabledKeys.has(foundValue)) {
          foundValue && state.selectionManager.setFocusedKey(foundValue);
        }
      }
    }
  };
};
export {
  useTypeSelect
};
//# sourceMappingURL=useTypeSelect.js.map

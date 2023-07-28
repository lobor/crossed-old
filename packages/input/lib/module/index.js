import { InputIcon } from "./InputIcon";
import { InputGroup } from "./InputGroup";
import { Input as InputMain } from "./Input";
const createInput = ({
  Root,
  Icon,
  Input
}) => {
  const InputField = InputGroup(Root);
  InputField.Icon = InputIcon(Icon);
  InputField.Input = InputMain(Input);
  InputField.displayName = "InputField";
  InputField.Icon.displayName = "InputField.Icon";
  InputField.Input.displayName = "InputField.Input";
  return InputField;
};
export {
  createInput
};
//# sourceMappingURL=index.js.map

import { Button as ButtonMain } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { ButtonText } from "./ButtonText";
import { ButtonSpinner } from "./ButtonSpinner";
import { ButtonIcon } from "./ButtonIcon";
function createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon
}) {
  const Button = ButtonMain(Root);
  Button.Text = ButtonText(Text);
  Button.Group = ButtonGroup(Group, GroupHSpacer, GroupVSpacer);
  Button.Spinner = ButtonSpinner(Spinner);
  Button.Icon = ButtonIcon(Icon);
  Button.displayName = "Button";
  Button.Text.displayName = "Button.Text";
  Button.Group.displayName = "Button.Group";
  Button.Spinner.displayName = "Button.Spinner";
  Button.Icon.displayName = "Button.Icon";
  return Button;
}
export {
  createButton
};
//# sourceMappingURL=index.js.map

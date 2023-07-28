import { TooltipContent } from "./TooltipContent";
import { TooltipText } from "./TooltipText";
import { Tooltip as TooltipMain } from "./Tooltip";
function createTooltip({
  Text,
  Root,
  Content,
  AnimatePresence
}) {
  const Tooltip = TooltipMain(Root);
  Tooltip.Content = TooltipContent(Content, AnimatePresence);
  Tooltip.Text = TooltipText(Text);
  Tooltip.displayName = "Tooltip";
  Tooltip.Content.displayName = "Tooltip.Content";
  Tooltip.Text.displayName = "Tooltip.Text";
  return Tooltip;
}
export {
  createTooltip
};
//# sourceMappingURL=index.js.map

import { Textarea } from "./Textarea";
import { TextareaRoot } from "./TextareaRoot";
function createTextArea({
  Root,
  Input
}) {
  const TextareaTemp = TextareaRoot(Root);
  TextareaTemp.Input = Textarea(Input);
  TextareaTemp.displayName = "Textarea";
  TextareaTemp.Input.displayName = "Textarea.Input";
  return TextareaTemp;
}
function createTextarea({
  Root,
  Input
}) {
  const TextareaTemp = TextareaRoot(Root);
  TextareaTemp.Input = Textarea(Input);
  TextareaTemp.displayName = "Textarea";
  TextareaTemp.Input.displayName = "Textarea.Input";
  return TextareaTemp;
}
export {
  createTextArea,
  createTextarea
};
//# sourceMappingURL=index.js.map
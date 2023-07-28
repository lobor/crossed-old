import { Progress as ProgressMain } from "./Progress";
import { ProgressFilledTrack } from "./ProgressFilledTrack";
function createProgress({
  Root,
  FilledTrack
}) {
  const Progress = ProgressMain(Root);
  Progress.FilledTrack = ProgressFilledTrack(FilledTrack);
  Progress.displayName = "Progress";
  Progress.FilledTrack.displayName = "Progress.FilledTrack";
  return Progress;
}
export {
  createProgress
};
//# sourceMappingURL=index.js.map

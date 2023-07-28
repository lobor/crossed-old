import SliderMain from "./Slider";
import SliderThumb from "./SliderThumb";
import SliderTrack from "./SliderTrack";
import SliderFilledTrack from "./SliderFilledTrack";
import { SliderContext } from "./Context";
function createSlider({
  Root,
  ThumbInteraction,
  Thumb,
  Track,
  FilledTrack
}) {
  const Slider = SliderMain(Root);
  Slider.Thumb = SliderThumb(Thumb, ThumbInteraction);
  Slider.Track = SliderTrack(Track);
  Slider.FilledTrack = SliderFilledTrack(FilledTrack);
  Slider.displayName = "Slider";
  Slider.Thumb.displayName = "Slider.Thumb";
  Slider.Track.displayName = "Slider.Track";
  Slider.FilledTrack.displayName = "Slider.FilledTrack";
  return Slider;
}
export {
  SliderContext,
  createSlider
};
//# sourceMappingURL=index.js.map

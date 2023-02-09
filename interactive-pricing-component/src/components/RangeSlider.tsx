import React, { FC } from "react";
import "../styles.scss";

interface RangeSliderProps {
  sliderRef: React.MutableRefObject<HTMLInputElement | null>;
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeSlider: FC<RangeSliderProps> = ({
  sliderRef,
  sliderValue,
  setSliderValue,
}) => {
  if (sliderRef.current != null) {
    const input = sliderRef.current;

    const value = Number(input.value);
    const min = Number(input.min);
    const max = Number(input.max);

    let progress = ((value - min) / (max - min)) * 100;

    input.style.background =
      "linear-gradient(to right, #A4F3EB 0%, #A4F3EB " +
      progress +
      "%, #ECF0FB " +
      value +
      "%, #ECF0FB 100%)";
  }

  return (
    <input
      onChange={() => {
        if (sliderRef.current != null) {
          const value = Number(sliderRef.current["value"]);
          setSliderValue(value);
        }
      }}
      type="range"
      value={sliderValue}
      min="2"
      max="32"
      step="2"
      ref={sliderRef}
    />
  );
};

export default RangeSlider;

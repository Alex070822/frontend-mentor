import React, { FC } from "react";
import variables from "../styles.scss";

interface RangeSliderProps {
  sliderRef: React.MutableRefObject<HTMLInputElement | null>;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeSlider: FC<RangeSliderProps> = ({ sliderRef, value, setValue }) => {
  if (sliderRef.current != null) {
    const input = sliderRef.current;

    const value = Number(input.value);
    const min = Number(input.min);
    const max = Number(input.max);

    let progress = ((value - min) / (max - min)) * 100;

    input.style.background =
      `linear-gradient(to right, ${variables.colorCyan5} 0%, ${variables.colorCyan5} ` +
      progress +
      `%, ${variables.colorBlue5} ` +
      value +
      `%, ${variables.colorBlue5} 100%)`;
  }

  return (
    <input
      onChange={() => {
        if (sliderRef.current != null) {
          const value = Number(sliderRef.current["value"]);
          setValue(value);
        }
      }}
      type="range"
      value={value}
      min="2"
      max="32"
      step="2"
      ref={sliderRef}
      aria-label="Price Slider"
    />
  );
};

export default RangeSlider;

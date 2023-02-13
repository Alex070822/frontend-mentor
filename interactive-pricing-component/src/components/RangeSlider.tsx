import React, { FC } from "react";
import variables from "../styles.scss";

interface RangeSliderProps {
  ref: React.MutableRefObject<HTMLInputElement | null>;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeSlider: FC<RangeSliderProps> = ({
  ref,
  value,
  setValue,
}) => {
  if (ref.current != null) {
    const input = ref.current;

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
        if (ref.current != null) {
          const value = Number(ref.current["value"]);
          setValue(value);
        }
      }}
      type="range"
      value={value}
      min="2"
      max="32"
      step="2"
      ref={ref}
    />
  );
};

export default RangeSlider;

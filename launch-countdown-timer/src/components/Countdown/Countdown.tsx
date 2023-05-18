import { css } from "@emotion/css";
import React, { FC } from "react";
import { TimeLeft } from "../index";
import { widthBreakpoint } from "../shared";

const counterContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 15px;
  justify-content: center;
  padding: 0 6.2%;
  margin-top: 54px;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    column-gap: 32px;
    padding: 0;
    margin-top: 104px;
  }
`;
const counterCss = css`
  width: 70px;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    width: 148px;
  }
`;
const cardBackgroundCss = css`
  background: #191a23;
  border-radius: 8px;
  height: 71px;
  width: 70px;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    height: 150px;
    width: 148px;
  }
`;
const cardCss = css`
  font-size: 36px;
  width: 70px;
  background: #343650;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    font-size: 80px;
    border-radius: 8px;
    height: 140px;
    width: 148px;
  }
`;
const leftCardHoleCss = css`
  position: absolute;
  left: -3px;
  top: 30px;
  background: #191a23;
  height: 6px;
  width: 6px;
  border-radius: 3px;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    left: -6px;
    top: 64px;
    height: 12px;
    width: 12px;
    border-radius: 6px;
  }
`;
const rightCardHoleCss = css`
  position: absolute;
  right: -3px;
  top: 30px;
  background: #191a23;
  height: 6px;
  width: 6px;
  border-radius: 3px;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    right: -6px;
    top: 64px;
    height: 12px;
    width: 12px;
    border-radius: 6px;
  }
`;
const topTransparencyCss = css`
  position: absolute;
  color: #fb5e84;
  background: #000000;
  width: 100%;
  height: 33px;
  opacity: 0.15;
  border-radius: 4px 4px 0 0;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    height: 70px;
    border-radius: 8px 8px 0 0;
  }
`;
const cardTopCss = css`
  display: flex;
  justify-content: center;
  color: #fb5e84;
  height: 33px;
  line-height: 0.75;
  position: relative;
  overflow: hidden;
  padding-top: 20px;

  &::before {
    position: absolute;
    content: attr(data-value);
    animation: flip-top 250ms ease-in;
    transform-origin: bottom;
    @keyframes flip-top {
      100% {
        transform: rotateX(90deg);
      }
    }
  }

  @media (min-width: ${widthBreakpoint.desktop}px) {
    height: 70px;
    padding-top: 38px;
  }
`;
const dividerCss = css`
  position: absolute;
  background: #000000;
  height: 0.47px;
  width: 100%;
  opacity: 0.25;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    height: 1px;
  }
`;
const cardBottomCss = css`
  display: flex;
  justify-content: center;
  color: #fb5e84;
  height: 33px;
  line-height: 0.75;
  position: relative;
  overflow: hidden;
  align-items: flex-end;
  padding-bottom: 19px;

  &::after {
    position: absolute;
    content: attr(data-value);
    animation: flip-bottom 250ms ease-out 250ms;
    transform-origin: top;
    transform: rotateX(90deg);
    @keyframes flip-bottom {
      100% {
        transform: rotateX(0deg);
      }
    }
  }

  @media (min-width: ${widthBreakpoint.desktop}px) {
    height: 70px;
    padding-bottom: 42px;
  }
`;
const timeTagCss = css`
  font-size: 7px;
  color: #8385a9;
  line-height: 9px;
  letter-spacing: 2.95937px;
  text-align: center;
  margin-top: 9px;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    font-size: 14px;
    letter-spacing: 5.91875px;
    margin-top: 16px;
  }
`;

interface CountdownProps {
  timeLeft: TimeLeft;
}

const Countdown: FC<CountdownProps> = ({
  timeLeft: { days, hours, minutes, seconds },
}: CountdownProps) => {
  const counters = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: hours },
    { label: "MINUTES", value: minutes },
    { label: "SECONDS", value: seconds },
  ];

  return (
    <div className={counterContainerCss}>
      {counters.map(({ label, value }) => (
        <div className={counterCss} key={label}>
          <div className={cardBackgroundCss}>
            <div className={cardCss}>
              <div className={leftCardHoleCss}></div>
              <div className={rightCardHoleCss}></div>
              <div className={topTransparencyCss}></div>
              <div
                className={cardTopCss}
                key={value}
                style={{ "--value": value } as React.CSSProperties}
                data-value={value}
              ></div>
              <div className={dividerCss}></div>
              <div
                className={cardBottomCss}
                key={value + "bottom"}
                style={{ "--value": value } as React.CSSProperties}
                data-value={value}
              >
                {value}
              </div>
            </div>
          </div>
          <div className={timeTagCss}>{label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

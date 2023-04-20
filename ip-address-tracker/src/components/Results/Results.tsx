import { css } from "@emotion/css";
import { FC } from "react";
import { widthBreakpoint } from "../shared";

const resultsContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: #ffffff;
  width: 87.201%;
  border-radius: 15px;
  margin-top: 167px;
  padding: 26px 24px 0 24px;
  z-index: 2;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    flex-direction: row;
    column-gap: 64px;
    justify-content: center;
    height: 161px;
    max-width: 1110px;
    margin-top: 200px;
    padding: 37px 32px 0 32px;
  }
`;
const resultCss = css`
  text-align: center;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    width: 213px;
  }
`;
const resultTitleCss = css`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.45833px;
  margin-bottom: 7px;
  opacity: 0.5;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    font-size: 12px;
    margin-bottom: 13px;
  }
`;
const resultInfoCss = css`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.178571px;
  margin-bottom: 24px;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    font-size: 26px;
  }
`;

interface IpAddressProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

const Results: FC<IpAddressProps> = ({ ip, location, timezone, isp }) => {
  return (
    <div className={resultsContainerCss}>
      <div className={resultCss}>
        <div className={resultTitleCss}>IP Address</div>
        <div className={resultInfoCss}>{ip}</div>
      </div>
      <div className={resultCss}>
        <div className={resultTitleCss}>Location</div>
        <div className={resultInfoCss}>{location}</div>
      </div>
      <div className={resultCss}>
        <div className={resultTitleCss}>Timezone</div>
        <div className={resultInfoCss}>UTC {timezone}</div>
      </div>
      <div className={resultCss}>
        <div className={resultTitleCss}>ISP</div>
        <div className={resultInfoCss}>{isp}</div>
      </div>
    </div>
  );
};

export default Results;

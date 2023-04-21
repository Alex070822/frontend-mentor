import React from "react";
import { css } from "@emotion/css";
import { FC } from "react";
import { widthBreakpoint } from "../shared";
import { Tooltip } from "react-tooltip";

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
    height: 161px;
    max-width: 1110px;
    margin-top: 200px;
    padding: 0 32px 0 32px;
  }
`;
const resultCss = css`
  text-align: center;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    width: 213px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const resultDividerCss = css`
  display: none;

  @media (min-width: ${widthBreakpoint.desktop}px) {
    display: block;
    color: #000000;
    opacity: 0.15;
    width: 1px;
    height: 75px;
    margin: 0 32px 0 32px;

    &:last-child {
      display: none;
    }
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
      {[
        { title: "IP Address", info: ip, tooltipId: "resultInfoIp" },
        { title: "Location", info: location, tooltipId: "resultInfoLocation" },
        {
          title: "Timezone",
          info: `UTC ${timezone}`,
          tooltipId: "resultInfoTimezone",
        },
        { title: "ISP", info: isp, tooltipId: "resultInfoIsp" },
      ].map((result, index) => (
        <React.Fragment key={index}>
          <div className={resultCss}>
            <div className={resultTitleCss}>{result.title}</div>
            <div className={resultInfoCss} data-tooltip-id={result.tooltipId}>
              {result.info}
            </div>
            <Tooltip
              id={result.tooltipId}
              place="bottom"
              style={{ opacity: 0.7 }}
            >
              {result.info}
            </Tooltip>
          </div>
          <hr className={resultDividerCss} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Results;

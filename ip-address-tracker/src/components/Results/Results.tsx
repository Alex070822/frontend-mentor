import { css } from "@emotion/css";
import { IpAddressData } from "../index";
import { FC } from "react";

const resultsContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 87.201%;
  border-radius: 15px;
  padding: 26px 24px 0 24px;
`;
const resultCss = css`
  text-align: center;
`;
const resultTitleCss = css`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.45833px;
  margin-bottom: 7px;
  opacity: 0.5;
`;
const resultInfoCss = css`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.178571px;
  margin-bottom: 24px;
`;

interface ipAddressProps {
  ipData: IpAddressData;
}

const Results: FC<ipAddressProps> = ({
  ipData: {
    ip,
    location: { city, country, postalCode, timezone },
    isp,
  },
}: ipAddressProps) => {
  return (
    <div className={resultsContainerCss}>
      <div className={resultCss}>
        <div className={resultTitleCss}>IP Address</div>
        <div className={resultInfoCss}>{ip}</div>
      </div>
      <div className={resultCss}>
        <div className={resultTitleCss}>Location</div>
        <div
          className={resultInfoCss}
        >{`${city}, ${country} ${postalCode}`}</div>
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

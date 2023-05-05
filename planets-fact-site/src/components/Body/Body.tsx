import React, { FC } from "react";
import { SummaryType, Planet } from "../index";
import { cx, css } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import { colors } from "../theme/theme";

const mainCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    display: grid;
    grid-template-columns: 64.236111% auto;
    grid-auto-rows: minmax(100px, auto);
  }
`;
const mainInfoMenuCss = css`
  display: flex;
  height: 52px;
  width: 100%;
  justify-content: space-between;
  padding: 0 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: ${widthBreakpoint.tablet}px) {
    order: 3;
    flex-direction: column;
    row-gap: 16px;
    height: auto;
    width: 36.5885416%;
    border-top: none;
    border-bottom: none;
    padding: 0;
    margin: 0 5.2083333% 0 auto;
    counter-reset: section;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    margin: 0 0 auto 0;
    padding-right: 165px;
  }
`;
const mainInfoMenuBtnCss = css`
  display: flex;
  background: none;
  color: rgba(255, 255, 255, 0.4980392157);
  border: none;
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  width: 80px;
  cursor: pointer;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    justify-content: left;
    flex-wrap: wrap;
    color: #ffffff;
    height: auto;
    width: 100%;
    letter-spacing: 1.92857px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 14px 0 14px 20px;
    &:hover {
      background-color: rgba(216, 216, 216, 0.2);
    }
    &::before {
      counter-increment: section;
      content: counter(section, decimal-leading-zero);
      color: rgba(255, 255, 255, 0.4980392157);
      margin-right: 14px;
    }
  }
`;
const planetCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 304px;
  padding: 0 0 3px 0;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    order: 1;
    height: 460px;
    padding: 16px 0 0 0;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    grid-column: 1;
    grid-row: 1/3;
    height: 754px;
    padding: 20px 0 0 0;
  }
`;
const planetImgCss = css`
  transform: scale(0.38275);

  @media (min-width: ${widthBreakpoint.tablet}px) {
    transform: scale(0.63448);
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    transform: scale(1);
  }
`;
const planetImgGeologyCss = css`
  position: absolute;
  aspect-ratio: 0.81909;
  width: 11.3194444%;
  margin-top: 25%;
  z-index: 1;

  @media (min-width: ${widthBreakpoint.large}px) {
    width: 163px;
    margin-top: 360px;
  }
`;
const hiddenPlanetImgGeologyCss = css`
  display: none;
`;
const generalInfoCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 87.2%;
  margin-bottom: 28px;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    order: 2;
    align-items: flex-start;
    height: auto;
    width: 44.140625%;
    margin: 0 0 27px 5.2083333%;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    grid-column: 2;
    grid-row: 1;
    width: 100%;
    margin: auto 0 0 0;
    padding-right: 165px;
  }
`;
const generalInfoNameCss = css`
  font-weight: 400;
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    font-size: 48px;
    margin-bottom: 24px;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    font-size: 80px;
    margin-bottom: 23px;
  }
`;
const generalInfoSummaryCss = css`
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  line-height: 22px;
  margin-bottom: 32px;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    text-align: left;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;
  }
`;
const generalInfoSourceCss = css`
  display: flex;
  color: rgba(255, 255, 255, 0.4980392157);
  font-family: "League Spartan", sans-serif;
  font-size: 15px;
  line-height: 25px;
  align-items: center;
  justify-content: center;

  @media (min-width: ${widthBreakpoint.laptop}px) {
    font-size: 17px;
    margin-bottom: 39px;
  }
`;
const generalInfoSourceTitleCss = css`
  font-weight: 400;
`;
const generalInfoSourceLinkCss = css`
  color: rgba(255, 255, 255, 0.4980392157);
  font-weight: 700;
  margin-right: 4px;
`;
const generalInfoSourceIconCss = css`
  height: 12px;
  width: 12px;
  align-self: flex-end;
  margin: auto;
`;
const detailsCss = css`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  row-gap: 8px;
  width: 100%;
  margin-bottom: 28px;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    order: 4;
    flex-direction: row;
    column-gap: 11px;
    height: 88px;
    justify-content: center;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    grid-column: 1/3;
    grid-row: 3;
    column-gap: 30px;
    padding: 0 165px;
  }
`;
const detailsItemCss = css`
  display: flex;
  width: 87.2%;
  height: 48px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 24px;
  margin: 0 auto;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    flex-direction: column;
    height: 100%;
    width: 21.356%;
    align-items: flex-start;
    justify-content: center;
    padding: 0 0 0 1.954%;
    margin: 0;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    height: 128px;
    width: 100%;
    padding: 0 0 0 23px;
  }
`;
const detailsItemTitleCss = css`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4980392157);
  letter-spacing: 0.727273px;

  @media (min-width: ${widthBreakpoint.laptop}px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;
const detailsItemDataCss = css`
  font-weight: 400;
  font-size: 20px;
  margin: 0 0 0 auto;

  @media (min-width: ${widthBreakpoint.tablet}px) {
    font-size: 24px;
    margin: 0;
  }

  @media (min-width: ${widthBreakpoint.laptop}px) {
    font-size: 40px;
  }
`;

interface PlanetProps {
  planet: Planet;
  selectedSummaryType: SummaryType;
  setSelectedSummaryType: React.Dispatch<React.SetStateAction<SummaryType>>;
}

const Body: FC<PlanetProps> = ({
  planet: {
    name,
    rotation,
    revolution,
    radius,
    temperature,
    images,
    accentColor,
    summary: { content, source },
  },
  selectedSummaryType,
  setSelectedSummaryType,
}: PlanetProps) => {
  const reqSvgs = require.context("../../assets", true, /\.svg$/);
  const paths = reqSvgs.keys();
  console.log(paths);

  const imgTitles = {
    overview: "planet",
    structure: "internal",
    geology: "planet",
  };
  const imgPath = images[imgTitles[selectedSummaryType]].replace(
    "./assets/",
    "./"
  );

  const sourceIcon = require("../../assets/icon-source.svg").default;

  const tabs: Array<{
    value: SummaryType;
    label: string;
  }> = [
    { value: "overview", label: "Overview" },
    { value: "structure", label: "Structure" },
    { value: "geology", label: "Geology" },
  ];

  const detailsData = [
    { label: "Rotation Time", value: rotation },
    { label: "Revolution Time", value: revolution },
    { label: "Radius", value: radius },
    { label: "Average Temp", value: temperature },
  ];

  return (
    <main className={mainCss}>
      <div className={mainInfoMenuCss}>
        {tabs.map(({ value, label }) => (
          <button
            key={value}
            className={cx(
              css`
                @media (max-width: ${widthBreakpoint.tablet}px) {
                  border-bottom-color: ${accentColor};
                }
              `,
              selectedSummaryType === value
                ? cx(
                    mainInfoMenuBtnCss,
                    css`
                      color: #ffffff;
                      border-bottom: 4px solid red;
                      border-top: 4px solid transparent;

                      @media (min-width: ${widthBreakpoint.tablet}px) {
                        background: ${colors[name.toLowerCase()]};
                      }
                    `
                  )
                : mainInfoMenuBtnCss
            )}
            onClick={() => setSelectedSummaryType(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={planetCss}>
        <img src={reqSvgs(`${imgPath}`)} alt={name} className={planetImgCss} />
        <img
          src={require(`../../assets/geology-${name.toLowerCase()}.png`)}
          alt={`geology ${name}`}
          className={`${
            selectedSummaryType === "geology"
              ? planetImgGeologyCss
              : hiddenPlanetImgGeologyCss
          }`}
        />
      </div>
      <div className={generalInfoCss}>
        <h1 className={generalInfoNameCss}>{name}</h1>
        <p className={generalInfoSummaryCss}>{content}</p>
        <div className={generalInfoSourceCss}>
          <div className={generalInfoSourceTitleCss}>Source :&nbsp;</div>
          <a
            className={generalInfoSourceLinkCss}
            href={source}
            target="_blank"
            rel="noreferrer noopener"
          >
            Wikipedia
          </a>
          <img
            src={sourceIcon}
            alt="source icon"
            className={generalInfoSourceIconCss}
          />
        </div>
      </div>
      <div className={detailsCss}>
        {detailsData.map((detail, index) => (
          <div className={detailsItemCss} key={index}>
            <div className={detailsItemTitleCss}>{detail.label}</div>
            <div className={detailsItemDataCss}>{detail.value}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Body;

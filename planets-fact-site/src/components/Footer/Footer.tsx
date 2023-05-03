import React, { FC } from "react";
import { css } from "@emotion/css";
import { widthBreakpoint } from "../shared";
import { Planet } from "../index";
import { colors } from "../theme/theme";

const attributionCss = css`
  margin: 0 auto 14px auto;
  text-align: center;
  font-size: 15px;
  width: 87.2%;

  @media (min-width: ${widthBreakpoint.mobile}px) {
    font-size: 19px;
  }

  @media (min-width: ${widthBreakpoint.web}px) {
    margin: 56px auto 14px auto;
  }
`;

interface FooterProps {
  planet: Planet;
}

const Footer: FC<FooterProps> = ({ planet: { name } }: FooterProps) => {
  return (
    <footer>
      <div className={attributionCss}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f"
          target="_blank"
          rel="noreferrer noopener"
          className={css`
            color: ${colors[name.toLowerCase()]};
          `}
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/alexis-glez-h"
          target="_blank"
          rel="noreferrer noopener"
          className={css`
            color: ${colors[name.toLowerCase()]};
          `}
        >
          Alexis González
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;

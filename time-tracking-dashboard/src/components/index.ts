import variables from "../styles.scss";

export type Period = "DAILY" | "WEEKLY" | "MONTHLY";

interface HoursStats {
  current: number;
  previous: number;
}

export interface Timeframes {
  daily: HoursStats;
  weekly: HoursStats;
  monthly: HoursStats;
}

interface RowActivity {
  title: string;
  timeframes: Timeframes;
}

interface Activity extends RowActivity {
  bgColor: string;
  bgImg: string;
}

export function mapActivity(rowActivity: RowActivity): Activity {
  switch (rowActivity.title) {
    case "Work":
      return {
        ...rowActivity,
        bgColor: `${variables.colorOrange1}`,
        bgImg: "icon-work.svg",
      };
    case "Play":
      return {
        ...rowActivity,
        bgColor: `${variables.colorCyan1}`,
        bgImg: "icon-play.svg",
      };
    case "Study":
      return {
        ...rowActivity,
        bgColor: `${variables.colorPink1}`,
        bgImg: "icon-study.svg",
      };
    case "Exercise":
      return {
        ...rowActivity,
        bgColor: `${variables.colorGreen1}`,
        bgImg: "icon-exercise.svg",
      };
    case "Social":
      return {
        ...rowActivity,
        bgColor: `${variables.colorMagenta1}`,
        bgImg: "icon-social.svg",
      };
    case "Self Care":
      return {
        ...rowActivity,
        bgColor: `${variables.colorYellow1}`,
        bgImg: "icon-self-care.svg",
      };
    default:
      return {
        ...rowActivity,
        bgColor: `${variables.colorOrange1}`,
        bgImg: "",
      };
  }
}

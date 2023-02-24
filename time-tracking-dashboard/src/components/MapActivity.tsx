import variables from "../styles.scss";

interface Daily {
  current: number;
  previous: number;
}

interface Weekly {
  current: number;
  previous: number;
}

interface Monthly {
  current: number;
  previous: number;
}

interface Timeframes {
  daily: Daily;
  weekly: Weekly;
  monthly: Monthly;
}

interface RowActivity {
  title: string;
  timeframes: Timeframes;
}

interface Activity extends RowActivity {
  bgColor: string;
  bgImg: string;
}

function MapActivity(rowActivity: RowActivity): Activity {
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

export default MapActivity;

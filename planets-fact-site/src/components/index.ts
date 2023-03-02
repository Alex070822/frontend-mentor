import variables from "../styles.scss";

interface SummaryData {
  content: string;
  source: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
}

interface PlanetProps {
  name: string;
  overview: SummaryData;
  structure: SummaryData;
  geology: SummaryData;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}

interface Activity extends PlanetProps {
  accentColor: string;
}

export function mapActivity(planetProps: PlanetProps): Activity {
  switch (planetProps.name) {
    case "Mercury":
      return {
        ...planetProps,
        accentColor: `${variables.colorMercury}`,
      };
    case "Venus":
      return {
        ...planetProps,
        accentColor: `${variables.colorVenus}`,
      };
    case "Earth":
      return {
        ...planetProps,
        accentColor: `${variables.colorEarth}`,
      };
    case "Mars":
      return {
        ...planetProps,
        accentColor: `${variables.colorMars}`,
      };
    case "Jupiter":
      return {
        ...planetProps,
        accentColor: `${variables.colorJupiter}`,
      };
    case "Saturn":
      return {
        ...planetProps,
        accentColor: `${variables.colorSaturn}`,
      };
    case "Uranus":
      return {
        ...planetProps,
        accentColor: `${variables.colorUranus}`,
      };
    case "Neptune":
      return {
        ...planetProps,
        accentColor: `${variables.colorNeptune}`,
      };
    default:
      return {
        ...planetProps,
        accentColor: "",
      };
  }
}

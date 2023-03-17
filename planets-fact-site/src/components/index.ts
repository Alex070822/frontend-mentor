import variables from "../styles.scss";
import { colors } from "./theme/theme";

export type SummaryType = "overview" | "structure" | "geology";

interface SummaryData {
  content: string;
  source: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
}

interface BasePlanet {
  name: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}

interface PlanetRaw extends BasePlanet {
  overview: SummaryData;
  structure: SummaryData;
  geology: SummaryData;
}

export interface Planet extends BasePlanet {
  accentColor: string;
  summary: SummaryData;
}

export function mapPlanet(
  summaryType: SummaryType,
  planetRaw?: PlanetRaw
): Planet | undefined {
  if (!planetRaw) {
    return undefined;
  }

  const { overview, structure, geology, ...basePlanet } = planetRaw;

  const planet = {
    ...basePlanet,
    summary: planetRaw[summaryType as SummaryType],
  };

  switch (planetRaw.name) {
    case "Mercury":
      return {
        ...planet,
        accentColor: colors.mercury,
      };
    case "Venus":
      return {
        ...planet,
        accentColor: `${variables.colorVenus}`,
      };
    case "Earth":
      return {
        ...planet,
        accentColor: `${variables.colorEarth}`,
      };
    case "Mars":
      return {
        ...planet,
        accentColor: `${variables.colorMars}`,
      };
    case "Jupiter":
      return {
        ...planet,
        accentColor: `${variables.colorJupiter}`,
      };
    case "Saturn":
      return {
        ...planet,
        accentColor: `${variables.colorSaturn}`,
      };
    case "Uranus":
      return {
        ...planet,
        accentColor: `${variables.colorUranus}`,
      };
    case "Neptune":
      return {
        ...planet,
        accentColor: `${variables.colorNeptune}`,
      };
    default:
      return {
        ...planet,
        accentColor: "",
      };
  }
}

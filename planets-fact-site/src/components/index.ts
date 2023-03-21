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
        accentColor: colors.venus,
      };
    case "Earth":
      return {
        ...planet,
        accentColor: colors.earth,
      };
    case "Mars":
      return {
        ...planet,
        accentColor: colors.mars,
      };
    case "Jupiter":
      return {
        ...planet,
        accentColor: colors.jupiter,
      };
    case "Saturn":
      return {
        ...planet,
        accentColor: colors.saturn,
      };
    case "Uranus":
      return {
        ...planet,
        accentColor: colors.uranus,
      };
    case "Neptune":
      return {
        ...planet,
        accentColor: colors.neptune,
      };
    default:
      return {
        ...planet,
        accentColor: "",
      };
  }
}

import variables from "../styles.scss";

export type Characteristics = "OVERVIEW" | "STRUCTURE" | "GEOLOGY";

export interface SummaryData {
  content: string;
  source: string;
}

export interface PlanetInfo {
  overview: SummaryData;
  structure: SummaryData;
  geology: SummaryData;
}

export interface Images {
  planet: string;
  internal: string;
  geology: string;
}

export interface PlanetRaw {
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

interface Planet extends PlanetRaw {
  accentColor: string;
}

export function mapPlanet(planetRaw?: PlanetRaw): Planet | undefined {
  if (!planetRaw) {
    return undefined;
  }

  switch (planetRaw.name) {
    case "Mercury":
      return {
        ...planetRaw,
        accentColor: `${variables.colorMercury}`,
      };
    case "Venus":
      return {
        ...planetRaw,
        accentColor: `${variables.colorVenus}`,
      };
    case "Earth":
      return {
        ...planetRaw,
        accentColor: `${variables.colorEarth}`,
      };
    case "Mars":
      return {
        ...planetRaw,
        accentColor: `${variables.colorMars}`,
      };
    case "Jupiter":
      return {
        ...planetRaw,
        accentColor: `${variables.colorJupiter}`,
      };
    case "Saturn":
      return {
        ...planetRaw,
        accentColor: `${variables.colorSaturn}`,
      };
    case "Uranus":
      return {
        ...planetRaw,
        accentColor: `${variables.colorUranus}`,
      };
    case "Neptune":
      return {
        ...planetRaw,
        accentColor: `${variables.colorNeptune}`,
      };
    default:
      return {
        ...planetRaw,
        accentColor: "",
      };
  }
}

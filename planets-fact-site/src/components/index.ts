interface SummaryData {
  content: string;
  source: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
}

export interface Planets {
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

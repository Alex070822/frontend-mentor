interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

export interface IpAddress {
  ip: string;
  location: Location;
  domains: string[];
  as: As;
  isp: string;
}


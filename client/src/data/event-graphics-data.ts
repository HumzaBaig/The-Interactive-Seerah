export interface EventGraphic {
  id: string;
  title: string;
  description: string;
  route: string;
  available: boolean;
}

export const eventGraphicsData: EventGraphic[] = [
  {
    id: "isra-miraj",
    title: "Al-Isra wal Mi'raj",
    description: "The Night Journey and Ascension to the Heavens",
    route: "/events/isra-miraj",
    available: true
  }
];

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
  },
  {
    id: "hijrah",
    title: "The Hijrah",
    description: "The Migration from Makkah to Madinah",
    route: "/events/hijrah",
    available: true
  },
  {
    id: "battle-of-badr",
    title: "Battle of Badr",
    description: "The First Major Battle - Victory Against All Odds",
    route: "/events/battle-of-badr",
    available: true
  }
];

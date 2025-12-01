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
  },
  {
    id: "battle-of-uhud",
    title: "Battle of Uhud",
    description: "A Lesson in Obedience and Perseverance",
    route: "/events/battle-of-uhud",
    available: true
  },
  {
    id: "battle-of-trench",
    title: "Battle of the Trench",
    description: "The Siege of Madinah by the Confederate Forces",
    route: "/events/battle-of-trench",
    available: true
  },
  {
    id: "battle-of-khaybar",
    title: "Conquest of Khaybar",
    description: "The Fall of the Jewish Fortresses",
    route: "/events/battle-of-khaybar",
    available: true
  },
  {
    id: "battle-of-mutah",
    title: "Battle of Mu'tah",
    description: "The First Confrontation with the Byzantine Empire",
    route: "/events/battle-of-mutah",
    available: true
  },
  {
    id: "conquest-of-makkah",
    title: "Conquest of Makkah",
    description: "The Peaceful Liberation of the Sacred City",
    route: "/events/conquest-of-makkah",
    available: true
  },
  {
    id: "battle-of-hunayn",
    title: "Battle of Hunayn",
    description: "Victory After Initial Setback at Hunayn and Ta'if",
    route: "/events/battle-of-hunayn",
    available: true
  },
  {
    id: "expedition-of-tabuk",
    title: "Expedition of Tabuk",
    description: "The Longest and Most Difficult Campaign",
    route: "/events/expedition-of-tabuk",
    available: true
  },
  {
    id: "farewell-pilgrimage",
    title: "The Farewell Pilgrimage",
    description: "The Final Sermon and Perfection of the Religion",
    route: "/events/farewell-pilgrimage",
    available: true
  }
];

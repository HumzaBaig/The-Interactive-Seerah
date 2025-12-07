export interface CharacterTrait {
  id: number;
  trait: string;
  narrations: {
    text: string;
    source: string;
  }[];
}

export const characterData: CharacterTrait[] = [
  {
    id: 1,
    trait: "The Prophet's Appearance",
    narrations: [
      {
        text: "The Prophet ﷺ was of moderate height, having broad shoulders, with hair reaching his ear-lobes. Once I saw him in a red cloak and I had never seen anyone more handsome than him.",
        source: "Ṣaḥīḥ al-Bukhārī 3551"
      },
      {
        text: "The Prophet ﷺ was neither very tall nor short, but of medium height among people. His complexion was rosy, neither absolutely white nor deep brown. His hair was neither completely curly nor quite lank, but between the two.",
        source: "Ṣaḥīḥ al-Bukhārī 3547"
      },
      {
        text: "Divine inspiration was revealed to him when he was forty years old. He stayed ten years in Makkah receiving revelation, and stayed ten years in Madinah. When he passed away at the age of sixty, he had scarcely twenty white hairs in his head and beard.",
        source: "Ṣaḥīḥ al-Bukhārī 3547"
      }
    ]
  }
];

export interface ChildCard {
  id: number;
  name: string;
  mother: string;
  bio: string;
  relation?: "child" | "grandchild";
  father?: string;
}

export const childrenData: ChildCard[] = [
  {
    id: 1,
    name: "Qasim",
    mother: "Khadijah bint Khuwaylid",
    bio: "The firstborn son of the Prophet ﷺ, after whom he was known as Abul-Qasim (Father of Qasim). He passed away in infancy in Makkah before the prophethood. His birth brought great joy to the family.",
    relation: "child"
  },
  {
    id: 2,
    name: "Zainab",
    mother: "Khadijah bint Khuwaylid",
    bio: "The eldest daughter of the Prophet ﷺ. She married Abu al-As ibn al-Rabi before Islam. Despite initial separation due to religious differences, her husband later accepted Islam and they reunited. She passed away in 8 AH."
  },
  {
    id: 3,
    name: "Ruqayyah",
    mother: "Khadijah bint Khuwaylid",
    bio: "She married Uthman ibn Affan and migrated with him twice to Abyssinia, then to Madinah. Known for her beauty and piety, she passed away during the Battle of Badr. Her death deeply grieved the Prophet ﷺ."
  },
  {
    id: 4,
    name: "Umm Kulthum",
    mother: "Khadijah bint Khuwaylid",
    bio: "After Ruqayyah's death, she also married Uthman ibn Affan, earning him the title 'Dhun-Nurayn' (Possessor of Two Lights). She was known for her patience and devotion. She passed away in 9 AH."
  },
  {
    id: 5,
    name: "Fatimah",
    mother: "Khadijah bint Khuwaylid",
    bio: "The youngest daughter and most beloved to the Prophet ﷺ. She married Ali ibn Abi Talib and was the mother of Hasan and Husayn. Known as 'Leader of the Women of Paradise,' she passed away six months after her father."
  },
  {
    id: 6,
    name: "Abdullah",
    mother: "Khadijah bint Khuwaylid",
    bio: "Also known as at-Tayyib (the Good) and at-Tahir (the Pure). He was born after the prophethood began and passed away in infancy in Makkah. His death was a source of great sorrow for the Prophet ﷺ and Khadijah."
  },
  {
    id: 7,
    name: "Ibrahim",
    mother: "Maria al-Qibtiyya",
    bio: "Born in Madinah in 8 AH. The Prophet ﷺ was overjoyed at his birth and would frequently visit him. He passed away at 18 months old. The Prophet ﷺ wept at his death, saying: 'The eyes shed tears and the heart grieves, but we only say what pleases our Lord.'",
    relation: "child"
  },
  {
    id: 8,
    name: "Hasan ibn Ali",
    mother: "Fatimah bint Muhammad",
    father: "Ali ibn Abi Talib",
    bio: "The elder grandson of the Prophet ﷺ, born in 3 AH. The Prophet ﷺ loved him dearly and said: 'Hasan and Husayn are the leaders of the youth of Paradise.' He became the fifth Caliph briefly after Ali's martyrdom, then made peace with Mu'awiyah to prevent bloodshed among Muslims. Known for his generosity and wisdom, he passed away in 50 AH.",
    relation: "grandchild"
  },
  {
    id: 9,
    name: "Husayn ibn Ali",
    mother: "Fatimah bint Muhammad",
    father: "Ali ibn Abi Talib",
    bio: "The younger grandson of the Prophet ﷺ, born in 4 AH. The Prophet ﷺ said about him and his brother: 'These two are my sons and the sons of my daughter.' He stood firmly against injustice and was martyred at the Battle of Karbala in 61 AH. His sacrifice is remembered as a profound stand for truth and justice in Islamic history.",
    relation: "grandchild"
  }
];

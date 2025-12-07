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
    trait: "His Appearance",
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
  },
  {
    id: 2,
    trait: "His Smile",
    narrations: [
      {
        text: "I have never seen anyone who smiled more than the Messenger of Allah ﷺ.",
        source: "Jāmiʿ at-Tirmidhī 3641"
      },
      {
        text: "I have never seen the Prophet ﷺ laughing so heartily to the extent of seeing his uvulae; rather, he would only smile.",
        source: "Ṣaḥīḥ al-Bukhārī 6092"
      },
      {
        text: "Your smiling in the face of your brother is charity.",
        source: "Jāmiʿ at-Tirmidhī 1956"
      },
      {
        text: "Whenever the Prophet ﷺ saw me, he would receive me with a smile.",
        source: "Ṣaḥīḥ al-Bukhārī 6089"
      }
    ]
  },
  {
    id: 3,
    trait: "His Diet",
    narrations: [
      {
        text: "The son of Adam does not fill any vessel worse than his stomach. It is sufficient for the son of Adam to eat a few mouthfuls to keep him going. If he must do that, then let him fill one third with food, one third with drink and one third with air.",
        source: "Sunan Ibn Mājah 3349"
      },
      {
        text: "The Prophet ﷺ never criticized any food. If he liked it, he would eat it, and if he did not like it, he would leave it without saying anything.",
        source: "Ṣaḥīḥ al-Bukhārī 5409"
      },
      {
        text: "He who eats seven Ajwa dates every morning will not be affected by poison or magic on the day he eats them.",
        source: "Ṣaḥīḥ al-Bukhārī 5445"
      },
      {
        text: "The Prophet ﷺ used to love pumpkin. He would actively pick it out from the dish.",
        source: "Sunan Abī Dāwūd 3782"
      }
    ]
  },
  {
    id: 4,
    trait: "When He Was Oppressed",
    narrations: [
      {
        text: "After the people of Ta'if rejected him and pelted him with stones until his feet bled, the Angel of the Mountains offered to crush the city between the two mountains. The Prophet ﷺ replied: 'No, rather I hope that Allah will raise from among their descendants people who will worship Allah alone.'",
        source: "Ṣaḥīḥ al-Bukhārī 3231"
      },
      {
        text: "When the Quraysh trackers reached the cave entrance during the Hijrah, Abu Bakr feared for the Prophet ﷺ. The Prophet ﷺ consoled him: 'What do you think of two when Allah is their third?'",
        source: "Ṣaḥīḥ Muslim 2381"
      },
      {
        text: "When asked if any day was harder than the Battle of Uhud, the Prophet ﷺ said the day at Ta'if was worse, when the leaders rejected him and incited people to stone him out of the city.",
        source: "Ṣaḥīḥ al-Bukhārī 3231"
      }
    ]
  },
  {
    id: 5,
    trait: "When He Had The Upper Hand",
    narrations: [
      {
        text: "When the Prophet ﷺ conquered Makkah, he addressed the Quraysh who had persecuted him for years and said: 'There is no reproach upon you today. Go, for you are free.'",
        source: "The Sealed Nectar"
      }
    ]
  },
  {
    id: 6,
    trait: "With Children",
    narrations: [
      {
        text: "A man saw the Prophet ﷺ kissing his grandson Al-Hasan and said: 'I have ten children and have never kissed any of them.' The Prophet ﷺ replied: 'Whoever does not show mercy will not be shown mercy.'",
        source: "Ṣaḥīḥ al-Bukhārī 5997"
      },
      {
        text: "The Prophet ﷺ would shorten his prayer if he heard a child crying so the mother could attend to them.",
        source: "Ṣaḥīḥ al-Bukhārī 707"
      },
      {
        text: "Anas served the Prophet ﷺ for ten years and reported: 'He never said \"Uff!\" to me, nor asked \"Why did you do that?\" or \"Why didn't you do that?\"'",
        source: "Ṣaḥīḥ al-Bukhārī 6038"
      },
      {
        text: "He is not one of us who does not have mercy upon our young, nor knows the honour of our elders.",
        source: "Jāmiʿ at-Tirmidhī 1920"
      }
    ]
  },
  {
    id: 7,
    trait: "With His Wives",
    narrations: [
      {
        text: "When asked 'Who is the person you love most in the world?' the Prophet ﷺ responded: 'Aisha.'",
        source: "Ṣaḥīḥ al-Bukhārī 3662"
      },
      {
        text: "The Prophet ﷺ would drink from the same spot on the cup where Aisha drank, and eat from the same place she bit from meat.",
        source: "Ṣaḥīḥ Muslim 300"
      },
      {
        text: "The Prophet ﷺ said: 'The best of you is he who is best to his family, and I am the best among you to my family.'",
        source: "Jāmiʿ at-Tirmidhī 3895"
      },
      {
        text: "The Prophet ﷺ would help his wives with household chores, mend his own shoes, and patch his own clothes.",
        source: "Ṣaḥīḥ al-Bukhārī 676"
      }
    ]
  },
  {
    id: 8,
    trait: "When He Had Wealth",
    narrations: [
      {
        text: "The Prophet ﷺ was the most generous of all people. He was never asked for anything for the sake of Islam but that he would give it. A man came and he gave him sheep filling the valley between two mountains.",
        source: "Ṣaḥīḥ Muslim 2312"
      },
      {
        text: "If I had gold equal to the mountain of Uhud, it would not please me that it should remain with me for more than three days, except an amount which I would keep for repaying debts.",
        source: "Ṣaḥīḥ al-Bukhārī 2389"
      },
      {
        text: "Money arrived from Bahrain—the largest amount ever. He spread it in the mosque and gave it all away before getting up. Not a single dirham remained.",
        source: "Ṣaḥīḥ al-Bukhārī 3165"
      }
    ]
  },
  {
    id: 9,
    trait: "When He Did Not Have Wealth",
    narrations: [
      {
        text: "The Prophet ﷺ died while his armor was mortgaged to a Jewish merchant for thirty sa's of barley.",
        source: "Ṣaḥīḥ al-Bukhārī 2916"
      },
      {
        text: "Aisha said: 'The family of Muhammad ﷺ never ate their fill of barley bread for two consecutive days until he passed away.'",
        source: "Ṣaḥīḥ al-Bukhārī 5416"
      },
      {
        text: "The Prophet ﷺ never ate from a large tray, never had fine bread, and never ate at a dining table. He would eat on a leather mat spread on the ground.",
        source: "Ṣaḥīḥ al-Bukhārī 5386"
      }
    ]
  },
  {
    id: 10,
    trait: "His Bravery",
    narrations: [
      {
        text: "Ali said: 'When the battle became fierce and eyes grew red, we would seek protection behind the Prophet ﷺ. He would be the closest to the enemy.'",
        source: "Musnad Ahmad 654"
      },
      {
        text: "Once the people of Madinah were alarmed by a noise at night. The Prophet ﷺ was the first to investigate, riding ahead alone on an unsaddled horse, returning to tell them: 'Do not be afraid.'",
        source: "Ṣaḥīḥ al-Bukhārī 2908"
      },
      {
        text: "At the Battle of Hunayn when the Muslim army initially fled, the Prophet ﷺ remained firm calling out: 'I am the Prophet, no lie! I am the son of Abdul-Muttalib!' until the army regrouped around him.",
        source: "Ṣaḥīḥ Muslim 1776"
      }
    ]
  },
  {
    id: 11,
    trait: "When Faced With Rudeness",
    narrations: [
      {
        text: "A Bedouin pulled the Prophet's ﷺ cloak so violently that it left marks on his neck, demanding: 'Give me from Allah's wealth!' The Prophet ﷺ turned to him, smiled, and ordered that he be given what he wanted.",
        source: "Ṣaḥīḥ al-Bukhārī 3149"
      },
      {
        text: "When a Bedouin urinated in the mosque, the companions shouted to stop him. The Prophet ﷺ said: 'Leave him alone.' After he finished, he gently taught him and ordered water to be poured over the spot.",
        source: "Ṣaḥīḥ al-Bukhārī 6025"
      },
      {
        text: "The Bedouin later testified: 'He got up and came to me, and may my father and mother be ransomed for him, he did not rebuke me nor revile me.'",
        source: "Jāmiʿ at-Tirmidhī 147"
      }
    ]
  },
  {
    id: 12,
    trait: "His Hygiene",
    narrations: [
      {
        text: "Cleanliness is half of faith.",
        source: "Ṣaḥīḥ Muslim 223"
      },
      {
        text: "Were it not that I might overburden my followers, I would have commanded them to use the miswak (tooth-stick) before every prayer.",
        source: "Ṣaḥīḥ al-Bukhārī 887"
      },
      {
        text: "When the Prophet ﷺ arose at night, he would clean his mouth with the toothstick. And the first thing he did upon entering his house was use the miswak.",
        source: "Ṣaḥīḥ al-Bukhārī 243"
      },
      {
        text: "Five practices are of the fitrah (natural disposition): circumcision, shaving the pubic region, clipping the nails, plucking armpit hair, and trimming the mustache.",
        source: "Ṣaḥīḥ al-Bukhārī 5889"
      }
    ]
  }
];

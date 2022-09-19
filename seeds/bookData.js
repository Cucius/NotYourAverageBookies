const { Book } = require("../models");

const bookData = [
  //Biographies
  {
    title: "The Happiest Man on Earth",
    authorFirstName: "Eddie",
    authorLastName: "Jaku",
    genre: "biography",
    coverIMG: "Happiest_Man.jpg",
    Description:
      "Eddie Jaku always considered himself a German first, a Jew second. He was proud of his country. But all of that changed in November 1938, when he was beaten, arrested and taken to a concentration camp.",
  },
  {
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    authorFirstName: "David",
    authorLastName: "Goggins",
    genre: "biography",
    coverIMG: "Cant_Hurt_Me.jpg",
    Description:
      "For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes. The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, he went on to set records in numerous endurance events, inspiring Outside magazine to name him The Fittest (Real) Man in America",
  },
  {
    title: "Revenge: Meghan, Harry and the War between the Windsors",
    authorFirstName: "Tom",
    authorLastName: "Bower",
    genre: "biography",
    coverIMG: "Revenge.jpg",
    Description:
      "The British Royal Family believed that the dizzy success of the Sussex wedding, watched and celebrated around the world, was the beginning of a new era for the Windsors. Yet, within one tumultuous year, the dream became a nightmare. In the aftermath of the infamous Megxit split and the Oprah Winfrey interview, the Royal Family's fate seems persistently threatened.",
  },
  {
    title: "Rogues: True Stories of Grifters, Killers, Rebels and Crooks",
    authorFirstName: "Patrick Radden",
    authorLastName: "Keefe",
    genre: "biography",
    coverIMG: "Rogues.jpg",
    Description:
      "From the prize-winning, New York Times bestselling author of Say Nothing and Empire of Pain, twelve enthralling stories of skulduggery and intrigue by one of the most decorated journalists of our time.",
  },
  {
    title: "Vanderbilt: The Rise and Fall of an American Dynasty",
    authorFirstName: "Anderson",
    authorLastName: "Cooper",
    genre: "biography",
    coverIMG: "Vanderbilt.jpg",
    Description:
      "New York Times bestselling author and journalist Anderson Cooper teams with New York Times bestselling historian and novelist Katherine Howe to chronicle the rise and fall of a legendary American dynasty—his mother’s family, the Vanderbilts.",
  },
  //Fantasy
  {
    title: "Circe",
    authorFirstName: "Madeline",
    authorLastName: "Miller",
    genre: "fantasy",
    coverIMG: "Circe.jpg",
    Description:
      "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child--neither powerful like her father nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power: the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.",
  },
  {
    title: "The Final Gambit",
    authorFirstName: "Jennifer Lynn",
    authorLastName: "Barnes",
    genre: "fantasy",
    coverIMG: "Final_Gambit.jpg",
    Description:
      "To inherit billions, all Avery Kylie Grambs has to do is survive a few more weeks living in Hawthorne House. The paparazzi are dogging her every step. Financial pressures are building. Danger is a fact of life. And the only thing getting Avery through it all is the Hawthorne brothers. Her life is intertwined with theirs. She knows their secrets, and they know her.",
  },
  {
    title: "The Measure",
    authorFirstName: "Nikki",
    authorLastName: "Erlick",
    genre: "fantasy",
    coverIMG: "Measure.jpg",
    Description: "Eight ordinary people. One extraordinary choice.",
  },
  {
    title: "This Time Tomorrow",
    authorFirstName: "Emma",
    authorLastName: "Straub",
    genre: "fantasy",
    coverIMG: "Time_Tomorrow.jpg",
    Description:
      "With her celebrated humor, insight, and heart, beloved New York Times bestseller Emma Straub offers her own twist on traditional time travel tropes, and a different kind of love story.",
  },
  {
    title: "The Wicked King",
    authorFirstName: "Holly",
    authorLastName: "Black",
    genre: "fantasy",
    coverIMG: "Wicked_King.jpg",
    Description:
      "When it becomes all too clear that someone close to Jude means to betray her, threatening her own life and the lives of everyone she loves, Jude must uncover the traitor and fight her own complicated feelings for Cardan to maintain control as a mortal in a Faerie world.",
  },
  //Horror
  {
    title: "The Push",
    authorFirstName: "Ashley",
    authorLastName: "Audrain",
    genre: "horror",
    coverIMG: "Push.jpg",
    Description:
      "A tense, page-turning psychological drama about the making and breaking of a family–and a woman whose experience of motherhood is nothing at all what she hoped for–and everything she feared.",
  },
  {
    title: "One By One",
    authorFirstName: "Freida",
    authorLastName: "McFadden",
    genre: "horror",
    coverIMG: "One_by_one.jpg",
    Description:
      "Getting snowed in at a beautiful, rustic mountain chalet doesn’t sound like the worst problem in the world, especially when there’s a breathtaking vista, a cozy fire, and company to keep you warm. But what happens when that company is eight of your coworkers…and you can’t trust any of them?",
  },
  {
    title: "Nettle & Bone",
    authorFirstName: "T.",
    authorLastName: "Kingfisher",
    genre: "horror",
    coverIMG: "Nettle_Bone.jpg",
    Description:
      "After years of seeing her sisters suffer at the hands of an abusive prince, Marra—the shy, convent-raised, third-born daughter—has finally realized that no one is coming to their rescue. No one, except for Marra herself.",
  },
  {
    title: "The Last Graduate",
    authorFirstName: "Naomi",
    authorLastName: "Novik",
    genre: "horror",
    coverIMG: "Graduate.jpg",
    Description:
      "A budding dark sorceress determined not to use her formidable powers uncovers yet more secrets about the workings of her world in the stunning sequel to A Deadly Education, the start of Naomi Novik’s groundbreaking crossover series.",
  },
  {
    title: "The Hive",
    authorFirstName: "Gregg",
    authorLastName: "Olsen",
    genre: "horror",
    coverIMG: "Hive.jpg",
    Description:
      "Glamorous messiah or charlatan? A mask of beauty hides deadly secrets in #1 New York Times and Amazon Charts bestselling author Gregg Olsen’s mesmerizing novel of suspense.",
  },
  // Sci-Fi
  {
    title: "A Grimm Sacrifice",
    authorFirstName: "Jeffery H.",
    authorLastName: "Haskell",
    genre: "sci-fi",
    coverIMG: "Grimm.jpg",
    Description:
      "The Consortium is in real trouble. Caliphate Naval forces have stepped up their raids on the border planets and are taking people by the thousands. They can defend the wormhole, or they can defend their planets, not both.",
  },
  {
    title: "The Seven Deaths of Evelyn Hardcastle",
    authorFirstName: "Stuart",
    authorLastName: "Turton",
    genre: "sci-fi",
    coverIMG: "Seven_Deaths.jpg",
    Description:
      "Aiden Bishop knows the rules. Evelyn Hardcastle will die every day until he can identify her killer and break the cycle. But every time the day begins again, Aiden wakes up in the body of a different guest at Blackheath Manor. And some of his hosts are more helpful than others. With a locked-room mystery that Agatha Christie would envy, Stuart Turton unfurls a breakneck novel of intrigue and suspense.",
  },
  {
    title: "Lost in Time",
    authorFirstName: "A. G.",
    authorLastName: "Riddle",
    genre: "sci-fi",
    coverIMG: "Lost_in_Time.jpg",
    Description:
      "When his daughter is falsely accused of murder, a scientist must travel 200 million years into the past to save her. But there are secrets waiting there. And more than her life is at stake.",
  },
  {
    title: "All Systems Red",
    authorFirstName: "Martha",
    authorLastName: "Wells",
    genre: "sci-fi",
    coverIMG: "All_Systems.jpg",
    Description:
      "In a corporate-dominated spacefaring future, planetary missions must be approved and supplied by the Company. Exploratory teams are accompanied by Company-supplied security androids, for their own safety.",
  },
  {
    title: "Artificial Condition",
    authorFirstName: "Martha",
    authorLastName: "Wells",
    genre: "sci-fi",
    coverIMG: "Artificial.jpg",
    Description:
      "It has a dark past – one in which a number of humans were killed. A past that caused it to christen itself “Murderbot”. But it has only vague memories of the massacre that spawned that title, and it wants to know more.",
  },
  // Travel
  {
    title: "People We Meet on Vacation",
    authorFirstName: "Emily",
    authorLastName: "Henry",
    genre: "travel",
    coverIMG: "People_We_Meet.jpg",
    Description:
      "Two best friends. Ten summer trips. One last chance to fall in love.",
  },
  {
    title: "One Italian Summer",
    authorFirstName: "Rebecca",
    authorLastName: "Serle",
    genre: "travel",
    coverIMG: "One_Italian_Summer.jpg",
    Description:
      "When Katy’s mother dies, she is left reeling. Carol wasn’t just Katy’s mom, but her best friend and first phone call. She had all the answers and now, when Katy needs her the most, she is gone. To make matters worse, their planned mother-daughter trip of a lifetime looms: two weeks in Positano, the magical town Carol spent the summer right before she met Katy’s father. Katy has been waiting years for Carol to take her, and now she is faced with embarking on the adventure alone.",
  },
  {
    title: "These Tangled Vines",
    authorFirstName: "Julianne",
    authorLastName: "MacLean",
    genre: "travel",
    coverIMG: "Tangled_Vines.jpg",
    Description:
      "If Fiona has learned anything in life, it’s how to keep a secret—even from the father who raised her. She is the only person who knows about her late mother’s affair in Tuscany thirty years earlier, and she intends to keep it that way…until a lawyer calls with shocking news: her biological father has died and left her an incredible inheritance—along with two half siblings.",
  },
  {
    title: "Shipped",
    authorFirstName: "Angie",
    authorLastName: "Hockman",
    genre: "travel",
    coverIMG: "Shipped.jpg",
    Description:
      "Between taking night classes for her MBA and her demanding day job at a cruise line, marketing manager Henley Evans barely has time for herself, let alone family, friends, or dating. But when she’s shortlisted for the promotion of her dreams, all her sacrifices finally seem worth it.",
  },
  {
    title: "West with Giraffes",
    authorFirstName: "Lynda",
    authorLastName: "Rutledge",
    genre: "travel",
    coverIMG: "Giraffes.jpg",
    Description:
      "Woodrow Wilson Nickel, age 105, feels his life ebbing away. But when he learns giraffes are going extinct, he finds himself recalling the unforgettable experience he cannot take to his grave.",
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;

const { Book } = require("../models");

const bookData = [
  //Biographies
  {
    title: "The Happiest Man on Earth",
    authorFirstName: "Eddie",
    authorLastName: "Jaku",
    genre: "biography",
    coverIMG: "Happiest_Man.jpg",
  },
  {
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    authorFirstName: "David",
    authorLastName: "Goggins",
    genre: "biography",
    coverIMG: "Cant_Hurt_Me.jpg",
  },
  {
    title: "Revenge: Meghan, Harry and the War between the Windsors",
    authorFirstName: "Tom",
    authorLastName: "Bower",
    genre: "biography",
    coverIMG: "Revenge.jpg",
  },
  {
    title: "Rogues: True Stories of Grifters, Killers, Rebels and Crooks",
    authorFirstName: "Patrick Radden",
    authorLastName: "Keefe",
    genre: "biography",
    coverIMG: "Rogues.jpg",
  },
  {
    title: "Vanderbilt: The Rise and Fall of an American Dynasty",
    authorFirstName: "Anderson",
    authorLastName: "Cooper",
    genre: "biography",
    coverIMG: "Vanderbilt.jpg",
  },
  //Fantasy
  {
    title: "Circe",
    authorFirstName: "Madeline",
    authorLastName: "Miller",
    genre: "fantasy",
    coverIMG: "Circe.jpg",
  },
  {
    title: "The Final Gambit",
    authorFirstName: "Jennifer Lynn",
    authorLastName: "Barnes",
    genre: "fantasy",
    coverIMG: "Final_Gambit.jpg",
  },
  {
    title: "The Measure",
    authorFirstName: "Nikki",
    authorLastName: "Erlick",
    genre: "fantasy",
    coverIMG: "Measure.jpg",
  },
  {
    title: "This Time Tomorrow",
    authorFirstName: "Emma",
    authorLastName: "Straub",
    genre: "fantasy",
    coverIMG: "Time_Tomorrow.jpg",
  },
  {
    title: "The Wicked King",
    authorFirstName: "Holly",
    authorLastName: "Black",
    genre: "fantasy",
    coverIMG: "Wicked_King.jpg",
  },
  //Horror
  {
    title: "The Push",
    authorFirstName: "Ashley",
    authorLastName: "Audrain",
    genre: "horror",
    coverIMG: "Push.jpg",
  },
  {
    title: "One By One",
    authorFirstName: "Freida",
    authorLastName: "McFadden",
    genre: "horror",
    coverIMG: "One_by_one.jpg",
  },
  {
    title: "Nettle & Bone",
    authorFirstName: "T.",
    authorLastName: "Kingfisher",
    genre: "horror",
    coverIMG: "Nettle_Bone.jpg",
  },
  {
    title: "The Last Graduate",
    authorFirstName: "Naomi",
    authorLastName: "Novik",
    genre: "horror",
    coverIMG: "Graduate.jpg",
  },
  {
    title: "The Hive",
    authorFirstName: "Gregg",
    authorLastName: "Olsen",
    genre: "horror",
    coverIMG: "Hive.jpg",
  },
  // Sci-Fi
  {
    title: "A Grimm Sacrifice",
    authorFirstName: "Jeffery H.",
    authorLastName: "Haskell",
    genre: "sci-fi",
    coverIMG: "Grimm.jpg",
  },
  {
    title: "The Seven Deaths of Evelyn Hardcastle",
    authorFirstName: "Stuart",
    authorLastName: "Turton",
    genre: "sci-fi",
    coverIMG: "Seven_Deaths.jpg",
  },
  {
    title: "Lost in Time",
    authorFirstName: "A. G.",
    authorLastName: "Riddle",
    genre: "sci-fi",
    coverIMG: "Lost_in_Time.jpg",
  },
  {
    title: "All Systems Red",
    authorFirstName: "Martha",
    authorLastName: "Wells",
    genre: "sci-fi",
    coverIMG: "All_Systems.jpg",
  },
  {
    title: "Artificial Condition",
    authorFirstName: "Martha",
    authorLastName: "Wells",
    genre: "sci-fi",
    coverIMG: "Artificial.jpg",
  },
  // Travel
  {
    title: "People We Meet on Vacation",
    authorFirstName: "Emily",
    authorLastName: "Henry",
    genre: "travel",
    coverIMG: "People_We_Meet.jpg",
  },
  {
    title: "One Italian Summer",
    authorFirstName: "Rebecca",
    authorLastName: "Serle",
    genre: "travel",
    coverIMG: "One_Italian_Summer.jpg",
  },
  {
    title: "These Tangled Vines",
    authorFirstName: "Julianne",
    authorLastName: "MacLean",
    genre: "travel",
    coverIMG: "Tangled_Vines.jpg",
  },
  {
    title: "Shipped",
    authorFirstName: "Angie",
    authorLastName: "Hockman",
    genre: "travel",
    coverIMG: "Shipped.jpg",
  },
  {
    title: "West with Giraffes",
    authorFirstName: "Lynda",
    authorLastName: "Rutledge",
    genre: "travel",
    coverIMG: "Giraffes.jpg",
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;

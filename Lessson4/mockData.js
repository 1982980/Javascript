const mockData = [
  {
    id: 1,
    first_name: "Barbie",
    city: "Saskylakh",
    email: "bserrell0@loc.gov",
    animals: "Civet, small-toothed palm",
    married: false,
  },
  {
    id: 2,
    first_name: "Kesley",
    city: "Jiangwakou",
    email: "krilings1@symantec.com",
    animals: "Eastern cottontail rabbit",
    married: true,
  },
  {
    id: 3,
    first_name: "Bertrando",
    city: "Sobeok",
    email: "bbarchrameev2@artisteer.com",
    animals: "Dragon, asian water",
    married: true,
  },
  {
    id: 4,
    first_name: "Gilly",
    city: "Tha Maka",
    email: "gskillanders3@instagram.com",
    animals: "Lizard, frilled",
    married: true,
  },
  {
    id: 5,
    first_name: "Ronald",
    city: "Sai",
    email: "rwinterburn4@yolasite.com",
    animals: "American woodcock",
    married: true,
  },
  {
    id: 6,
    first_name: "Jolene",
    city: "Atouguia",
    email: "jzanetti5@posterous.com",
    animals: "Tenrec, tailless",
    married: true,
  },
  {
    id: 7,
    first_name: "Emlynn",
    city: "Cibitung",
    email: "emaundrell6@ovh.net",
    animals: "Common turkey",
    married: true,
  },
  {
    id: 8,
    first_name: "Wini",
    city: "Pergan",
    email: "wclench7@springer.com",
    animals: "Green vine snake",
    married: true,
  },
  {
    id: 9,
    first_name: "Peta",
    city: "Anyang",
    email: "pcathenod8@goo.ne.jp",
    animals: "Crane, black-crowned",
    married: false,
  },
  {
    id: 10,
    first_name: "Sada",
    city: "Třešť",
    email: "sgrover9@imgur.com",
    animals: "Albatross, waved",
    married: false,
  },
  {
    id: 11,
    first_name: "Massimo",
    city: "Zimovniki",
    email: "mcollingtona@slashdot.org",
    animals: "Gull, kelp",
    married: false,
  },
  {
    id: 12,
    first_name: "Dorolisa",
    city: "Adzopé",
    email: "dbunchb@wikipedia.org",
    animals: "Giant armadillo",
    married: false,
  },
  {
    id: 13,
    first_name: "Rhona",
    city: "Sarrazola",
    email: "rdrinnanc@hc360.com",
    animals: "African elephant",
    married: true,
  },
  {
    id: 14,
    first_name: "Claiborne",
    city: "Xianning",
    email: "ccouchd@vistaprint.com",
    animals: "Raven, cape",
    married: false,
  },
  {
    id: 15,
    first_name: "Aubrette",
    city: "Huertas",
    email: "aslaye@youku.com",
    animals: "Eastern diamondback rattlesnake",
    married: false,
  },
  {
    id: 16,
    first_name: "Hashim",
    city: "Mamu",
    email: "hpetraccof@youtu.be",
    animals: "Brown hyena",
    married: true,
  },
  {
    id: 17,
    first_name: "Bruis",
    city: "Fengpo",
    email: "bspatag@salon.com",
    animals: "Goose, cereopsis",
    married: false,
  },
  {
    id: 18,
    first_name: "Clare",
    city: "København",
    email: "cschiementzh@nih.gov",
    animals: "Bent-toed gecko",
    married: true,
  },
  {
    id: 19,
    first_name: "Dion",
    city: "Machinda",
    email: "dcavelli@jimdo.com",
    animals: "Zorilla",
    married: true,
  },
  {
    id: 20,
    first_name: "Rodrigo",
    city: "Zhanping",
    email: "rtomadonij@shareasale.com",
    animals: "Dog, raccoon",
    married: false,
  },
  {
    id: 21,
    first_name: "Vern",
    city: "Qixingtai",
    email: "vkunzlerk@facebook.com",
    animals: "Silver-backed fox",
    married: false,
  },
  {
    id: 22,
    first_name: "Shanna",
    city: "Al Kiswah",
    email: "sterryl@samsung.com",
    animals: "Sulfur-crested cockatoo",
    married: false,
  },
  {
    id: 23,
    first_name: "Loni",
    city: "Tianzhu",
    email: "lbreewoodm@plala.or.jp",
    animals: "Western spotted skunk",
    married: false,
  },
  {
    id: 24,
    first_name: "Claresta",
    city: "Bifeng",
    email: "cpaszekn@zdnet.com",
    animals: "Weeper capuchin",
    married: true,
  },
  {
    id: 25,
    first_name: "Guillaume",
    city: "Yaogu",
    email: "gdiglino@nationalgeographic.com",
    animals: "Spotted hyena",
    married: false,
  },
  {
    id: 26,
    first_name: "Fidelia",
    city: "Tanūmah",
    email: "fglenisterp@tumblr.com",
    animals: "Wood pigeon",
    married: false,
  },
  {
    id: 27,
    first_name: "Barbra",
    city: "Aldeia da Piedade",
    email: "byakobq@edublogs.org",
    animals: "American beaver",
    married: true,
  },
  {
    id: 28,
    first_name: "Sheppard",
    city: "Nancheng",
    email: "sstilingr@earthlink.net",
    animals: "Llama",
    married: false,
  },
  {
    id: 29,
    first_name: "Irena",
    city: "Bongouanou",
    email: "ihearnahs@reddit.com",
    animals: "Prehensile-tailed porcupine",
    married: true,
  },
  {
    id: 30,
    first_name: "Moira",
    city: "Cotuí",
    email: "mblundant@friendfeed.com",
    animals: "Gerenuk",
    married: false,
  },
  {
    id: 31,
    first_name: "Fidel",
    city: "Stockholm",
    email: "fbeneu@rakuten.co.jp",
    animals: "Gull, lava",
    married: true,
  },
  {
    id: 32,
    first_name: "Fancy",
    city: "Bennäs",
    email: "fabbessv@cargocollective.com",
    animals: "Blue and yellow macaw",
    married: false,
  },
  {
    id: 33,
    first_name: "Lusa",
    city: "Marseille",
    email: "lsalewayw@ustream.tv",
    animals: "Common wombat",
    married: true,
  },
  {
    id: 34,
    first_name: "Silvester",
    city: "Wuppertal",
    email: "snannix@engadget.com",
    animals: "Whale, long-finned pilot",
    married: true,
  },
  {
    id: 35,
    first_name: "Carlin",
    city: "Cergy-Pontoise",
    email: "cagronskiy@w3.org",
    animals: "Hawk, galapagos",
    married: false,
  },
  {
    id: 36,
    first_name: "Ashil",
    city: "Hyesan-dong",
    email: "acatterillz@xinhuanet.com",
    animals: "Hartebeest, coke's",
    married: false,
  },
  {
    id: 37,
    first_name: "Lionello",
    city: "Schirmeck",
    email: "lfairfull10@scribd.com",
    animals: "Red-headed woodpecker",
    married: false,
  },
  {
    id: 38,
    first_name: "Sofia",
    city: "Banjarjo",
    email: "slancley11@google.com.br",
    animals: "Hottentot teal",
    married: false,
  },
  {
    id: 39,
    first_name: "Tedda",
    city: "Ocumare del Tuy",
    email: "thardeman12@economist.com",
    animals: "Hartebeest, red",
    married: false,
  },
  {
    id: 40,
    first_name: "Iorgo",
    city: "Shangdongjie",
    email: "iblincoe13@themeforest.net",
    animals: "European shelduck",
    married: true,
  },
  {
    id: 41,
    first_name: "Gearalt",
    city: "Tunjë",
    email: "grosenvasser14@hexun.com",
    animals: "Coke's hartebeest",
    married: false,
  },
  {
    id: 42,
    first_name: "Freddie",
    city: "Longtan",
    email: "fvittore15@sitemeter.com",
    animals: "Duck, comb",
    married: true,
  },
  {
    id: 43,
    first_name: "Ulberto",
    city: "Conceição do Araguaia",
    email: "ubonwick16@squarespace.com",
    animals: "Crow, house",
    married: true,
  },
  {
    id: 44,
    first_name: "Nicoli",
    city: "Lahad Datu",
    email: "npastor17@google.co.jp",
    animals: "Heron, striated",
    married: false,
  },
  {
    id: 45,
    first_name: "Katerina",
    city: "Orneta",
    email: "kparadin18@npr.org",
    animals: "Black-fronted bulbul",
    married: true,
  },
  {
    id: 46,
    first_name: "Kent",
    city: "Katsina",
    email: "kwozencroft19@skype.com",
    animals: "Zorro, azara's",
    married: true,
  },
  {
    id: 47,
    first_name: "Janine",
    city: "San Julian",
    email: "jhannabus1a@imdb.com",
    animals: "Sportive lemur",
    married: false,
  },
  {
    id: 48,
    first_name: "Carena",
    city: "Kroczyce",
    email: "cklimpke1b@samsung.com",
    animals: "Galah",
    married: true,
  },
  {
    id: 49,
    first_name: "Aldridge",
    city: "Caxias",
    email: "athurby1c@mayoclinic.com",
    animals: "Marine iguana",
    married: true,
  },
  {
    id: 50,
    first_name: "Sandy",
    city: "Oskarshamn",
    email: "spimlott1d@trellian.com",
    animals: "Lilac-breasted roller",
    married: true,
  },
];

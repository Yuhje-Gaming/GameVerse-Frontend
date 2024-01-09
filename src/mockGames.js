const mockGames = [
  {
    id: 1,
    title: 'League of Legends',
    rating: 9.6,
    platform: 'Windows PC, Mac OS',
    genre: 'Multiplayer Online Battle Arena (MOBA)',
    developer: 'Riot Games',
    image: 'https://www.gamespace.com/wp-content/uploads/2020/12/League-of-Legends.jpg',
    summary:
      "League of Legends is one of the world's most popular video games, developed by Riot Games. It features a team-based competitive game mode based on strategy and outplaying opponents. Players work with their team to break the enemy Nexus before the enemy team breaks theirs.",
    release_date: '2009-10-27',
    user_id: 1,
  },
  {
    id: 2,
    title: 'Diablo IV',
    rating: 9.6,
    platform: 'Windows PC, PS4, PS5, Xbox One, Xbox Series X/S',
    genre: 'Action role playing',
    developer: 'Blizzard',
    image:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71d9db111a265e8c/d4-open-graph_001.jpg',
    summary:
      "Diablo IV is the fourth main installment in the Diablo series. The story is centered around Lilith, Mephisto's daughter, who has been summoned into Sanctuary.",
    release_date: '2023-06-06',
    user_id: 2,
  },
  {
    id: 3,
    title: 'The Witcher 3: Wild Hunt',
    rating: 9.9,
    platform: 'Windows PC, PlayStation 4, Xbox One, Nintendo Switch',
    genre: 'Action role-playing',
    developer: 'CD Projekt',
    image:
      'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f',
    summary:
      'The Witcher 3: Wild Hunt is an open-world action role-playing game set in a dark fantasy universe. Players take on the role of Geralt of Rivia, a monster hunter known as a Witcher, as he embarks on a quest to find his adopted daughter and confront the Wild Hunt.',
    release_date: '2015-05-19',
    user_id: 3,
  },
  {
    id: 4,
    title: 'Overwatch 2',
    rating: 9.2,
    platform: 'Windows PC, PlayStation 4, Xbox One, Nintendo Switch',
    genre: 'First-person shooter',
    developer: 'Blizzard',
    image: "https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/Header-9eb920ee0baf53c4b7d2.jpg",
    summary:
      'Overwatch 2 is a team-based first-person shooter where players choose from a diverse cast of heroes with unique abilities. Teams compete in various game modes, such as capturing objectives or escorting payloads, in a futuristic world filled with vibrant characters.',
    release_date: '2022-10-04',
    user_id: 4,
  },
  {
    id: 5,
    title: 'The Legend of Zelda: Breath of the Wild',
    rating: 9.8,
    platform: 'Nintendo Switch, Wii U',
    genre: 'Action-adventure',
    developer: 'Nintendo',
    image: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
    summary:
      'The Legend of Zelda: Breath of the Wild is an action-adventure game set in an open world. Players control Link as he explores the vast kingdom of Hyrule, solving puzzles, battling enemies, and uncovering the secrets of the Calamity Ganon.',
    release_date: '2017-03-03',
    user_id: 5,
  },
  {
    id: 6,
    title: 'Fortnite',
    rating: 8.9,
    platform:
      'Windows PC, macOS, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch, iOS, Android',
    genre: 'Battle royale',
    developer: 'Epic Games',
    image: "https://cdn2.unrealengine.com/blade-2560x1440-2560x1440-6b1174ff6f66.jpg",
    summary:
      'Fortnite is a popular battle royale game where players fight against each other in a shrinking map until only one player or team remains. The game also features a creative mode where players can build structures and create their own worlds.',
    release_date: '2017-07-25',
    user_id: 6,
  },
  {
    id: 7,
    title: 'Minecraft',
    rating: 9.5,
    platform:
      'Windows PC, macOS, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch, iOS, Android',
    genre: 'Sandbox, survival',
    developer: 'Mojang Studios',
    image:  "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
    summary:
      'Minecraft is a sandbox game where players can build and explore virtual worlds made up of blocks. The game offers various modes, including survival mode, where players must gather resources and fend off enemies, and creative mode, where players have unlimited resources to build whatever they imagine.',
    release_date: '2011-11-18',
    user_id: 7,
  },
  {
    id: 8,
    title: 'Red Dead Redemption 2',
    rating: 9.7,
    platform: 'Windows PC, PlayStation 4, Xbox One',
    genre: 'Action-adventure',
    developer: 'Rockstar Games',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1695140956',
    summary:
      "Red Dead Redemption 2 is an epic tale set in America's unforgiving heartland. Players take on the role of Arthur Morgan, an outlaw on the run, as he navigates through a vast and immersive open world filled with wild west adventures, gunfights, and moral choices.",
    release_date: '2018-10-26',
    user_id: 8,
  },
  {
    id: 9,
    title: 'Grand Theft Auto V',
    rating: 9.6,
    platform:
      'Windows PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S',
    genre: 'Action-adventure',
    developer: 'Rockstar Games',
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202203/1409/oltI7Zc96usbdvhVVXcV1EAi.png',
    summary:
      'Grand Theft Auto V is an open-world action-adventure game set in the fictional city of Los Santos. Players can explore the city, complete missions, engage in heists, and experience a vast array of activities in both single-player and online multiplayer modes.',
    release_date: '2013-09-17',
    user_id: 9,
  },
  {
    id: 10,
    title: 'Animal Crossing: New Horizons',
    rating: 9.7,
    platform: 'Nintendo Switch',
    genre: 'Life simulation',
    developer: 'Nintendo',
    image:
      'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a',
    summary:
      'Animal Crossing: New Horizons is a life simulation game that allows players to create their own island paradise. They can fish, catch bugs, decorate their home, and interact with anthropomorphic animal villagers. The game operates in real-time, with seasons, events, and activities changing throughout the year.',
    release_date: '2020-03-20',
    user_id: 10,
  },
  {
    id: 11,
    title: 'Cyberpunk 2077',
    rating: 8.7,
    platform:
      'Windows PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S',
    genre: 'Action role-playing',
    developer: 'CD Projekt',
    image:
      'https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/b9ea2dc46d95cf9fa3f77209e27ae7a6488368f1-1920x1080.jpg',
    summary:
      'Cyberpunk 2077 is an open-world action role-playing game set in Night City, a megalopolis obsessed with power, glamour, and body modification. Players take on the role of V, a mercenary outlaw on a mission to steal an implant that holds the key to immortality.',
    release_date: '2020-12-10',
    user_id: 11,
  },
  {
    id: 12,
    title: "Assassin's Creed Valhalla",
    rating: 8.8,
    platform:
      'Windows PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S',
    genre: 'Action role-playing',
    developer: 'Ubisoft',
    image:
      'https://bunnygaming.com/wp-content/uploads/2020/11/Feature-Image.jpg',
    summary:
      "Assassin's Creed Valhalla is an action role-playing game set in the Viking Age. Players take on the role of Eivor, a Viking raider, as they lead their clan from the harsh shores of Norway to a new home in England, facing political intrigue, warfare, and supernatural threats along the way.",
    release_date: '2020-11-10',
    user_id: 12,
  },
  {
    id: 13,
    title: 'FIFA 22',
    rating: 8.5,
    platform:
      'Windows PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch',
    genre: 'Sports',
    developer: 'EA Sports',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1506830/capsule_616x353.jpg?t=1695934909',
    summary:
      "FIFA 22 is a football simulation game that brings the excitement of the world's most popular sport to your screen. With realistic graphics, authentic player movements, and a variety of game modes, FIFA 22 offers an immersive football experience for both casual and competitive players.",
    release_date: '2021-10-01',
    user_id: 13,
  },
  {
    id: 14,
    title: 'Call of Duty: Warzone',
    rating: 9.0,
    platform:
      'Windows PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S',
    genre: 'Battle royale, first-person shooter',
    developer: 'Infinity Ward, Raven Software',
    image:
      'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg',
    summary:
      'Call of Duty: Warzone is a free-to-play battle royale game set in the Call of Duty universe. Players drop into a massive map, gather weapons and equipment, and fight to be the last squad standing. With intense gunfights and strategic gameplay, Warzone offers an adrenaline-pumping experience.',
    release_date: '2020-03-10',
    user_id: 14,
  },
  {
    id: 15,
    title: 'The Elder Scrolls V: Skyrim',
    rating: 9.3,
    platform:
      'Windows PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch',
    genre: 'Action role-playing',
    developer: 'Bethesda Game Studios',
    image:
      'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-elder-scrolls-v-skyrim-switch/hero',
    summary:
      'The Elder Scrolls V: Skyrim is an epic fantasy RPG set in the vast world of Tamriel. Players can embark on an immersive adventure, slay dragons, join guilds, complete quests, and uncover the secrets of the ancient Dragonborn prophecy.',
    release_date: '2011-11-11',
    user_id: 15,
  },
  {
    id: 16,
    title: 'Halo Infinite',
    rating: 9.1,
    platform: 'Windows PC, Xbox One, Xbox Series X/S',
    genre: 'First-person shooter',
    developer: '343 Industries',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1708091/capsule_616x353.jpg?t=1678215688',
    summary:
      'Halo Infinite is the next installment in the iconic Halo franchise. Players step into the boots of Master Chief and embark on an epic journey to save humanity from a new threat. With a gripping campaign and a multiplayer mode that promises intense battles, Halo Infinite aims to deliver an unforgettable Halo experience.',
    release_date: '2021-12-08',
    user_id: 16,
  },
  {
    id: 17,
    title: 'Pokémon Sword and Shield',
    rating: 8.9,
    platform: 'Nintendo Switch',
    genre: 'Role-playing',
    developer: 'Game Freak',
    image:
      'https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_sword_shield/sword-shield-169-en.jpg',
    summary:
      'Pokémon Sword and Shield are the latest mainline Pokémon games set in the Galar region. Trainers embark on a journey to become the Champion, catch new Pokémon, battle against Gym Leaders, and uncover the mysteries of the Legendary Pokémon.',
    release_date: '2019-11-15',
    user_id: 17,
  },
  {
    id: 18,
    title: 'Super Mario Odyssey',
    rating: 9.8,
    platform: 'Nintendo Switch',
    genre: 'Platformer',
    developer: 'Nintendo',
    image:
      'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperMarioOdyssey_image1600w.jpg',
    summary:
      "Super Mario Odyssey is a 3D platformer that takes Mario on a globe-trotting adventure to rescue Princess Peach from Bowser's clutches. With its imaginative levels, creative gameplay mechanics, and charming characters, Super Mario Odyssey is a must-play for fans of the genre.",
    release_date: '2017-10-27',
    user_id: 18,
  },
]
export default mockGames

import DUMB_CHARADES from "../assets/posters/dumb-charades.png";
import LAN_GAMING from "../assets/posters/lan-gaming.png";
import MEMORY_VS_TIME from "../assets/posters/memory-vs-time.png";
import PAPER_PRESENTATION from "../assets/posters/paper-presentation.png";
import REVERSE_CODING from "../assets/posters/reverse-coding.png";
import SCRIBBLE_WORD from "../assets/posters/scribble-word.png";
import SOUND_ENGINEERING from "../assets/posters/sound-engineer.png";
import TECH_QUIZ from "../assets/posters/tech-quiz.png";
import TREASURE_HUNT from "../assets/posters/treasure-hunt.png";
import {
  DUMB_CHARADES_DESCRIPTION,
  MEMORY_VS_TIME_DESCRIPTION,
  REVERSE_CODING_DESCRIPTION,
  SCRIBBLE_WORD_DESCRIPTION,
  TECH_QUIZ_DESCRIPTION,
  TREASURE_HUNT_DESCRIPTION,
} from "./eventDescription";

interface Amount {
  single: number;
  group?: number;
}
interface CardInfo {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  link: string;
  facultyCoordinator: string;
  studentCoordinators: string[];
  amount?: Amount;
  googleFormLink: string;
}

const generalAmount: Amount = {
  single: 50,
  group: 100,
};

export const cardInfo: CardInfo[] = [
  {
    title: "Dumb Charades",
    description: `Consisting of 3 rounds of fun and excitement, Dumb Charades is a game where you have to act out a phrase without speaking, while the other members of your team try to guess what the phrase is. The game is a test of your acting skills and how you can interpret the phrase.`,
    fullDescription: DUMB_CHARADES_DESCRIPTION,
    image: DUMB_CHARADES,
    link: "/events/dumb-charades",
    facultyCoordinator: "Mr. P. Krishna Prasad - 9701804086",
    studentCoordinators: ["Chandan - 8309443303", "Gautam - 7674051282"],
    amount: generalAmount,
    googleFormLink: "https://forms.gle/qv823oH23uSqd3e26",
  },
  {
    title: "Treasure Hunt",
    description: `Treasure Hunt is a game where you have to find the treasure by solving the clues. The clues are spread across CBIT college. Crack the elusive final clue to win prizes! Are you up for the challenge?`,
    fullDescription: TREASURE_HUNT_DESCRIPTION,
    image: TREASURE_HUNT,
    link: "/events/treasure-hunt",
    facultyCoordinator: "Mr. B. Srinivas SP Kumar - 8555007901",
    studentCoordinators: [
      "Nasreen - 8096531383",
      "Bhavana - 8106127971",
      "Maimona - 7995620324",
    ],
    amount: generalAmount,
    googleFormLink: "https://forms.gle/eSET8GvSSR8vqy4H9",
  },
  {
    title: "LAN Gaming",
    description: `LAN gaming is a form of multiplayer gaming where players connect to a local area network (LAN) to play video games. It is a form of computer gaming and console gaming. The players are able to play multiplayer games with others over the LAN network.`,
    image: LAN_GAMING,
    link: "/events/lan-gaming",
    facultyCoordinator: "Mr. P. Krishna Prasad - 9701804086",
    studentCoordinators: ["V. Akash - 6281236582", "K Raghu Teja - 8333855466"],
    amount: generalAmount,
    googleFormLink: "https://forms.gle/bCYaujTTfSME4tuG6",
  },
  {
    title: "Memory vs Time",
    description: `Memory vs Time is a game where you have to remember the sequence of colors and repeat it. The sequence will keep on increasing as you progress. The game is a test of your memory and how fast you can remember the sequence.`,
    fullDescription: MEMORY_VS_TIME_DESCRIPTION,
    image: MEMORY_VS_TIME,
    link: "/events/memory-vs-time",
    facultyCoordinator: "V. Kondal Reddy - 9441676536",
    studentCoordinators: ["V. Akash - 6281236582", "N. Rohith - 8008479045"],
    amount: generalAmount,
    googleFormLink: "https://forms.gle/U6mZQ4dDwD461eKYA",
  },
  {
    title: "Paper Presentation",
    description: `Are you ready to showcase your expertise and explore the latest advancements in technology?
    Join us for an exciting opportunity to present your research paper on cutting-edge technologies, algorithms, or topics in an IEEE format! Please reserve your spot early to secure your participation in this exciting event.`,
    image: PAPER_PRESENTATION,
    link: "/events/paper-presentation",
    facultyCoordinator: "Mr. Ramesh Ponnala - 9985145690",
    studentCoordinators: ["C. Vani - 8978792775", "J. Keerthi - 8688084402"],
    amount: {
      single: 400,
    },
    googleFormLink: "https://forms.gle/X86VnPgjq8ZPK4eDA",
  },
  {
    title: "Reverse Coding",
    description: `Crack the code snippets and choose the correct answers and also get ready to unleash your programming prowess to write programs in any language to tackle test cases! Are you ready ? while (true) { cout << 'register now!'; }.`,
    fullDescription: REVERSE_CODING_DESCRIPTION,
    image: REVERSE_CODING,
    link: "/events/reverse-coding",
    facultyCoordinator: "Mr. B. Srinivas SP Kumar - 8555007901",
    studentCoordinators: [
      "Vadla Alekhya - 7997443112",
      "V Alekhya - 9392045184",
    ],
    amount: {
      single: 50,
      group: 150,
    },
    googleFormLink: "https://forms.gle/Z5i4SrUzNkjSkfN86",
  },
  {
    title: "Scribble Word",
    description: `Scribble Word is a game where you have to guess the word by looking at the scribbled image. The game is a test of your imagination and how you can interpret the scribbled image.`,
    fullDescription: SCRIBBLE_WORD_DESCRIPTION,
    image: SCRIBBLE_WORD,
    link: "/events/scribble-word",
    facultyCoordinator: "Dr. M. Ram Chander - 9703144559",
    studentCoordinators: [
      "Rahul - 7036409755",
      "Arun - 9640317804",
      "Uma - 9390445501",
    ],
    amount: generalAmount,
    googleFormLink: "https://forms.gle/62KjRgNjJuVZ6JLB9",
  },

  {
    title: "Tech Quiz",
    description: `Tech Quiz is a game where you have to answer the questions related to technology. The game is a test of your knowledge and how you can answer the questions.`,
    fullDescription: TECH_QUIZ_DESCRIPTION,
    image: TECH_QUIZ,
    link: "/events/tech-quiz",
    facultyCoordinator: "Ms. Ts. Praveena - 9885976422",
    studentCoordinators: [
      "Zanitha Sree - 9553248443",
      "Keerthi Bhavani - 9381801959",
    ],
    amount: generalAmount,
    googleFormLink: "https://forms.gle/w4Xe9SJt5cYD3Va79",
  },
  {
    title: "Poster Presentation",
    description: `Poster Presentation is a process of presenting a topic to an audience. It is a way of showing the audience what you have done and what you have discovered. It is a way of sharing your knowledge and findings with others.`,
    image: PAPER_PRESENTATION,
    link: "/events/poster-presentation",
    facultyCoordinator: "Mr. Ramesh Ponnala - 9985145690",
    studentCoordinators: [
      "A. Bhavani - 7386364225",
      "B. Nikhitha - 7997452166",
    ],
    amount: {
      single: 400,
    },
    googleFormLink: "https://forms.gle/BZnghxn8ucZw8xss5",
  },

  {
    title: "Sound Engineering",
    description: `Sound Engineering is a game where you have to guess the song by listening to the sound. The game is a test of your hearing and how you can recognize the song.`,
    image: SOUND_ENGINEERING,
    link: "/events/sound-engineering",
    facultyCoordinator: "Dr. M. Ram Chander - 9703144559",
    studentCoordinators: [
      "Sunkara Ramya - 8179624621",
      "Shreelekha Manga - 7780693739",
    ],
    amount: generalAmount,
    googleFormLink: "https://forms.gle/VVuKnx9PLtRF3kmp6",
  },
];

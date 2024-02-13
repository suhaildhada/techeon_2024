import DUMB_CHARADES from "../assets/posters/dumb-charades.png";
import LAN_GAMING from "../assets/posters/lan-gaming.png";
import MEMORY_VS_TIME from "../assets/posters/memory-vs-time.png";
import PAPER_PRESENTATION from "../assets/posters/paper-presentation.png";
import REVERSE_CODING from "../assets/posters/reverse-coding.png";
import SCRIBBLE_WORD from "../assets/posters/scribble-word.png";
import SOUND_ENGINEERING from "../assets/posters/sound-engineer.png";
import TECH_QUIZ from "../assets/posters/tech-quiz.png";
import TRESURE_HUNT from "../assets/posters/treasure-hunt.png";

interface CardInfo {
  title: string;
  description: string;
  image: string;
  link: string;
  facultyCoordinator: string;
  studentCoordinators: string[];
}

export const cardInfo: CardInfo[] = [
  {
    title: "Dumb Charades",
    description: `"Dumb Charades" is a classic party game where players act out a word
            or phrase without speaking, while their teammates try to guess what
            it is. It's a fun and interactive way to test communication skills
            and creativity in a group setting.`,
    image: DUMB_CHARADES,
    link: "/events/dumb-charades",
    facultyCoordinator: "Mr. P. Krishna Prasad - 9701804086",
    studentCoordinators: ["Chandan - 8309443303", "Gautam - 7674051282"],
  },
  {
    title: "Treasure Hunt",
    description: `Treasure Hunt is a game where you have to find the treasure by solving the clues. The game is a test of your problem-solving skills and how you can solve the clues.`,
    image: TRESURE_HUNT,
    link: "/events/treasure-hunt",
    facultyCoordinator: "Mr. B. Srinivas SP Kumar - 8555007901",
    studentCoordinators: ["Nasreen - 8096531383", "Maimona - 7995620324"],
  },
  {
    title: "LAN Gaming",
    description: `LAN gaming is a form of multiplayer gaming where players connect to a local area network (LAN) to play video games. It is a form of computer gaming and console gaming. The players are able to play multiplayer games with others over the LAN network.`,
    image: LAN_GAMING,
    link: "/events/lan-gaming",
    facultyCoordinator: "Mr. P. Krishna Prasad - 9701804086",
    studentCoordinators: ["V. Akash - 6281236582", "K Raghu Teja - 8333855466"],
  },
  {
    title: "Memory vs Time",
    description: `Memory vs Time is a game where you have to remember the sequence of colors and repeat it. The sequence will keep on increasing as you progress. The game is a test of your memory and how fast you can remember the sequence.`,
    image: MEMORY_VS_TIME,
    link: "/events/memory-vs-time",
    facultyCoordinator: "V. Kondal Reddy - 9441676536",
    studentCoordinators: ["V. Akash - 6281236582", "N. Rohith - 8008479045"],
  },
  {
    title: "Paper Presentation",
    description: `Paper Presentation is a process of presenting a topic to an audience. It is a way of showing the audience what you have done and what you have discovered. It is a way of sharing your knowledge and findings with others.`,
    image: PAPER_PRESENTATION,
    link: "/events/paper-presentation",
    facultyCoordinator: "Mr. Ramesh Ponnala - 9985145690",
    studentCoordinators: ["C. Vani - 8978792775", "J. Keerthi - 8688084402"],
  },
  {
    title: "Reverse Coding",
    description: `Reverse Coding is a game where you have to guess the code by looking at the output. The game is a test of your logical thinking and how you can reverse engineer the code.`,
    image: REVERSE_CODING,
    link: "/events/reverse-coding",
    facultyCoordinator: "Mr. B. Srinivas SP Kumar - 8555007901",
    studentCoordinators: [
      "Vadla Alekhya - 7997443112",
      "V Alekhya - 9392045184",
    ],
  },
  {
    title: "Scribble Word",
    description: `Scribble Word is a game where you have to guess the word by looking at the scribbled image. The game is a test of your imagination and how you can interpret the scribbled image.`,
    image: SCRIBBLE_WORD,
    link: "/events/scribble-word",
    facultyCoordinator: "Dr. M. Ram Chander - 9703144559",
    studentCoordinators: [
      "Rahul - 7036409755",
      "Arun - 9640317804",
      "Uma - 9390445501",
    ],
  },

  {
    title: "Tech Quiz",
    description: `Tech Quiz is a game where you have to answer the questions related to technology. The game is a test of your knowledge and how you can answer the questions.`,
    image: TECH_QUIZ,
    link: "/events/tech-quiz",
    facultyCoordinator: "Ms. Ts. Praveena - 9885976422",
    studentCoordinators: [
      "Zanitha Sree - 9553248443",
      "Keerthi Bhavani - 9381801959",
    ],
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
  },
];

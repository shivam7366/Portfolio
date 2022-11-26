import { nanoid } from "nanoid";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import zero from "./images/project.jpg";

// HEAD DATA
export const headData = {
  title: "Shivam Gupta", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Full Stack Developer", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, my name is ",
  name: "Shivam Gupta",
  subtitle: "I am a Full Stack Developer",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "./images/profile.jpg",
  paragraphOne:
    "Hi all, I'm Shivam Gupta, A passionate Full Stack Web Developer and React Native & Flutter Mobile App Developer having an experience of building applications with HTML / CSS / JavaScript / Reactjs / Nextjs / Nodejs / React Native / Flutter / Bootstrap / Material UI / Tailwind / Ant Design / Webflow and some other cool libraries and frameworks and Databases (MongoDB, SQL, Firebase..)",
  paragraphTwo: "",
  paragraphThree: "",
  resume:
    "https://drive.google.com/file/d/1-DhlFgKrBvvpMK6Nm86M4_2hOPBWOFRN/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: one.src,
    title: "MBM University Website",
    info: "This is MBM University Website Created with Nextjs, Material Ui, Bootstrap.",
    info2: "Backend is created with datastack ",
    url: "https://mbm.ac.in",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: two.src,
    title: "Portfolio Website",
    info: "",
    info2: "",
    url: "https://shivam7366.github.io/Task-manager/",
    repo: "https://github.com/shivam7366/Task-manager", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: three.src,
    title: "Desi Rasoi",
    info: "A restaurant's website where you can order food. Technology - HTML,CSS,JS,React.js,Firebase",
    info2: "",
    url: "https://shivam7366.github.io/FoodCart/",
    repo: "https://github.com/shivam7366/FoodCart/tree/master", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "shivamkhandelwal1623@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "",
    },
    {
      id: nanoid(),
      name: "codepen",
      url: "",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "",
    },
    {
      id: nanoid(),
      name: "github",
      url: "",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

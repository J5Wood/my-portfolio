import picSurePhoto from "./assets/pic-sure-photo.png";
import flavorTownPhoto from "./assets/flavor-town-photo.png";
import coffeeTalkPhoto from "./assets/coffee-talk-photo.png";

const projectData = [
  {
    name: "Coffee Talk",
    imgSrc: coffeeTalkPhoto,
    imgAlt: "Preview of Coffee Talk app",
    description: "Coffee Talk is a coffee bean and brand review website",
    features: [
      "Fully built Ruby on Rails, MVC application",
      "Implemented user signup and login with Oauth and Github, and also basic username and password",
      "Follows RESTful conventions for all resources, including nested routes.",
    ],
    link: "https://github.com/J5Wood/coffee-talk",
  },
  {
    name: "Pic-Sure",
    imgSrc: picSurePhoto,
    imgAlt: "Preview of Pic-Sure app",
    description: "Pic-Sure is a website for sharing images",
    features: [
      "Built with a React/Redux frontend and a Rails API backend",
      "Uses JSON Web Tokens (JWT) for user login authentication",
      "Utilizes Active Storage for image storage",
    ],
    link: "https://github.com/J5Wood/pic-sure",
  },
  {
    name: "Flavor Town",
    imgSrc: flavorTownPhoto,
    imgAlt: "Preview of Flavor Town app",
    description:
      "Flavor Town is a website for documenting your bucket-list restaurants",
    features: [
      "Built with vanilla JavaScript on the frontend and a Rails API backend",
      "Employs Object Oriented JavaScript(OOJS)",
      "Incorporates resource filtering by city and restaurant style",
    ],
    link: "https://github.com/J5Wood/Flavor-Town",
  },
];

export default projectData;

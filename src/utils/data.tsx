import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNodeJs,
  FaPaperPlane,
  FaPhoneAlt,
  FaReact,
  FaSass,
  FaUser,
} from "react-icons/fa";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiGmail,
  SiJest,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import dtmoney from "../assets/images/dt-money.png";
import ignews from "../assets/images/ignews.png";
import imgExpressRentalx from "../assets/images/img-express.png";
import imgNestMicroservices from "../assets/images/img-nestjs.png";
import sensor from "../assets/images/nextjs-sensor-monitoring.png";
import work6 from "../assets/images/work6.png";
import { IIcon } from "../interfaces";

export const navLinks = ["home", "about", "skills", "portfolio"];

export const socialIcons: IIcon[] = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/iago-abner",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/iago-abner/",
  },
  {
    id: 3,
    icon: <SiGmail />,
    link: "mailto:iagoabner.dev@gmail.com",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Iago Abner",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+959883271929",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "iagoabner.dev@gmail.com",
  },
];

export const icons = [
  <SiTypescript />,
  <FaReact />,
  <FaSass />,
  <TbBrandNextjs />,
  <SiTailwindcss />,
  <FaNodeJs />,
  <SiExpress />,
  <SiPrisma />,
  <SiMongodb />,
  <SiDocker />,
  <SiJest />,
  <SiAmazonaws />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Internship - Python (automation)",
    company: "Singular",
  },
];

export const workImages = [
  {
    id: 1,
    img: sensor,
    name: "project 1",
    category: "web",
    gh: "https://github.com/iago-abner/next-monitoring",
    host: "https://next-temp-iago-abner.vercel.app/",
  },
  {
    id: 2,
    img: dtmoney,
    name: "project 2",
    category: "web",
    gh: "https://github.com/iago-abner/dt-money",
    host: "https://github.com/iago-abner",
  },
  {
    id: 3,
    img: ignews,
    name: "project 3",
    category: "web",
    gh: "https://github.com/iago-abner/ignews",
    host: "http://ignews-iago-abner.vercel.app/",
  },
  {
    id: 4,
    img: imgExpressRentalx,
    name: "project 4",
    category: "api",
    gh: "https://github.com/iago-abner/rentalx",
    host: "https://github.com/iago-abner",
  },
  {
    id: 5,
    img: imgNestMicroservices,
    name: "project 5",
    category: "api",
    gh: "https://github.com/iago-abner/microservices-nest",
    host: "https://github.com/iago-abner",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "mobile",
    gh: "https://github.com/iago-abner",
    host: "https://github.com/iago-abner",
  },
];

export const workNavs = ["All", "Web", "Api", "Mobile"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Natal-RN, Brasil",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "iagoabner.dev@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+55 84987248895",
  },
];

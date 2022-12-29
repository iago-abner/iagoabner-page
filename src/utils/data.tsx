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
import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";
import work4 from "../assets/images/work4.png";
import work5 from "../assets/images/work5.png";
import work6 from "../assets/images/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<FaGithub />, <FaLinkedin />, <SiGmail />];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Iago",
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
    img: work1,
    name: "project 1",
    category: "web",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

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

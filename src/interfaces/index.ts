import { StaticImageData } from "next/image";
import { IconBaseProps } from "react-icons";

export interface IWork {
  id: number,
  img: StaticImageData,
  name: string,
  category: string,
  gh: string,
  host: string,
}

export interface IIcon {
  id: number;
  link: string;
  icon: IconBaseProps;
}
import { StaticImageData } from "next/image";

export interface IWork {
  id: number,
  img: StaticImageData,
  name: string,
  category: string,
  gh: string,
  host: string,
}

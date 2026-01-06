import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface NavLink {
  link: string;
  title: string | ReactNode;
}

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export interface Trainer {
  id: number;
  name: string;
  image: string;
  description: string;
  specialties: string[];
}

import { HiUser, HiUserGroup } from "react-icons/hi";
import { TbStretching, TbMedicalCross, TbApple } from "react-icons/tb";
import {
  MdOutlineSportsGymnastics,
  MdOutlineFitnessCenter,
} from "react-icons/md";

import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    icon: HiUser,
    title: "Individualized Training Programs",
    description:
      "Personalized workout plans tailored to your specific goals and fitness level.",
  },
  {
    icon: HiUserGroup,
    title: "Group Training",
    description:
      "Dynamic group sessions that combine motivation with effective workouts.",
  },
  {
    icon: MdOutlineFitnessCenter,
    title: "Athlete Rehabilitation & Training",
    description:
      "Specialized programs for athlete recovery and performance enhancement.",
  },
  {
    icon: TbStretching,
    title: "Classes",
    description:
      "Structured fitness classes designed for all fitness levels and interests.",
  },
  {
    icon: TbMedicalCross,
    title: "Physiotherapy",
    description:
      "Professional physiotherapy services to help you recover and prevent injuries.",
  },
  {
    icon: TbApple,
    title: "Dietitian",
    description:
      "Expert nutritional guidance to complement your fitness journey.",
  },
  {
    icon: MdOutlineSportsGymnastics,
    title: "Pilates",
    description:
      "Core-strengthening Pilates sessions for improved flexibility and balance.",
  },
];

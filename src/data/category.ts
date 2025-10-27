import { CategoryType } from "@/type";
import {
  Camera,
  Cpu,
  Dumbbell,
  Film,
  Gamepad,
  Hamburger,
  Music,
  Plane,
  Play,
  Shirt,
  Smile,
} from "lucide-react";

export const categories: CategoryType[] = [
  {
    name: "Youtube",
    link: "/kategori",
    icon: Play,
  },
  {
    name: "Tiktok",
    link: "/kategori",
    icon: Music,
  },
  {
    name: "Technology",
    link: "/kategori",
    icon: Cpu,
  },
  {
    name: "Beauty & Fashion",
    link: "/kategori",
    icon: Shirt,
  },
  {
    name: "Gaming",
    link: "/kategori",
    icon: Gamepad,
  },
  {
    name: "Food & Beverages",
    link: "/kategori",
    icon: Hamburger,
  },
  {
    name: "Health & Sport",
    link: "/kategori",
    icon: Dumbbell,
  },
  {
    name: "Travel & Lifestyle",
    link: "/kategori",
    icon: Plane,
  },
  {
    name: "Entertaiment",
    link: "/kategori",
    icon: Film,
  },
  {
    name: "Content Creator",
    link: "/kategori",
    icon: Camera,
  },
  {
    name: "Mom & Kids",
    link: "/kategori",
    icon: Smile,
  },
];

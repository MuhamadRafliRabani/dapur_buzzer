import { ILNType } from "@/type";
import {
  File,
  FlagTriangleRight,
  Home,
  Layers,
  MessageCircle,
  User,
  Users,
  Zap,
} from "lucide-react";

export const itemListNavbarMobile: ILNType[] = [
  {
    trigger: "Home",
    link: "/",
    icon: Home,
    child: null,
  },
  {
    trigger: "About",
    link: "/about",
    icon: User,
    child: null,
  },
  {
    trigger: "Influencer",
    link: "",
    icon: Zap,
    child: [
      {
        title: "List Influencer",
        link: "/influencer",
        desc: "Find influencer that you want collaborate",
      },
      {
        title: "Rekomended Influencer",
        link: "/influencer/rekomend",
        desc: "Find influencer with great record",
      },
      {
        title: "Search Influencer",
        link: "/influencer",
        desc: "Search influencer that you want collaborate",
      },
    ],
  },
  {
    trigger: "Campaign",
    link: "",
    icon: FlagTriangleRight,
    child: [
      {
        title: "List Campaign",
        link: "",
        desc: "Here Is the List of current campaign",
      },
      {
        title: "Buat Campaign",
        link: "/campaign/create",
        desc: "Make your own campaign",
      },
    ],
  },
  {
    trigger: "Package",
    link: "",
    icon: Layers,
    child: [
      {
        title: "Nano Influencer Package",
        link: "/package",
        desc: "It`s the list of Nano influencer package",
      },
      {
        title: "Micro Influencer Package",
        link: "/package",
        desc: "It`s the list of Micro influencer package",
      },
    ],
  },
  {
    trigger: "Join Influencer",
    link: "/join",
    icon: Users,
    child: null,
  },
  {
    trigger: "Terms & Conditions",
    link: "/terms",
    icon: File,
    child: null,
  },
  {
    trigger: "FAQ",
    link: "/faqs",
    icon: MessageCircle,
    child: null,
  },
];

export const itemListNavbar: ILNType[] = [
  {
    trigger: "Home",
    link: "/",
    icon: Home,
    child: null,
  },
  {
    trigger: "About",
    link: "/about",
    icon: User,
    child: [
      {
        title: "Join Influencer",
        link: "/join",
        desc: "",
      },
      {
        title: "Terms & Conditions",
        link: "/terms",
        desc: "",
      },
      {
        title: "FAQ",
        link: "/faqs",
        desc: "",
      },
    ],
  },
  {
    trigger: "Influencer",
    link: "",
    icon: Zap,
    child: [
      {
        title: "List Influencer",
        link: "/influencer",
        desc: "Find influencer that you want collaborate",
      },
      {
        title: "Rekomended Influencer",
        link: "/influencer/rekomend",
        desc: "Find influencer with great record",
      },
      {
        title: "Search Influencer",
        link: "/influencer",
        desc: "Search influencer that you want collaborate",
      },
      {
        title: "Nano Influencer Package",
        link: "/packages",
        desc: "Search influencer that you want collaborate",
      },
      {
        title: "Micro Influencer Package",
        link: "/packages",
        desc: "Search influencer that you want collaborate",
      },
    ],
  },
  {
    trigger: "Campaign",
    link: "",
    icon: FlagTriangleRight,
    child: [
      {
        title: "List Campaign",
        link: "",
        desc: "Here Is the List of current campaign",
      },
      {
        title: "Buat Campaign",
        link: "/campaign/create",
        desc: "Make your own campaign",
      },
    ],
  },
];

import { LucideProps } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface responseApi {
  id?: string;
  creby?: string;
  cretime?: string;
  modby?: string;
  modtime?: string;
}

export interface ILNType {
  trigger: string;
  link: Url;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  child: CILNType[] | null;
}

export interface CILNType {
  title: string;
  link: Url;
  desc: string;
}

export interface ImageType {
  image: string;
  alt: string;
}

export interface MCType {
  image: string;
  alt: string;
}

export interface CategoryType extends responseApi {
  name: string;
  link: string;
  icon: string;
}

export interface InfluencerType {
  name: string;
  domisili?: string;
  kategori?: string[];
  image: string;
  images?: ImageType[];
  instagram?: SelebgramType;
  tiktok?: TiktokType;
  desc: string;
  service?: string[];
}

export interface SelebgramType {
  account_name: string;
  followers: number;
  everage_like?: number;
  everage_rate?: number;
  everage_comment?: number;
}

export interface TiktokType {
  account_name: string;
  followers: number;
  everage_like?: number;
  everage_rate?: number;
  everage_view?: number;
}

export interface VAType {
  profile_pic_url: string;
  full_name: string;
  username: string;
  biography: string;
  external_url: string;
  follower_count: number;
  following_count: string;
  media_count: string;
  is_private: boolean;
  is_verified: boolean;
  has_profile_pic: boolean;
  profile_pic_proxy: string;
}

export interface CFType {
  brand: string;
  platform: string;
  media: string;
  jenisPromosi: string;
  jenisKonten: string;
  jumlahTalent: string;
  minFollowers: string;
  gender: string;
  budget: string;
}

export interface TermType {
  title: string;
  desc: string;
}

export interface FaqType {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  question: string;
  answer: string;
}

export interface PCType {
  image: string;
  name: string;
  desc: string;
  price: string;
  detail_package: {
    status: boolean;
    desc: string;
  }[];
  example?: string;
  terms: string[];
}

export interface testimonialsType {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

"use client";
import AppLayout from "@/components/layout/app-layout";
import { influencer } from "@/data/influencer";
import { nFormatter } from "@/hooks/use-nformater";
import { calEngagementRate } from "@/lib/engagement-rate";
import { slug } from "@/lib/slug";
import { Award, Check, Instagram, User, Zap } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TourProvider, useTour } from "@reactour/tour";
import Portofolio from "@/components/portofolio";
import { useIsMobile } from "@/hooks/useIsMobile";

const steps = [
  {
    selector: "#contact-now",
    content: (
      <div className="text-base">
        <span className="!size-4 !rounded-full !bg-primary/80 mt-2 !border-none"></span>{" "}
        Klik di sini untuk menghubungi influencer melalui Dapurbuzzer.
      </div>
    ),
  },
  {
    selector: "#instagram",
    content: (
      <div className="text-base">
        <span className="!size-4 !rounded-full !bg-primary/80 mt-2 !border-none"></span>{" "}
        Klik disini untuk melihat statistik Instagram.
      </div>
    ),
  },
  {
    selector: "#tiktok",
    content: (
      <div className="text-base">
        <span className="!size-4 !rounded-full !bg-primary/80 mt-2 !border-none"></span>{" "}
        Klik disini untuk melihat statistik TikTok.
      </div>
    ),
  },
];

function StartTourOnMount() {
  const { setIsOpen } = useTour();
  const isMobile = useIsMobile();

  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), isMobile ? 150 : 200);
    return () => clearTimeout(t);
  }, [setIsOpen, isMobile]);

  return null;
}

const Page = () => {
  return (
    <AppLayout>
      <TourProvider steps={steps}>
        <StartTourOnMount />
        <InfluencerDetail />
      </TourProvider>
    </AppLayout>
  );
};

export default Page;

function InfluencerDetail() {
  // handle data person
  const pathName = usePathname();
  const person = pathName.split("/");
  const influencerPerson = influencer.find(
    (item) => slug(item.name) == person[person.length - 1]
  );
  const isMobile = useIsMobile();

  // handle set summary
  const [summary, setSummary] = useState<"instagram" | "tiktok" | "">(
    !isMobile ? "instagram" : ""
  );

  return (
    <div className="space-y-3 sm:grid grid-cols-2 gap-4 sm:mt-4">
      {/* card profile */}
      <div className="w-[350px] mx-auto bg-accent-foreground sm:w-full rounded-3xl sm:rounded-md shadow-md overflow-hidden border border-accent/20">
        {/* Background cover */}
        <div className="p-4 relative">
          <Image
            src={influencerPerson?.image ?? ""}
            alt={influencerPerson?.name ?? ""}
            width={400}
            height={550}
            className=" h-40 rounded-3xl object-cover opacity-80 w-full lg:h-45"
          />
          <div className="absolute top-5 right-5 group size-10 flex items-center justify-center text-accent-foreground">
            <div
              id="contact-now"
              className="rounded-full bg-primary flex items-center justify-center size-10 group-hover:scale-95 transition-transform duration-300"
            >
              <Zap className="size-4" />
            </div>

            <p className="absolute right-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-2 border-primary border bg flex bg-primary text-accent-foreground text-sm whitespace-nowrap transition-all duration-300 p-2 rounded-2xl ">
              Contact Now
            </p>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative flex flex-col items-center -mt-4 px-4">
          <Image
            src={influencerPerson?.image ?? ""}
            alt={influencerPerson?.name ?? ""}
            width={100}
            height={100}
            className="rounded-full border-4 lg:size-30 border-white shadow-md object-cover absolute left-6 -top-10 lg:-top-15 lg:left-8"
          />

          <div className="flex flex-wrap justify-center gap-2 mt-3 ps-26 lg:ps-20 lg:justify-start">
            {influencerPerson?.kategori?.map((item: string, i: number) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-primary/10 text-primary font-medium rounded-full border border-primary/20"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 ps-6  w-full">
            <h2 className="text-lg font-semibold">{influencerPerson?.name}</h2>
            <p className="text-sm text-muted-foreground lg:w-1/2 flex items-center justify-center gap-1">
              {/* <MapPin className="size-3" /> */}
              {influencerPerson?.desc}
            </p>
          </div>
        </div>
        <div className="mt-6 w-full">
          {/* Row 1 - Stats */}
          <div className="grid grid-cols-3 divide-x divide-accent/20 text-center">
            <div className="py-2">
              <p className="font-semibold text-sm">
                {nFormatter(influencerPerson?.instagram?.everage_like)}
              </p>
              <p className="text-xs text-muted-foreground">Likes</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-sm">
                {nFormatter(influencerPerson?.tiktok?.everage_view)}
              </p>
              <p className="text-xs text-muted-foreground">Views</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-sm">5</p>
              <p className="text-xs text-muted-foreground">Serive</p>
            </div>
          </div>

          {/* Row 2 - Icons */}
          <div className="grid grid-cols-3 divide-x divide-accent/20 text-center border-t border-accent/10">
            <div
              onClick={() => setSummary("instagram")}
              className="py-3 flex justify-center items-center bg-accent/5"
            >
              <div
                id="instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="size-5" />
              </div>
            </div>
            <div
              onClick={() => setSummary("tiktok")}
              className="py-3 flex justify-center items-center bg-accent/5"
            >
              <div id="tiktok" className="hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M12.5 2h2a4.5 4.5 0 004.5 4.5v2a6.5 6.5 0 01-4.5-1.7V17a5 5 0 11-5-5h.5v2A3 3 0 1012.5 17V2z" />
                </svg>
              </div>
            </div>
            <div className="py-3 flex justify-center items-center bg-accent/5">
              <div className="hover:text-primary transition-colors">
                <Award className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* summary */}
      {summary == "instagram" && (
        <div className="w-[350px] mx-auto sm:w-full bg-accent-foreground rounded-md shadow-md overflow-hidden border border-accent/20">
          <div className="p-2 bg-accent/5">
            <h2 className="flex items-center gap-2 font-medium lg:font-semibold">
              <Instagram className="size-5" />
              Summary Instagram
            </h2>
          </div>

          <div className="grid grid-cols-2 place-content-center gap-4 divide-x  divide-accent/20 text-center py-2">
            <div className="">
              <p className="font-semibold ">
                {nFormatter(influencerPerson?.instagram?.followers)}
              </p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-sm">
                {calEngagementRate(
                  influencerPerson?.instagram?.everage_like,
                  influencerPerson?.instagram?.everage_comment,
                  influencerPerson?.instagram?.followers
                )}
              </p>
              <p className="text-xs text-muted-foreground">Engagement Rate</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-sm">
                {nFormatter(influencerPerson?.instagram?.everage_like)}
              </p>
              <p className="text-xs text-muted-foreground">Average Like</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-sm">
                {nFormatter(influencerPerson?.instagram?.everage_comment)}
              </p>
              <p className="text-xs text-muted-foreground">Average Comment</p>
            </div>
          </div>

          <div className="pb-4">
            <div className="p-2 bg-accent/5">
              <h2 className="flex items-center gap-2 font-medium lg:font-semibold">
                <User className="size-5" />
                Service
              </h2>
            </div>
            <div className="px-4">
              <ul>
                {influencerPerson?.service?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 ">
                    <Check className="size-4 lg:size-5 text-green-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {summary == "tiktok" && (
        <div className="w-[350px] mx-auto sm:w-full bg-accent-foreground rounded-md shadow-md overflow-hidden border border-accent/20">
          <div className="p-2 bg-accent/5">
            <h2 className="flex items-center gap-2 font-medium lg:font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M12.5 2h2a4.5 4.5 0 004.5 4.5v2a6.5 6.5 0 01-4.5-1.7V17a5 5 0 11-5-5h.5v2A3 3 0 1012.5 17V2z" />
              </svg>
              Summary Tiktok
            </h2>
          </div>

          <div className="grid grid-cols-2 place-content-center gap-4 divide-x  divide-accent/20 text-center py-2">
            <div className="">
              <p className="font-semibold ">
                {nFormatter(influencerPerson?.tiktok?.followers)}
              </p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-sm">
                {calEngagementRate(
                  influencerPerson?.tiktok?.everage_like,
                  influencerPerson?.tiktok?.everage_view,
                  influencerPerson?.tiktok?.followers
                )}
              </p>
              <p className="text-xs text-muted-foreground">Engagement Rate</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-sm">
                {nFormatter(influencerPerson?.tiktok?.everage_like)}
              </p>
              <p className="text-xs text-muted-foreground">Average Like</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-sm">
                {nFormatter(influencerPerson?.tiktok?.everage_view)}
              </p>
              <p className="text-xs text-muted-foreground">Average Comment</p>
            </div>
          </div>

          <div className="pb-4">
            <div className="p-2 bg-accent/5">
              <h2 className="flex items-center gap-2 font-medium lg:font-semibold">
                <User className="size-5" />
                Service
              </h2>
            </div>
            <div className="px-4">
              <ul>
                {influencerPerson?.service?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 ">
                    <Check className="size-4 lg:size-5 text-green-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* portofolio */}
      <Portofolio influencerPerson={influencerPerson} />
    </div>
  );
}

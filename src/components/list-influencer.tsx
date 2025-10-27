import { influencer } from "@/data/influencer";
import Card from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Plane } from "lucide-react";
import HeaderSection from "./header-section";

const ListInfluencer = () => {
  return (
    <div className="space-y-2 rounded-xl shadow p-4 px-0.5 bg-accent-foreground sm:px-2">
      <HeaderSection text="Influencers Lainnya ✨" />
      <div className="mx-auto grid w-fit grid-cols-2 place-items-center justify-items-center gap-2 sm:h-full sm:w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-4">
        {influencer.map((item, i) => (
          <Card key={i} data={item} full_card={false} />
        ))}
      </div>

      <Link href={"/influencer"}>
        <Button className="w-full flex items-center justify-center gap-2 hover:border hover:border-primary">
          <Plane className="size-4" /> Lihat semua influencer
        </Button>
      </Link>
    </div>
  );
};

export default ListInfluencer;

import AppLayout from "@/components/layout/app-layout";
import Card from "@/components/ui/card";
import { influencer } from "@/data/influencer";
import React from "react";

const RekomendPage = () => {
  const rekomendInfluencerData = influencer.filter((item) => {
    if (item.instagram?.followers && item.tiktok?.followers) {
      return item.instagram?.followers + item.tiktok?.followers >= 100000;
    }
    return 0;
  });

  return (
    <AppLayout>
      <h1 className="my-2 px-2 font-semibold tracking-wide md:mt-8">
        Rekomend Influencer ✨
      </h1>
      <div className="mx-auto grid w-fit grid-cols-2 place-items-center justify-items-center gap-3 sm:h-full sm:w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {rekomendInfluencerData.length > 0 ? (
          rekomendInfluencerData.map((item, i) => (
            <Card key={i} data={item} full_card={false} />
          ))
        ) : (
          <p className="text-center text-muted-foreground mt-10 col-span-full">
            Tidak ada influencer yang cocok dengan filter ini 😢
          </p>
        )}
      </div>
    </AppLayout>
  );
};

export default RekomendPage;

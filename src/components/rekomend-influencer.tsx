import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Card from "./ui/card";
import { influencer } from "@/data/influencer";
import HeaderSection from "./header-section";

const RekomendInfluencer = () => {
  const RekomendInfluencerData = influencer.slice(0, 7);

  return (
    <div className="space-y-2 rounded-xl shadow p-4 px-2 bg-accent-foreground sm:px-4">
      <HeaderSection
        text="Rekomendasi Influencer ✨"
        link="/influencer/rekomend"
      />
      <Carousel>
        <CarouselContent className="gap-0">
          {RekomendInfluencerData.map((item, i) => (
            <CarouselItem
              key={i}
              className="basis-[55%] flex justify-center pl-3 first:pl-4 sm:basis-[29%] lg:basis-[19%]"
            >
              <Card data={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default RekomendInfluencer;

import { InfluencerType } from "@/type";
import { Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

const Portofolio = ({
  influencerPerson,
}: {
  influencerPerson: InfluencerType | undefined;
}) => {
  return (
    <div className="sm:w-full w-[350px] mx-auto bg-accent-foreground rounded-md shadow-md overflow-hidden border border-accent/20 sm:col-span-2">
      <div className="p-2 bg-accent/5 ">
        <h2 className="flex items-center gap-2 justify-center">
          Portofolio {influencerPerson?.name}{" "}
          <Zap className="size-4 text-yellow-400" />
        </h2>
      </div>

      <Carousel>
        <CarouselContent className="py-2 px-4">
          {influencerPerson?.images?.map((item, i) =>
            influencerPerson.images?.length ?? [].length > 1 ? (
              <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/3">
                <Image
                  src={item?.image ?? ""}
                  alt={item.alt ?? ""}
                  width={400}
                  height={550}
                  className=" h-full object-cover opacity-80 rounded-xl "
                />
              </CarouselItem>
            ) : (
              <CarouselItem key={i} className="sm:basis-full">
                <Image
                  src={item?.image ?? ""}
                  alt={item.alt ?? ""}
                  width={400}
                  height={550}
                  className=" h-full object-cover opacity-80 w-full rounded-xl "
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Portofolio;

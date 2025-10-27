"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { mainCarousel } from "@/data/Carousel";
import Image from "next/image";

const MainCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full space-y-3">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Fade(), Autoplay({ delay: 5000 })]}
        className="w-full"
      >
        <CarouselContent className="w-full -ms-2 sm:ms-1">
          {mainCarousel.map((item, i) => (
            <CarouselItem
              key={i}
              className="w-full h-50 sm:h-90 overflow-hidden lg:h-120"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={900}
                height={500}
                className="w-full sm:object-fill h-full object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-end pe-3 gap-0.5">
        {mainCarousel.map((_, i) => (
          <span
            key={i}
            className={`border-primary border rounded-full size-2 ${
              current == i ? "bg-primary/80" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;

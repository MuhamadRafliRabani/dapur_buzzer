"use client";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Link from "next/link";
import HeaderSection from "./header-section";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { CategoryType } from "@/type";
import { getIconByName } from "@/lib/icon";
import { slug } from "@/lib/slug";

const Category = () => {
  const [data, setData] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("🚀 ~ Category ~ loading:", loading);

  const getCategories = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/categories");

      if (data.status !== 500) {
        setData(data.data);
      }

      setLoading(false);
      return null;
    } catch (error) {
      console.error("Failed to fetch categories", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const chunkArray = (arr: CategoryType[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <div className="bg-accent-foreground space-y-2 py-4 px-3 rounded-xl shadow">
      <HeaderSection text="Categories ✨" />
      <Carousel>
        <CarouselContent>
          {chunkArray(loading ? [...Array(6)] : data, 6).map((group, i) => (
            <CarouselItem
              key={i}
              className="grid grid-cols-3 grid-rows-2 gap-6 py-4"
            >
              {loading &&
                [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 items-center animate-pulse"
                  >
                    <div className="w-7 h-7 bg-accent/10 rounded-md" />
                    <div className="w-16 h-3 bg-accent/10 rounded-md" />
                  </div>
                ))}

              {!loading &&
                group.map((item, i) => {
                  const Icon = getIconByName(item.icon);
                  return (
                    <div key={i}>
                      <Link
                        href={"/categories?id=" + item.id}
                        className="flex flex-col gap-2 items-center w-full justify-center"
                      >
                        <Icon className="stroke-[1.5] size-6 text-primary lg:size-7" />
                        <p className="text-sm font-medium text-center whitespace-nowrap lg:font-semibold">
                          {item.name}
                        </p>
                      </Link>
                    </div>
                  );
                })}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Category;

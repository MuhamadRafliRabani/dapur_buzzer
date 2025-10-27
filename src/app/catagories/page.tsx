"use client";
import AppLayout from "@/components/layout/app-layout";
import Card from "@/components/ui/card";
import { influencer } from "@/data/influencer";
import { api } from "@/lib/api";
import { slug } from "@/lib/slug";
import { CategoryType } from "@/type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [data, setData] = useState<CategoryType>();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const influencerPerson = influencer.filter((item, i) =>
    item.kategori?.includes(data?.name ?? "")
  );

  const getCategories = async () => {
    try {
      const { data } = await api.get(`/categories/show/${id}`);

      if (data.status !== 500) {
        setData(data.data);
      }

      return null;
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <AppLayout>
      <div className="md:min-h-[80vh]">
        <h1 className="my-2 px-2 font-semibold tracking-wide md:mt-8">
          Influencer with category {data?.name} ✨
        </h1>
        <div className="mx-auto grid w-fit grid-cols-2 place-items-center justify-items-center gap-3 sm:h-full sm:w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
          {influencerPerson.length > 0 ? (
            influencerPerson.map((item, i) => (
              <Card key={i} data={item} full_card={false} />
            ))
          ) : (
            <p className="text-center text-muted-foreground mt-10 col-span-full">
              Tidak ada influencer yang cocok dengan filter ini 😢
            </p>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default CategoryPage;

"use client";
import { useState, useMemo } from "react";
import Card from "@/components/ui/card";
import AppLayout from "@/components/layout/app-layout";
import { influencer } from "@/data/influencer";
import FilterBar from "@/components/filterBar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Filter } from "lucide-react";
import HeaderSection from "@/components/header-section";

export interface filters {
  search: string;
  domisili: string;
  kategori: string;
}

export default function InfluencerPage() {
  const [filters, setFilters] = useState<filters>({
    search: "",
    domisili: "",
    kategori: "",
  });

  const filteredInfluencers = useMemo(() => {
    return influencer.filter((item) => {
      if (item.domisili && item.kategori) {
        const matchName = item.name
          .toLowerCase()
          .includes(filters.search.toLowerCase());

        const matchDomisili =
          !filters.domisili ||
          item.domisili.toLowerCase() === filters.domisili.toLowerCase();

        const matchKategori =
          !filters.kategori || item.kategori.includes(filters.kategori);

        return matchName && matchDomisili && matchKategori;
      }
    });
  }, [filters]);

  return (
    <AppLayout>
      <div className="space-y-6 text-accent">
        <FilterBar filters={filters} setFilters={setFilters} />

        <HeaderSection text="List Influencers ✨" />
        <div className="mx-auto grid w-fit grid-cols-2 place-items-center justify-items-center gap-3 sm:h-full sm:w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredInfluencers.length > 0 ? (
            filteredInfluencers.map((item, i) => (
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
}

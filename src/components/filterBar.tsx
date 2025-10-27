"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Search, Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

type FilterState = {
  search: string;
  domisili: string;
  kategori: string;
};

export default function FilterBar({
  filters,
  setFilters,
}: {
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
}) {
  const [open, setOpen] = useState(false);

  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-accent-foreground shadow-sm border border-gray-100 rounded-2xl p-4 flex items-center justify-between gap-4 sticky top-4 z-50 backdrop-blur-md">
      {/* Input Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 text-accent/70" size={18} />
        <Input
          type="text"
          placeholder="Cari nama influencer..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          className="w-full pl-10 pr-3 py-2 border border-accent/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Tombol Trigger Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-primary text-accent-foreground hover:bg-accent-foreground hover:text-primary"
          >
            <Filter className="size-4" />
            <span className="hidden md:inline">Filter</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 sm:w-80 ">
          <SheetHeader className="pb-2 border-b border-accent/5">
            <SheetTitle>Filter Influencer</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-4 px-4">
            {/* Filter Domisili */}
            <div>
              <label className="text-sm font-medium text-accent/70">
                Domisili
              </label>
              <Input
                type="text"
                placeholder="Kota atau Kabupaten"
                value={filters.domisili}
                onChange={(e) => handleChange("domisili", e.target.value)}
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/30 focus:outline-none text-md"
              />
            </div>

            {/* Filter Kategori */}
            <div>
              <label className="text-sm font-medium text-accent/70">
                Kategori
              </label>
              <select
                value={filters.kategori}
                onChange={(e) => handleChange("kategori", e.target.value)}
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/30 focus:outline-none text-accent/70 text-md"
              >
                <option value="">Semua Kategori</option>
                <option value="Fashion">Fashion</option>
                <option value="Beauty">Beauty</option>
                <option value="Technology">Technology</option>
                <option value="Gaming">Gaming</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
              </select>
            </div>

            {/* Tombol Reset */}
            <Button
              variant="ghost"
              onClick={() =>
                setFilters({ search: "", domisili: "", kategori: "" })
              }
              className="mt-2"
            >
              Reset Filter
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

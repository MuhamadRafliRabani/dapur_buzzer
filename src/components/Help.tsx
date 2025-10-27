"use client";
import { useState } from "react";
import { MessageCircle, Plus } from "lucide-react";
import Link from "next/link";

const Help = () => {
  const [showPlus, setShowPlus] = useState(false);

  const handleEnter = () => setShowPlus(true);
  const handleLeave = (e: React.MouseEvent) => {
    const related = e.relatedTarget as HTMLElement | null;
    if (!related || !e.currentTarget.contains(related)) {
      setShowPlus(false);
    }
  };

  return (
    <div
      className="fixed left-[85%] bottom-8 flex flex-col items-center gap-4 h-fit"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className={`relative size-10 flex items-center justify-center text-accent-foreground transition-all duration-500 ${
          showPlus
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <div className="relative group size-10 flex items-center justify-center text-accent-foreground">
          <div className="rounded-full border-primary border bg flex bg-accent-foreground text-primary items-center justify-center size-10 transition-transform duration-300 group-hover:scale-95">
            <Plus className="size-4" />
          </div>

          <p className="absolute right-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 bg-primary text-white text-sm whitespace-nowrap transition-all duration-300 delay-200 p-2 rounded-2xl ">
            Gabung bersama kami
          </p>
        </div>
      </div>

      <div className="relative group size-10 flex items-center justify-center text-accent-foreground">
        <Link href={"https://api.whatsapp.com/send?phone=6281356785992"}>
          <div className="rounded-full bg-primary flex items-center justify-center size-10 group-hover:scale-95 transition-transform duration-300">
            <MessageCircle className="size-4" />
          </div>

          <p className="absolute right-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-2 border-primary border bg flex bg-accent-foreground text-primary text-sm whitespace-nowrap transition-all duration-300 p-2 rounded-2xl ">
            Tanya tentang Dapur Buzzer
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Help;

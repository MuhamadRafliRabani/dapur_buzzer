import { testimonials } from "@/data/testimoni";
import { Quote } from "lucide-react";
import Image from "next/image";

const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => (
  <div className="p-6 rounded-2xl shadow-sm space-y-4 bg-accent-foreground h-72 flex flex-col transition-all duration-300 hover:bg-accent-foreground group">
    <Quote className="text-primary w-6 h-6 bg-accent-foreground transition-colors" />

    <div className="flex-1 overflow-hidden">
      <p className="text-sm text-gray-700 leading-relaxed line-clamp-5 group-hover:line-clamp-8 bg-accent-foreground transition-colors">
        {item.text}
      </p>
    </div>

    <div className="flex items-center gap-3 pt-2">
      <Image
        src={item.avatar}
        alt={item.name}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
      <div>
        <p className="font-medium text-sm group-hover:text-accent transition-colors">
          {item.name}
        </p>
        <p className="text-xs text-accent/90 group-hover:text-accent/80 transition-colors">
          {item.role}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;

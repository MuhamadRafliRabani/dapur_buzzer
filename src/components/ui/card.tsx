import { User, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { InfluencerType } from "@/type";
import { nFormatter } from "@/hooks/use-nformater";
import Link from "next/link";
import { slug } from "@/lib/slug";

const Card = ({
  data,
  full_card = true,
}: {
  data: InfluencerType;
  full_card?: boolean;
}) => {
  const calFollowers = () => {
    const ig = data.instagram?.followers ?? 0;
    const tt = data.tiktok?.followers ?? 0;
    return nFormatter(ig + tt);
  };

  return (
    <div
      className={`group relative text-accent px-1 rounded-3xl w-51 overflow-hidden h-80 sm:h-83 py-2 ${
        full_card ? "bg-background shadow-2xs " : "shadow-xs h-70 sm:h-73 w-50"
      }`}
    >
      <Link href={`/influencer/${slug(data.name)}`}>
        <Image
          src={data.image}
          alt={data.image}
          width={200}
          height={500}
          className="w-[93%] h-44 group-hover:h-full border-[0.2px] border-accent/40 object-cover transition-all duration-500 ease-in-out mx-auto rounded-3xl"
        />
      </Link>

      {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

      <div className="absolute bottom-2 left-2 right-2 transition-all duration-500">
        <div className="glass-card px-3 py-2 rounded-b-3xl">
          <Link href={`/influencer/${slug(data.name)}`}>
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-1 sm:text-md">
              {data.name}
              {/* <span className="text-green-500 text-lg">✔</span> */}
            </h2>
            <p className="text-xs text-accent/80 w-full text-pretty mt-1 sm:text-sm lg:font-medium">
              Product Designer who focuses on simplicity & usability.
            </p>
          </Link>

          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-3 text-sm text-accent sm:text-md">
              <span className="flex items-center gap-1 lg:font-medium">
                <User className="size-4 sm:size-5" /> {calFollowers()}
              </span>
              {/* <span className="flex items-center gap-1">
                <Instagram className="size-4 sm:size-5" /> {data.account_name}
              </span> */}
            </div>

            <Button
              size="sm"
              className="rounded-full bg-primary text-accent-foreground hover:text-primary hover:bg-accent-foreground hover:border hover:border-primary text-xs px-3 py-1 flex items-center gap-1"
            >
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=6281356785992&text=Halo%20Dapur%20Buzzer%20Indonesia%2C%20%0A%0ASaya%20tertarik%20kepada%20talent%20%2A%40enggahidris%2A%20untuk%20melakukan%20promosi%20atau%20kampanye.%20%0A%0AMohon%20infokan%20fee%20atau%20rate%20cardnya.%20Terima%20Kasih."
                }
              >
                <Zap className="size-4 sm:size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

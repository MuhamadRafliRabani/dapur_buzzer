import { numberFormat } from "@/lib/number-format";
import { PCType } from "@/type";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { slug } from "@/lib/slug";

const PackageCard = ({ image, name, desc, price }: PCType) => {
  return (
    <div className="flex px-2 py-4 bg-accent-foreground rounded-2xl shadow-sm items-center gap-3">
      <Link href={`/packages/${slug(name)}`} className="w-fit h-fit">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="w-30 h-25 object-cover rounded-xl"
        />
      </Link>

      <Link href={`/packages/${slug(name)}`} className="flex-1">
        <div>
          <h3 className="text-gray-900 font-semibold text-md text-pretty sm:text-base">
            {name}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 sm:text-sm ">
            {desc}
          </p>
          <p className="font-semibold mt-2 text-accent text-md sm:text-base">
            Rp. {numberFormat(price)}
          </p>
        </div>
      </Link>

      <Button className="bg-primary p-3 rounded-xl text-accent-foreground shadow-md transition mt-auto sm:p-4">
        <Link
          href={
            "https://api.whatsapp.com/send?phone=6281356785992&text=Halo%20Dapur%20Buzzer%20Indonesia%0A%0ASaya%20Tertarik%20untuk%20Order%20%2APaket%20Paid%20Promote%2010%20Micro%20Influencer%2A%0A%0AMohon%20infokan%20detailnya.%20Terima%20Kasih."
          }
        >
          <ShoppingBag className="size-5 sm:size-6" strokeWidth={2} />
        </Link>
      </Button>
    </div>
  );
};

export default PackageCard;

"use client";
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { packageData } from "@/data/package";
import { numberFormat } from "@/lib/number-format";
import { slug } from "@/lib/slug";
import { Check, X, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PackageDetailPage = () => {
  // handle data person
  const pathName = usePathname();
  const person = pathName.split("/");
  const packageDetail = packageData.find(
    (item) => slug(item.name) == person[person.length - 1]
  );

  const [activeTab, setActiveTab] = useState<"detail_package" | "term">(
    "detail_package"
  );

  return (
    <AppLayout>
      <div className="space-y-3">
        {/* card profile */}
        <div className="sm:w-full w-[350px] mx-auto bg-accent-foreground rounded-3xl shadow-md overflow-hidden border border-accent/20 sm:grid sm:grid-cols-2 sm:gap-4 py-4 sm:justify-items-center sm:py-6 sm:px-4 lg:max-w-6xl lg:my-6">
          {/* Background cover */}
          <div className="sm:shadow-md sm:py-4 sm:rounded-md">
            <div className="p-4 sm:px-4 sm:py-0 relative">
              <Image
                src={packageDetail?.image ?? ""}
                alt={packageDetail?.name ?? ""}
                width={400}
                height={550}
                className=" h-40 rounded-3xl object-cover lg:w-full lg:h-55"
              />

              <Link href="https://api.whatsapp.com/send?phone=6281356785992&text=Halo%20Dapur%20Buzzer%20Indonesia%0A%0ASaya%20Tertarik%20untuk%20Order%20%2APaket%20Paid%20Promote%2010%20Micro%20Influencer%2A%0A%0AMohon%20infokan%20detailnya.%20Terima%20Kasih.">
                <div className="absolute top-5 right-5 group size-10 flex items-center justify-center text-accent-foreground">
                  <div
                    id="contact-now"
                    className="rounded-full bg-primary flex items-center justify-center size-10 group-hover:scale-95 transition-transform duration-300"
                  >
                    <Zap className="size-4" />
                  </div>

                  <p className="absolute right-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-2 border-primary border bg flex bg-primary text-accent-foreground text-sm whitespace-nowrap transition-all duration-300 p-2 rounded-2xl ">
                    Buy Package
                  </p>
                </div>
              </Link>
            </div>

            {/* Avatar */}
            <div className="relative flex flex-col items-center -mt-4 px-4">
              <div className="mt-4 ps-2 w-full">
                <h2 className="text-lg font-semibold pt-2">
                  {packageDetail?.name} ✨
                </h2>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 lg:font-medium">
                  {/* <MapPin className="size-3" /> */}
                  {packageDetail?.desc}
                </p>
              </div>
            </div>

            <div className="w-full px-4 py-2 space-y-3">
              <h3 className="w-full px-2 font-semibold text-lg">
                Rp. {numberFormat(packageDetail?.price)}
              </h3>
              <Button variant="ghost" className="w-full">
                <Link href="https://api.whatsapp.com/send?phone=6281356785992&text=Halo%20Dapur%20Buzzer%20Indonesia%0A%0ASaya%20Tertarik%20untuk%20Order%20%2APaket%20Paid%20Promote%2010%20Micro%20Influencer%2A%0A%0AMohon%20infokan%20detailnya.%20Terima%20Kasih.">
                  Buy Package
                </Link>
              </Button>
            </div>
          </div>

          <div className="sm:shadow-md sm:py-4 sm:rounded-md">
            <div className="flex mt-2 bg-accent/5 rounded-md mx-4 relative overflow-hidden z-10">
              <button
                onClick={() => setActiveTab("detail_package")}
                className={`flex-1 py-3 px-1 rounded-lg font-medium transition-all text-md delay-100 ${
                  activeTab === "detail_package"
                    ? "  text-accent-foreground"
                    : "text-accent/95 "
                } `}
              >
                Detail Package
              </button>
              <button
                onClick={() => setActiveTab("term")}
                className={`flex-1 py-3 px-1 pe-2 rounded-lg font-medium transition-all text-md delay-100 ${
                  activeTab === "term"
                    ? "  text-accent-foreground"
                    : "text-accent/95 "
                }`}
              >
                Syarat & Ketentuan
              </button>
              <div
                className={`h-[95%] w-[47%] rounded-md bg-primary absolute inset-0 my-auto transition-transform duration-400 -z-10 ${
                  activeTab === "detail_package"
                    ? "translate-x-0 left-1 w-[47%]"
                    : "translate-x-[90%] w-[52%]"
                }`}
              ></div>
            </div>

            <div className=" w-full px-4 flex flex-col items-center gap-4 mt-2">
              {activeTab === "detail_package" && (
                <div className="space-y-2">
                  <h1 className="font-semibold ">Detail Package: </h1>
                  <div>
                    <ul className="text-sm space-y-3">
                      {packageDetail?.detail_package.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 lg:font-medium"
                        >
                          <span className="mt-1">
                            {item.status == true ? (
                              <Check className="text-green-500 size-4" />
                            ) : (
                              <X className="text-red-500 size-4" />
                            )}
                          </span>{" "}
                          {item.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "term" && (
                <div className="space-y-2">
                  <h1 className="font-semibold">Syarat & Ketentuan: </h1>
                  <div>
                    <ul className="text-sm space-y-3">
                      {packageDetail?.terms.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 lg:font-medium"
                        >
                          <span className="mt-1">-</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2 col-span-2 px-4 mt-4 sm:mt-1 ">
            <h1 className="font-semibold ">Contoh Promosi: </h1>
            <div>
              <Image
                src={packageDetail?.example ?? ""}
                alt={packageDetail?.name ?? ""}
                width={400}
                height={550}
                className="h-40 rounded-3xl object-cover lg:w-full lg:h-55"
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PackageDetailPage;

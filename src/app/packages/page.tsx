import HeaderSection from "@/components/header-section";
import AppLayout from "@/components/layout/app-layout";
import PackageCard from "@/components/package-card";
import { packageData } from "@/data/package";

const PackagePage = () => {
  return (
    <AppLayout>
      <div className="my-2  md:min-h-[60vh] md:flex md:justify-center md:items-center">
        <div className="space-y-2">
          <HeaderSection text="List package Micro Influencer ✨" />
          <div className="grid grid-cols-1 space-y-2 py-2 px-1 sm:grid-cols-2 sm:gap-2.5">
            {packageData.map((item, i) => (
              <PackageCard
                name={item.name}
                image={item.image}
                desc={item.desc}
                price={item.price}
                detail_package={[]}
                terms={[]}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PackagePage;

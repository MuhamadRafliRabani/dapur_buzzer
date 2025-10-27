import PackageCard from "./package-card";
import { packageData } from "@/data/package";
import HeaderSection from "./header-section";

const PackageMicroInfluencer = () => {
  return (
    <div className="space-y-2 rounded-xl shadow-2xs p-4 px-2 bg-accent-foreground sm:px-4">
      <HeaderSection text="Package Micro Influencer ✨" link="/packages" />

      <div className="mx-auto grid w-fit grid-cols-1 place-items-center justify-items-center gap-2 sm:h-full sm:w-full sm:grid-cols-1 sm:gap-4 lg:grid-cols-2">
        {packageData.slice(0, 3).map((item, i) => (
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
  );
};

export default PackageMicroInfluencer;

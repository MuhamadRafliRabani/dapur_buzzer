import { client } from "@/data/client";
import Image from "next/image";

const Client = () => {
  return (
    <section className="py-8 lg:py-16 bg-accent-foreground rounded-xl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            PARTNER KAMI
          </h2>
          <p className="text-xl md:text-3xl font-light text-accent">
            {/* Kami bekerja sama dengan partner terbaik */}
            We work with the best
            <br />
            partners
          </p>
        </div>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {client.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 group"
              >
                <div className="relative h-12 w-32 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;

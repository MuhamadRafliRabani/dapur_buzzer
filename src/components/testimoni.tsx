"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimoni";
import TestimonialCard from "./testimoni-card";
import { useIsMobile } from "@/hooks/use-mobile";

const Testimonial = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-6 lg:py-10 rounded-md">
      <div className="max-w-6xl mx-auto text-center mb-8 lg:mb-12">
        <div className="inline-flex items-center shadow-md mb-4">
          <Image
            src={"/asset/profilDapurBuzzer.jpg"}
            alt={"profil dapur buzzer"}
            width={80}
            height={80}
            className="rounded-xl size-20 object-cover"
          />
        </div>

        <h2 className="text-xl md:text-3xl font-bold text-gray-900">
          Apa kata mereka tentang
          <br />
          <span className="text-primary">Dapur Buzzer?</span>
        </h2>
      </div>

      {/* ROW 1 - Normal Infinite Scroll */}
      <div className="overflow-hidden mb-6">
        <div className="flex gap-4 animate-infinite-scroll">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={`t1-${i}`}
              className="flex-shrink-0 w-4/5 sm:w-1/3 lg:w-1/4"
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 - Reverse Infinite Scroll */}
      {!isMobile && (
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-infinite-scroll-reverse">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={`t2-${i}`}
                className="flex-shrink-0 w-4/5 sm:w-1/3 lg:w-1/4"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;

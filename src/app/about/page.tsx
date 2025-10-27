import Help from "@/components/Help";
import AppLayout from "@/components/layout/app-layout";
import { influencer } from "@/data/influencer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <AppLayout>
      <section className="bg-accent-foreground text-accent">
        {/* Hero Section */}
        <div className="w-full h-[30vh] sm:h-[25vh] overflow-hidden">
          <Image
            src="/asset/poster_about2.jpeg"
            alt="poster_about2"
            width={500}
            height={300}
            className="object-cover w-full h-full md:rounded-b-md"
          />
        </div>
        {/* Content Section */}
        <div className="lg:max-w-3xl max-w-5xl mx-auto px-6 md:px-8 py-16 space-y-6">
          <div className="space-y-1">
            <h1>
              <span className="font-semibold text-primary sm:text-lg">
                Dapur Buzzer
              </span>
            </h1>
            <p className="text-sm sm:text-base">
              Influencer & KOL Management Platform
            </p>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Dapur Buzzer</span>{" "}
            indonesia adalah sebuah platform untuk menghubungkan brand yang kamu
            punya, mulai dari bisnis dengan skala kecil hingga bisnis berskala
            besar, dengan influencer/buzzer yang tepat untuk mempromosikan
            produk atau jasa dari brand kamu ke publik.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Dapur Buzzer</span>{" "}
            Indonesia merupakan platform management influencer & KOL Indonesia
            yang terdiri dari berbagai influencer berkualitas di seluruh
            Indonesia, yang siap membantu mempromosikan brand kamu untuk bisa
            sampai ke publik dengan baik, dan meningkatkan awareness atau
            engagement di sosial media
          </p>
        </div>
        {/* Stats Section */}
        <div className="w-full ">
          {/* <Image
          src="/asset/poster_about1.jpeg"
          alt="poster_about2"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        /> */}

          {/* Stats Cards */}
          <div className="w-full flex flex-wrap justify-center items-center gap-4 md:gap-8 bg-background py-4 sm:px-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md px-6 py-4 text-center w-40  sm:flex-1">
              <p className="text-sm sm:text-md text-muted-foreground mb-1">
                /01
              </p>
              <h3 className="text-2xl font-semibold">{influencer.length}</h3>
              <p className="text-sm sm:text-md text-muted-foreground">
                Total Influencer
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md px-6 py-4 text-center w-40  sm:flex-1">
              <p className="text-sm sm:text-md text-muted-foreground mb-1">
                /02
              </p>
              <h3 className="text-2xl font-semibold">4.9/5</h3>
              <p className="text-sm sm:text-md text-muted-foreground">
                Client Rating
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md px-6 py-4 text-center w-40  sm:flex-1">
              <p className="text-sm sm:text-md text-muted-foreground mb-1">
                /03
              </p>
              <h3 className="text-2xl font-semibold">233</h3>
              <p className="text-sm sm:text-md text-muted-foreground">
                Project Done in 2024
              </p>
            </div>
          </div>
        </div>
        <Help />
      </section>
    </AppLayout>
  );
}

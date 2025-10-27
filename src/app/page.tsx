import Category from "@/components/category";
import Client from "@/components/client";
import AppLayout from "@/components/layout/app-layout";
import ListInfluencer from "@/components/list-influencer";
import MainCarousel from "@/components/main-carousel";
import PackageMicroInfluencer from "@/components/package-micro-influencer";
import RekomendInfluencer from "@/components/rekomend-influencer";
import Testimonial from "@/components/testimoni";

export default function Home() {
  return (
    <AppLayout>
      <MainCarousel />
      <Category />
      <RekomendInfluencer />
      <ListInfluencer />
      <PackageMicroInfluencer />
      <Client />
      <Testimonial />
    </AppLayout>
  );
}

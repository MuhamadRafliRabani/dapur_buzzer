"use client";
import CategoryComp from "@/components/categories-comp";
import AppLayout from "@/components/layout/app-layout";
import { Suspense } from "react";

const CategoryPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppLayout>
        <CategoryComp />{" "}
      </AppLayout>
    </Suspense>
  );
};

export default CategoryPage;

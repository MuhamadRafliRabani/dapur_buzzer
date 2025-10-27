"use client";
import CategoryForm from "@/components/form";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useRouter } from "next/navigation";

const CategoryFormPage = () => {
  const { push } = useRouter();
  return (
    <DashboardLayout>
      <div className="min-h-[80%] w-full flex justify-center items-center">
        <CategoryForm
          user="dapur buzzer admin"
          onSuccess={() => push("/dashboard/categories")}
        />
      </div>
    </DashboardLayout>
  );
};

export default CategoryFormPage;

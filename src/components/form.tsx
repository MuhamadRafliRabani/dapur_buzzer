"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";
import DashboardLayout from "./layout/dashboard-layout";
import { api } from "@/lib/api";

interface CategoryFormProps {
  user: string; // creby / modby
  onSuccess?: () => void;
}

export default function CategoryForm({ user, onSuccess }: CategoryFormProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const mode = pathname.includes("/edit") ? "edit" : "add";
  const id = searchParams.get("id");

  const [form, setForm] = useState({
    name: "",
    icon: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Fetch data if edit mode
  useEffect(() => {
    if (mode === "edit" && id) {
      api
        .get(`/categories/show/${id}`)
        .then((res) => {
          setForm({
            name: res.data.data.name,
            icon: res.data.data.icon,
          });
        })
        .catch(() => {
          toast.error("Category not found");
        });
    }
  }, [mode, id, toast]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const payload =
      mode === "add" ? { ...form, creby: user } : { ...form, modby: user };

    const endpoint =
      mode === "add" ? "/categories/create" : `/categories/edit/${id}`;

    const method = mode === "add" ? "post" : "put";

    try {
      await api[method](endpoint, payload);
      toast.success(
        `Category ${mode === "add" ? "created" : "updated"} successfully`
      );
      onSuccess && onSuccess();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl lg:max-w-3xl bg-white p-6 rounded-xl border shadow-sm space-y-4"
    >
      <h2 className="text-lg font-semibold mb-2 capitalize">{mode} Category</h2>

      <div>
        <label className="text-sm font-medium">Category Name</label>
        <Input
          placeholder="Example: Fashion"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">Icon (Lucide name)</label>
        <Input
          placeholder="shopping-bag"
          value={form.icon}
          onChange={(e) => handleChange("icon", e.target.value)}
          required
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading
          ? "Processing..."
          : mode === "add"
          ? "Add Category"
          : "Update Category"}
      </Button>
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CategoryType } from "@/type";
import { api } from "@/lib/api";
import { getIconByName } from "@/lib/icon";
import { formatDate } from "@/lib/format-date";
import { toast } from "sonner";
import DeleteConfirmModal from "@/components/delete-comfirm-modal";

// const dummyUsers = [
//   {
//     .modby: 1,
//     name: "Florence Shaw",
//     .modtime: Home,
//     createdBy: "Admin",
//     createdTime: "Jul 4, 2022",
//     modifiedBy: "Admin",
//     modifiedTime: "Mar 4, 2024",
//   },
// ];

const CategoriesPage = () => {
  const { push, refresh } = useRouter();
  const [search, setSearch] = useState("");
  const [data, setData] = useState<CategoryType[]>([]);

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const getCategories = async () => {
    try {
      const { data } = await api.get("/categories");

      if (data.status !== 500) {
        setData(data.data);
      }

      return null;
    } catch (error) {
      console.error("Failed to fetch categories", error);
      toast.error("Category failed to deleted");
    }
  };

  const handleDeleteCategory = async (id: string | undefined) => {
    try {
      await api.delete(`/categories/delete/${id}`);

      toast.success("Category deleted ✅");

      getCategories();
    } catch (error) {
      console.error("Delete failed", error);
      toast.error("Failed to delete ❌");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl">Categories Management</h1>
            <p className="text-sm text-gray-500">Manage your category here.</p>
          </div>

          <Button className="rounded-lg px-4">
            <Link href={"/dashboard/categories/add"}>+ Add Category</Link>
          </Button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-3">
          <div className="relative w-full md:w-80">
            <Search className="h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-lg pl-10 pr-2 py-2 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-gray-500 text-xs">
                <th>
                  <Checkbox />
                </th>
                <th>Icon</th>
                <th>Name</th>
                <th>Created By</th>
                <th>Created Time</th>
                <th>Modified By</th>
                <th>Modified Time</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {filtered.map((item) => {
                const Icon = getIconByName(item.icon ?? "");
                return (
                  <tr
                    key={item.id}
                    className="bg-white rounded-lg text-sm shadow-sm hover:shadow-md transition cursor-pointer"
                  >
                    <td className="px-3 py-3">
                      <Checkbox />
                    </td>

                    <td
                      className="px-3 py-3"
                      onClick={() =>
                        push(`/dashboard/categories/edit?id=${item.id}`)
                      }
                    >
                      <Icon className="w-5 h-5 text-gray-600" />
                    </td>

                    <td className="px-3 py-3 flex items-center gap-3">
                      <span className="font-medium">{item.name}</span>
                    </td>
                    <td
                      className="px-3 py-3"
                      onClick={() =>
                        push(`/dashboard/categories/edit?id=${item.id}`)
                      }
                    >
                      {item.creby}
                    </td>
                    <td className="px-3 py-3 text-gray-500">
                      {formatDate(item.cretime)}
                    </td>
                    <td
                      className="px-3 py-3"
                      onClick={() =>
                        push(`/dashboard/categories/edit?id=${item.id}`)
                      }
                    >
                      {item.modby ?? "-"}
                    </td>
                    <td
                      className="px-3 py-3 text-gray-500"
                      onClick={() =>
                        push(`/dashboard/categories/edit?id=${item.id}`)
                      }
                    >
                      {formatDate(item.modtime) ?? "-"}
                    </td>
                    <td className="px-3 py-3">
                      <DeleteConfirmModal
                        trigger={
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Delete
                          </button>
                        }
                        onConfirm={() => handleDeleteCategory(item.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className="w-8 h-8 text-sm border rounded-lg hover:bg-black hover:text-white transition"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CategoriesPage;

"use client";

import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateWaUrl } from "@/lib/generate-message-campaign";
import { numberFormat } from "@/lib/number-format";
import { CFType } from "@/type";

import Link from "next/link";
import { useState } from "react";

const CampaignPage = () => {
  const [form, setForm] = useState<CFType>({
    brand: "",
    platform: "",
    media: "",
    jenisPromosi: "",
    jenisKonten: "",
    jumlahTalent: "1",
    minFollowers: "",
    gender: "",
    budget: "",
  });
  const [read, setRead] = useState<boolean>(false);

  const handleChange = (key: keyof CFType, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFail = () => {
    setForm({
      brand: "",
      platform: "",
      media: "",
      jenisPromosi: "",
      jenisKonten: "",
      jumlahTalent: "1",
      minFollowers: "0",
      gender: "",
      budget: "",
    });
  };

  const isFormValid =
    Object.values(form).every((v) => v !== "") && read == true;
  const waUrl = isFormValid ? generateWaUrl(form) : "#";

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto bg-accent-foreground md:rounded-3xl shadow-sm border border-accent/20 md:p-10 p-6 sm:mt-[10%] md:mt-6">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-primary">
          Buat Campaign
        </h2>
        <p className="text-center text-accent/70 mb-6">
          Silahkan isi data berikut dengan benar.
        </p>

        <hr className="mb-6 border-accent/20" />

        <div className="space-y-6">
          {/* Nama Brand */}
          <div>
            <Label className="text-sm font-medium">Nama Brand / Olshop</Label>
            <Input
              type="text"
              placeholder="Contoh: Dapur Buzzer Indonesia"
              className="rounded-lg mt-1 text-md"
              value={form.brand}
              onChange={(e) => handleChange("brand", e.target.value)}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div>
              <Label>Jenis Promosi</Label>
              <Select
                value={form.jenisPromosi}
                onValueChange={(value) => handleChange("jenisPromosi", value)}
              >
                <SelectTrigger className="rounded-lg w-full mt-2">
                  <SelectValue placeholder="Pilih..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Endorsement">Endorsement</SelectItem>
                  <SelectItem value="Product Review">Product Review</SelectItem>
                  <SelectItem value="Paid Promote">Paid Promote</SelectItem>
                  <SelectItem value="Store Visit">Store Visit</SelectItem>
                  <SelectItem value="Event Attendance">
                    Event Attendance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Jenis Konten</Label>
              <Select
                value={form.jenisKonten}
                onValueChange={(value) => handleChange("jenisKonten", value)}
              >
                <SelectTrigger className="rounded-lg  w-full mt-2">
                  <SelectValue placeholder="Pilih..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Foto">Foto</SelectItem>
                  <SelectItem value="Video">Video</SelectItem>
                  <SelectItem value="Foto dan Video">Foto dan Video</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Platform Promosi</Label>
              <Select
                value={form.platform}
                onValueChange={(value) => handleChange("platform", value)}
              >
                <SelectTrigger className="rounded-lg  w-full mt-2">
                  <SelectValue placeholder="Pilih..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="TikTok">TikTok</SelectItem>
                  <SelectItem value="Instagram dan TikTok">
                    Instagram dan TikTok
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Media Promosi</Label>
              <Select
                value={form.media}
                onValueChange={(value) => handleChange("media", value)}
              >
                <SelectTrigger className="rounded-lg  w-full mt-2">
                  <SelectValue placeholder="Pilih..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Story">Story</SelectItem>
                  <SelectItem value="Feed">Feed</SelectItem>
                  <SelectItem value="Story dan Feed">Story dan Feed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Jumlah Talent</Label>
              <Input
                type="text"
                className="rounded-lg w-full text-md mt-2"
                value={numberFormat(form.jumlahTalent)}
                onChange={(e) =>
                  handleChange("jumlahTalent", numberFormat(e.target.value))
                }
              />
            </div>
            <div>
              <Label>Minimal Followers</Label>
              <Input
                type="text"
                className="rounded-lg mt-2 text-md"
                value={numberFormat(form.minFollowers)}
                onChange={(e) =>
                  handleChange("minFollowers", numberFormat(e.target.value))
                }
              />
            </div>
          </div>

          {/* Row 5 */}
          <div>
            <Label>Jenis Kelamin Talent</Label>
            <Select
              value={form.gender}
              onValueChange={(value) => handleChange("gender", value)}
            >
              <SelectTrigger className="rounded-lg w-full mt-2">
                <SelectValue placeholder="Pilih..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pria">Pria</SelectItem>
                <SelectItem value="Wanita">Wanita</SelectItem>
                <SelectItem value="Pria dan Wanita">Pria dan Wanita</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <div>
            <Label>Total Budget Promosi</Label>
            <Input
              type="text"
              className="rounded-lg mt-2 text-md"
              value={numberFormat(form.budget)}
              onChange={(e) =>
                handleChange("budget", numberFormat(e.target.value))
              }
            />
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-3">
            <Input
              type="checkbox"
              id="agree"
              className="size-4 checked:bg-primary rounded border-gray-300"
              checked={read}
              onChange={() => setRead((prev) => !prev)}
            />
            <label htmlFor="agree" className="text-sm">
              Saya Menyetujui{" "}
              <Link href="/terms" className="text-primary underline">
                Syarat & Ketentuan
              </Link>{" "}
              yang berlaku.
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href={waUrl}
              className={!isFormValid ? "pointer-events-none" : ""}
            >
              <Button
                className="rounded-lg px-10 w-full"
                disabled={!isFormValid}
              >
                Kirim
              </Button>
            </Link>

            <Button
              onClick={() => handleFail()}
              variant="ghost"
              type="button"
              className="text-primary"
            >
              Batal
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CampaignPage;

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SDKbuzzer, SDKInfluencer } from "@/data/syarat-dan-ketentuan";

const SyaratDanKriteria = ({
  setStep,
}: {
  setStep: (param: number) => void;
}) => {
  const [activeTab, setActiveTab] = useState<"buzzer" | "influencer">("buzzer");
  const [read, setRead] = useState<boolean>(false);
  const [SDK, setSDK] = useState<string[]>(SDKbuzzer);

  useEffect(() => {
    if (activeTab == "influencer") {
      setSDK(SDKInfluencer);
    } else {
      setSDK(SDKbuzzer);
    }
  }, [activeTab]);

  return (
    <div className="flex items-center justify-center bg-accent-foreground py-3 px-2">
      <div className="max-w-lg w-full bg-accent-foreground rounded-3xl shadow-sm border border-gray-100 p-4">
        {/* Header */}
        <h1 className="text-lg font-bold text-center text-accent">
          Syarat & Kriteria
        </h1>
        <p className="text-center text-accent/70 mt-2 text-md">
          Pastikan kamu sudah memenuhi syarat dan kriteria di bawah ini
        </p>

        {/* Tabs */}
        <div className="flex mt-6 bg-accent/5 rounded-xl p-1 relative overflow-hidden z-10">
          <button
            onClick={() => setActiveTab("buzzer")}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all text-md delay-100 ${
              activeTab === "buzzer"
                ? "  text-accent-foreground"
                : "text-accent/70 hover:text-accent/80"
            } `}
          >
            Buzzer
          </button>
          <button
            onClick={() => setActiveTab("influencer")}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all text-md delay-100 ${
              activeTab === "influencer"
                ? "  text-accent-foreground"
                : "text-accent/70 hover:text-accent/80"
            }`}
          >
            Influencer & KOL
          </button>
          <div
            className={`h-[80%] w-1/2 rounded-md bg-primary absolute inset-0 my-auto transition-transform duration-400 -z-10 ${
              activeTab === "buzzer"
                ? "translate-x-0 left-1"
                : "translate-x-[97%]"
            }`}
          ></div>
        </div>

        {/* Content (placeholder, kamu isi nanti) */}
        <div className="bg-accent/5 rounded-2xl p-4 mt-6 text-accent/70 text-sm">
          {
            <ul className="space-y-2">
              {SDK.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          }
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mt-6">
          <Input
            type="checkbox"
            id="agree"
            className="size-4 checked:bg-primary rounded border-gray-300"
            checked={read}
            onChange={() => setRead((prev) => !prev)}
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            Saya sudah membaca dan memenuhi seluruh persyaratan di atas.
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setStep(1)}
            className="border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all text-md flex-1/2"
          >
            Kembali
          </button>
          <Button
            onClick={() => setStep(3)}
            className={`flex-1/2 bg-primary text-accent-foreground hover:bg-accent-foreground hover:text-primary hover:border hover:border-primary font-semibold rounded-xl transition-all text-md`}
            disabled={!read}
          >
            Lanjut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SyaratDanKriteria;

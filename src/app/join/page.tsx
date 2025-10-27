"use client";
import Join from "@/components/join";
import AppLayout from "@/components/layout/app-layout";
import SyaratDanKriteria from "@/components/syarat-dan-kriteria";
import { Progress } from "@/components/ui/progress";
import ValidasiAccount from "@/components/validasi-account";
import { useEffect, useState } from "react";

const JoinPage = () => {
  const [step, setStep] = useState<number>(1);
  const [progress, setProgress] = useState(33.3);
  const TOTAL_STEPS = 3;

  useEffect(() => {
    setProgress((step / TOTAL_STEPS) * 100);
  }, [step]);

  return (
    <AppLayout>
      <div className="py-6 ">
        <div className="px-3 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <p className="text-primary">langkah {step} dari 3</p>{" "}
            <p className="text-accent/70">persyaratan</p>
          </div>
          <div className="flex items-center h-3 rounded-md overflow-hidden">
            <Progress value={progress} className="w-full" />
          </div>
        </div>

        {/* <div className="w-full max-w-[350px] mx-auto bg-accent-foreground rounded-3xl shadow-md overflow-hidden border border-accent/20">
        </div> */}
        {step == 1 && <Join setStep={setStep} />}
        {step == 2 && <SyaratDanKriteria setStep={setStep} />}
        {step == 3 && <ValidasiAccount setStep={setStep} />}
      </div>
    </AppLayout>
  );
};

export default JoinPage;

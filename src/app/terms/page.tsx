"use client";
import AppLayout from "@/components/layout/app-layout";
import { termBrand, termInfluencer } from "@/data/terms";
import { useState } from "react";

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState<"brand" | "influencer">("brand");

  const terms = activeTab == "brand" ? termBrand : termInfluencer;

  return (
    <AppLayout>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Gradient Header */}
        <div className="term_background text-white p-6 pt-10 rounded-b-3xl relative">
          <p className="text-sm text-purple-200">Dapur Buzzer Indonesia</p>
          <h1 className="font-semibold text-base mt-1 leading-snug">
            Influencer & KOL Management Platform Indonesia
          </h1>
        </div>

        <div className="flex mt-4 bg-accent/5 rounded-xl mx-4 relative overflow-hidden z-10 lg:w-3xl lg:mx-auto">
          <button
            onClick={() => setActiveTab("brand")}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all text-md delay-100 ${
              activeTab === "brand"
                ? "  text-accent-foreground"
                : "text-accent/70 hover:text-accent/80"
            } `}
          >
            Brand
          </button>
          <button
            onClick={() => setActiveTab("influencer")}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all text-md delay-100 ${
              activeTab === "influencer"
                ? "  text-accent-foreground"
                : "text-accent/70 hover:text-accent/80"
            }`}
          >
            Influencer
          </button>
          <div
            className={`h-[80%] w-1/2 rounded-md bg-primary absolute inset-0 my-auto transition-transform duration-400 -z-10 ${
              activeTab === "brand"
                ? "translate-x-0 left-1"
                : "translate-x-[97%]"
            }`}
          ></div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-6 pt-4 overflow-y-auto lg:w-3xl lg:mx-auto">
          <h2 className="text-base font-semibold text-gray-900">
            Terms & Conditions
          </h2>
          <p className="text-xs text-gray-400 mb-4">
            Last updated: 27 October 2025
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Please read these terms and conditions carefully before using ...
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            {terms.map((item, i) => (
              <section key={i}>
                <h3 className="font-bold mb-1">
                  {i + 1}. {item.title}
                </h3>
                <p>{item.desc}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TermsPage;

import AppLayout from "@/components/layout/app-layout";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <AppLayout>
      <section className="w-full bg-accent-foreground ">
        <div className="term_background text-white p-6 pt-10 rounded-b-3xl relative lg:h-50 lg:pt-25">
          <p className="text-sm text-purple-200">Dapur Buzzer Indonesia</p>
          <h1 className="font-semibold text-base mt-1 leading-snug">
            Influencer & KOL Management Platform Indonesia
          </h1>
        </div>
        <div className="max-w-6xl mx-auto p-6 lg:my-auto min-h-[50vh] flex items-center justify-center ">
          <div className="">
            <h2 className="text-base font-semibold text-gray-900">
              Frequently asked questions {"(faqs)"}
            </h2>
            <p className="text-accent/70 mt-3 mb-8 text-sm">
              Stuck on something? We`re here to help with all your questions.
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 space-y-8">
              {faqs.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-purple-100 text-purple-600">
                    <item.icon className="size-5" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-4 text-sm text-gray-700">
                    <h3 className="font-bold mb-1">{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

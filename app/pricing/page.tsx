import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FairBilling, PricingFaq } from "@/components/PricingExtras";
import PricingPlans from "@/components/PricingPlans";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing | Xrilic",
  description: "Plans for TalentGPT, ProspectGPT and the full Xrilic engine. Pay per seat and add credits when you need them.",
};

export default function PricingPage() {
  const h = pricing.hero;
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-[1536px]">
          <section className="px-5 pt-14 pb-16 md:px-8 md:pt-20">
            <h1 className="mx-auto max-w-4xl animate-fade-in-up text-balance text-center text-[2.6rem] md:text-6xl">
              {h.title[0]} <span className="text-secondary-text">{h.muted[0]}</span>
              <br />
              {h.title[1]} <span className="text-secondary-text">{h.muted[1]}</span>
            </h1>
            <div className="mt-12 md:mt-16">
              <PricingPlans full />
            </div>
          </section>
          <FairBilling />
          <PricingFaq />
        </div>
        <Cta />
      </main>
      <Footer />
    </>
  );
}

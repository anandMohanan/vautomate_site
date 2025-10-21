"use client";
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import ProductShowcase from "@/components/ProductShowcase";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import type LocomotiveScroll from 'locomotive-scroll';
import { TrendingDown, Clock, DollarSign } from 'lucide-react';

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let loco: LocomotiveScroll;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      loco = new LocomotiveScroll({
        el: containerRef.current ?? undefined,
        smooth: true,
        lerp: 0.08,
        multiplier: 1,
        // @ts-expect-error - LocomotiveScroll type definitions may be incomplete
        smartphone: { smooth: true, breakpoint: 768 },
        tablet: { smooth: true, breakpoint: 1024 },
      });
      // Expose globally
      window.locoScroll = loco;

      window.addEventListener("load", () => {
        loco.update();
      });
    })();

    return () => {
      if (loco) loco.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="relative w-full min-h-screen bg-white"
    >
      <div data-scroll-section>
        {/* <Navbar /> */}
        <ProblemSection
          title="E-commerce Growth is Broken"
          description="Most e-commerce businesses and agencies struggle with manual optimization, scattered data, and missed opportunities that cost thousands in lost revenue every month."
          problems={[
            {
              icon: <TrendingDown className="w-6 h-6 text-red-600" />,
              title: "Stagnant Growth",
              description: "87% of e-commerce businesses see less than 10% monthly growth, leaving massive revenue potential untapped across client portfolios."
            },
            {
              icon: <Clock className="w-6 h-6 text-red-600" />,
              title: "Time-Consuming Manual Work",
              description: "Teams spend 20+ hours weekly on repetitive optimization tasks across multiple client stores that could be automated with AI."
            },
            {
              icon: <DollarSign className="w-6 h-6 text-red-600" />,
              title: "Scattered Data Insights",
              description: "Critical insights from Shopify, Meta, and Google Analytics live in silos across client accounts, making informed decisions nearly impossible."
            }
          ]}
          stats={[
            { number: "87%", label: "of businesses stagnant" },
            { number: "20hrs", label: "wasted weekly" },
            { number: "$12K", label: "avg monthly loss" }
          ]}
        />
      </div>

      <div data-scroll-section>
        <HeroSection />
      </div>

      <div data-scroll-section>
        <BentoGrid />
      </div>

      <div data-scroll-section>
        <ProductShowcase />
      </div>

      <div data-scroll-section>
        <UseCasesSection />
      </div>

      <div data-scroll-section>
        <HowItWorks />
      </div>

      <div data-scroll-section>
        <SocialProof />
      </div>

      <div data-scroll-section>
        <Pricing />
      </div>

      <div data-scroll-section>
        <CTASection />
      </div>

      <div data-scroll-section>
        <Footer />
      </div>
      
    </div>
  );
}
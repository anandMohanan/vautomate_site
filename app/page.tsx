"use client";
import Navbar from "@/components/Navbar";
import HeroProblemSection from "@/components/HeroProblemSection";
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
        <HeroProblemSection />
      </div>

      <div data-scroll-section>
        <BentoGrid />
      </div>

      <div data-scroll-section>
        <UseCasesSection />
      </div>
      <div data-scroll-section>
        <ProductShowcase />
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
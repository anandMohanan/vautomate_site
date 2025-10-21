"use client"
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type LocomotiveScroll from 'locomotive-scroll';
import Image from "next/image";
import TallyButton from "@/components/ui/TallyButton";
// Add type
declare global {
  interface Window {
    locoScroll: LocomotiveScroll;
  }
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (targetId: string) => {
    const element = document.querySelector(targetId) as HTMLElement;
    if (window.locoScroll && element) {
      window.locoScroll.scrollTo(element, {
        offset: -100, // adjust so content isn’t hidden under navbar
        duration: 1000, 
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-5xl z-50 
        backdrop-blur-xl border border-primary/30 rounded-2xl shadow-lg 
        transition-all duration-700 ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      style={{
        background: "#ffffff",
        backgroundImage: `
          radial-gradient(
            circle at top center,
            rgba(255, 140, 60, 0.5),
            transparent 70%
          )
        `,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-foreground border-none flex items-center justify-center  transform transition-transform hover:scale-105">
<Image src="/logo.png" alt="Vautomate" width={30} height={30} />
          </div>
          <Link href="/" className="text-xl text-black tracking-tight font-serif">
            <span className="text-xl text-black tracking-tight font-serif">
              Vautomate
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHomePage && ["Features", "Product", "Pricing"].map((item) => (
            <button
              key={item}
              onClick={() =>
                handleNavClick(`#${item.toLowerCase()}`)
              }
              className="text-black hover:text-primary transition-all duration-300 text-sm font-medium relative group cursor-pointer"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-foreground transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <TallyButton aria-label="Get started with Vautomate">
            Join Waitlist
          </TallyButton>
        </div>

        {/* Mobile Btn */}
        <Button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 pt-2 border-t border-primary/30">
            {isHomePage && ["Features", "Product", "Pricing"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  handleNavClick(`#${item.toLowerCase()}`)
                }
                className="text-black hover:text-primary py-2 transition-colors text-left"
              >
                {item}
              </button>
            ))}
            <Button className="bg-primary-foreground text-primary mt-2" asChild>
              <Link href="https://calendly.com/ashishbindal4/demo-automate-your-shopify-store-with-vautomate" aria-label="Get started with Vautomate">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
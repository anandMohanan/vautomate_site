"use client";

import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    step: "1",
    title: "Connect Your Store",
    description:
      "Link Shopify, Meta, and Google Analytics in under 2 minutes. One‑click integration with enterprise‑grade security.",
  },
  {
    step: "2",
    title: "Review AI Insights",
    description:
      "Get weekly reports with actionable projects tailored to your business goals and current performance.",
  },
  {
    step: "3",
    title: "Watch It Grow",
    description:
      "Approve projects and let our AI agents execute while you focus on your products and customers.",
  },
];

<div className="min-h-screen w-full bg-[#fff7ed] relative">
  {/* Peachy Sunrise Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(180deg, 
          rgba(255,247,237,1) 0%, 
          rgba(255,237,213,0.8) 25%, 
          rgba(254,215,170,0.6) 50%, 
          rgba(251,146,60,0.4) 75%, 
          rgba(249,115,22,0.3) 100%
        ),
        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.6) 0%, transparent 40%),
        radial-gradient(circle at 80% 20%, rgba(254,215,170,0.5) 0%, transparent 50%),
        radial-gradient(circle at 60% 60%, rgba(252,165,165,0.3) 0%, transparent 45%)
      `,
    }}
  />
  {/* Your Content/Components */}
</div>
export default function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-20">
          <h2 id="how-it-works-heading" className="text-5xl md:text-6xl font-serif text-primary tracking-tight mb-6">
            Simple, Smart, Automated
          </h2>
          <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
            From setup to scale in three effortless steps
          </p>
        </header>

        {/* Steps with connecting line */}
        <ol className="relative grid md:grid-cols-3 gap-12 max-w-5xl mx-auto" role="list">
          {/* Connector line (desktop horizontal, mobile vertical) */}
          <div className="absolute top-[50px] left-0 w-full h-0.5 bg-border hidden md:block" aria-hidden="true" />
          <div className="absolute top-[50px] left-[50%] -translate-x-1/2 h-full w-0.5 bg-border md:hidden" aria-hidden="true" />

          {steps.map(({ step, title, description }) => (
            <li key={step} className="relative flex flex-col items-center" role="listitem">
              {/* Step circle */}
              <div
                style={{
                  backgroundImage: `
                    linear-gradient(180deg,
                      rgba(255,247,237,1) 0%,
                      rgba(255,237,213,0.8) 25%,
                      rgba(254,215,170,0.6) 50%,
                      rgba(251,146,60,0.4) 75%,
                      rgba(249,115,22,0.3) 100%
                    ),
                    radial-gradient(circle at 20% 80%, rgba(255,255,255,0.6) 0%, transparent 40%),
                    radial-gradient(circle at 80% 20%, rgba(254,215,170,0.5) 0%, transparent 50%),
                    radial-gradient(circle at 60% 60%, rgba(252,165,165,0.3) 0%, transparent 45%)
                  `,
                }}
                className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl text-black font-serif font-bold text-3xl shadow-lg ring-4 ring-background transition-transform duration-300 hover:scale-110 hover:shadow-xl"
                role="text"
                aria-label={`Step ${step}: ${title}`}
              >
                {step}
              </div>

              {/* Card */}
              <Card className="bg-white border border-border/40 mt-8 rounded-2xl shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 max-w-sm" role="article">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-serif text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
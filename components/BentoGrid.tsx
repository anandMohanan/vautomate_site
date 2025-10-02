"use client";

import {
  BarChart3,
  MessageSquare,
  Target,
  Bot,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageDithering } from "@paper-design/shaders-react";

const features = [
  {
    title: "Automated Weekly Insights",
    description:
      "Get comprehensive reports on performance, growth trends, and channel metrics delivered every week without lifting a finger.",
    icon: BarChart3,
    size: "large",
    image: "http://vautomate.ai/automated.png",
  },
  {
    title: "Conversational Analytics",
    description:
      "Chat naturally with specialized AI agents to get instant answers.",
    icon: MessageSquare,
    size: "small",
    image: "http://vautomate.ai/analytics.png", // ✅ custom image for analytics
  },
  {
    title: "Actionable Projects",
    description:
      "Structured growth tasks with clear execution paths handled automatically.",
    icon: Target,
    size: "small",
    image: "http://vautomate.ai/projects_card.png",
  },
  {
    title: "Campaign Automation",
    description:
      "Weekly insights drive automated marketing plans. Approve once, and watch AI execute your growth strategy.",
    icon: Bot,
    size: "medium",
    image: "http://vautomate.ai/campaign.png",
  },
  {
    title: "Benchmarking",
    description: "Compare against market averages and competitors.",
    icon: TrendingUp,
    size: "small",
    image: "http://vautomate.ai/benchmarking.png",
  },
  {
    title: "Hands-Free",
    description: "You approve, we execute automatically.",
    icon: Zap,
    size: "small",
    image: "http://vautomate.ai/hands.png",
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-foreground mb-6 tracking-tight font-serif">
            Everything You Need to
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Grow Faster
              </span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Powered by multi-agent AI systems that work while you sleep
          </p>
        </div>

        {/* ----- Bento Grid ----- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            const isMedium = feature.size === "medium";

            return (
              <Card
                key={index}
                className={`relative overflow-hidden group rounded-3xl border border-border p-10 cursor-pointer transition-all hover:shadow-2xl ${
                  isLarge || isMedium
                    ? "md:col-span-2 md:row-span-2"
                    : "md:col-span-2"
                }`}
              >
                {/* 🔥 Dithering Background renders ONLY on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <ImageDithering
                    width={600}
                    height={
                      feature.size === "large" || feature.size === "medium"
                        ? 720
                        : 280
                    }
                    image={feature.image}
                    colorBack="#7a5b43"
                    colorFront="#ffe294"
                    colorHighlight="#eba35c"
                    originalColors={false}
                    type="8x8"
                    colorSteps={2}
                    fit="cover"
                  />
                </div>

                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content layer */}
                <CardContent className="p-0 relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif transition-colors ${
                      isLarge || isMedium
                        ? "text-2xl mb-4"
                        : "text-xl mb-3"
                    } text-foreground group-hover:text-white`}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`leading-relaxed transition-colors ${
                      isLarge || isMedium ? "text-lg" : "text-sm"
                    } text-muted-foreground group-hover:text-white/90`}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
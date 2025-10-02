"use client";

import {
  BarChart3,
  Target,
  MessageSquare,
  Check,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const productSections = [
  {
    id: "chat",
    badge: "Conversational AI",
    badgeIcon: MessageSquare,
    title: "Chat with Your Data Like Never Before",
    description:
      "Ask questions in plain English and get instant, actionable insights from your store's performance. Our multi-agent system understands context and provides recommendations tailored to your business.",
    features: [
      "Natural language queries across all your data sources",
      "Contextual understanding of your business metrics",
      "Instant recommendations and action items",
    ],
    imagePlaceholder: "Chat Interface Screenshot",
    imageLink: "/chat.png",
  },
  {
    id: "insights",
    badge: "Weekly Insights",
    badgeIcon: BarChart3,
    title: "Automated Reports That Actually Matter",
    description:
      "Every week, receive comprehensive insights highlighting what's working, what's not, and exactly what to do about it. No more drowning in data or missing critical opportunities.",
    features: [
      "Performance tracking across all channels",
      "Trend analysis and predictive forecasting",
      "Competitor benchmarking and market insights",
    ],
    imagePlaceholder: "Insights Dashboard Screenshot",
    imageLink: "/insights.png",
  },
  {
    id: "projects",
    badge: "Growth Projects",
    badgeIcon: Target,
    title: "From Insight to Action, Automatically",
    description:
      "Turn insights into structured projects with clear execution plans. Review, approve, and watch our AI agents implement growth strategies while you focus on your products.",
    features: [
      "Prioritized project queue based on impact",
      "Clear execution plans with milestones",
      "Real-time progress tracking and updates",
    ],
    imagePlaceholder: "Projects Dashboard Screenshot",
    imageLink: "/projects.png",
  },
];

export default function ProductShowcase() {

  return (
    <section id="product" className="py-32 bg-white" data-scroll data-scroll-speed="0.5">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {productSections.map((section, index) => {
          const Icon = section.badgeIcon;
          const isReversed = index % 2 === 1; // alternate layout

          return (
            <div
              key={section.id}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content (40%) */}
              <div className="flex-[0.4] max-w-lg">
                <Badge className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
                  <Icon className="w-4 h-4" />
                  <span>{section.badge}</span>
                </Badge>

                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 tracking-tight">
                  {section.title}
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-4">
                  {section.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-foreground"
                    >
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary mt-0.5">
                        <Check className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Showcase (60%) */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="relative flex-[0.6] h-[550px] rounded-2xl border-2 border-border overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={section.imageLink}
                      alt={section.imagePlaceholder}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Click to view larger
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/95 border-0">
                  <DialogTitle className="sr-only">
                    {section.imagePlaceholder}
                  </DialogTitle>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={section.imageLink}
                      alt={section.imagePlaceholder}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <DialogClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:bg-white/20"
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </section>
  );
}
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pricing = {
  name: "Limited Time Offer",
  price: "$19",
  description: "/mo",
  note: "(For now, everything is available – might change in the future)",
  features: [
    "All current features included",
    "Unlimited integrations",
    "AI insights & advanced analytics",
    "Automated campaign execution",
    "Priority support",
  ],
  buttonText: "Start Free Trial",
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Start free. Scale as you grow.
          </p>
        </div>

        <Card className="p-10 rounded-2xl border-2 border-primary shadow-xl">
          <CardContent className="p-0 text-center">
            {/* Plan Name */}
            <h3 className="text-2xl font-bold mb-4 font-serif text-foreground">
              {pricing.name}
            </h3>

            {/* Price */}
            <div className="mb-6">
              <span className="text-5xl font-bold font-serif text-foreground">
                {pricing.price}
              </span>
              <span className="text-lg text-muted-foreground ml-1">
                {pricing.description}
              </span>
            </div>

            {/* Note */}
            <p className="text-sm text-muted-foreground italic mb-10">
              {pricing.note}
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-10 text-left">
              {pricing.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

              {/* CTA */}
              <Button
                className="w-full"
                data-tally-open="w2Qv0e"
                data-tally-width="500"
                data-tally-hide-title="1"
                data-tally-auto-close="10000"
              >
                Join Waitlist
              </Button>
          </CardContent>
        </Card>
      </div>
     {/* 🔥 Bottom Fade Transition */}
<div className="absolute -bottom-10 left-0 right-0 pointer-events-none">
  <div className="h-32 bg-gradient-to-b from-white/0 via-white to-[#ff8c3c] backdrop-blur-md" />
</div>
    </section>
  );
}
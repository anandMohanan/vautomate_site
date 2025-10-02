import { ArrowRight, BarChart3, Target, MessageSquare, Zap } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function HeroSection() {

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden " style={{
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
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto relative" data-scroll data-scroll-speed="2">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-secondary-foreground rounded-full text-sm font-medium mb-8 border border-border" role="img" aria-label="AI-Powered Growth Intelligence">
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span className="tracking-tight">AI-Powered Growth Intelligence</span>
            </div>

            <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
              Your Store&apos;s Growth
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">on Autopilot</span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
              Weekly AI insights from Shopify, Meta & Google Analytics. Actionable projects. Smart execution.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12" role="group" aria-label="Call to action buttons">
              <Button size="lg" className="group flex" asChild>
                <Link href="https://app.vautomate.ai/api/auth/register" aria-label="Start your free trial of Vautomate AI growth platform">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Link href={"https://calendly.com/ashishbindal4/demo-automate-your-shopify-store-with-vautomate"} className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                Schedule Demo
              </Link>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12" role="region" aria-labelledby="stats-heading">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-foreground mb-1 font-serif" aria-label="87 percent">87%</div>
                <div className="text-muted-foreground text-sm" id="stats-heading">Average Growth</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-foreground mb-1 font-serif" aria-label="12 hours">12hrs</div>
                <div className="text-muted-foreground text-sm">Time Saved per Week</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-foreground mb-1 font-serif" aria-label="24/7">24/7</div>
                <div className="text-muted-foreground text-sm">AI Monitoring</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <Card className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm" role="region" aria-labelledby="dashboard-preview">
                <CardContent className="space-y-6 p-0">
                  <h2 id="dashboard-preview" className="sr-only">AI Dashboard Preview</h2>
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl" role="article">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <BarChart3 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Revenue +94%</div>
                      <div className="text-sm text-muted-foreground">This month vs last</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl" role="article">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Target className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">3 New Projects</div>
                      <div className="text-sm text-muted-foreground">Ready for approval</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl" role="article">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <MessageSquare className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">AI Insights</div>
                      <div className="text-sm text-muted-foreground">23 recommendations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

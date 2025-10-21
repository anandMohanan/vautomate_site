import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import { ArrowRight, TrendingUp, Target, BarChart3, Zap, CheckCircle, Users, DollarSign, AlertTriangle, TrendingDown, Clock } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'Cross-Channel Ad Performance Analysis | GA4 + Meta + Google Ads Intelligence',
  description: 'Get unified ROAS tracking across Meta and Google Ads with AI-powered insights. Automatically pause underperforming campaigns and optimize ad spend for maximum ROI.',
  keywords: [
    'cross-channel ad performance',
    'GA4 ads integration',
    'Meta Google Ads unified',
    'ROAS optimization',
    'automated ad pausing',
    'multi-platform advertising',
    'ad performance analytics',
    'campaign ROAS tracking',
    'AI ad optimization',
    'advertising intelligence'
  ],
  openGraph: {
    title: 'Cross-Channel Ad Performance Analysis | GA4 + Meta + Google Ads',
    description: 'Unify your ad performance across all channels with AI-powered insights. Get instant ROAS tracking and automated optimization.',
    type: 'website',
    url: 'https://growth.vautomate.ai/cross-channel-ad-performance',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Cross-Channel Ad Performance Analysis Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cross-Channel Ad Performance Analysis | GA4 + Meta + Google Ads',
    description: 'Get unified ROAS tracking across Meta and Google Ads with AI-powered insights and automated optimization.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://growth.vautomate.ai/cross-channel-ad-performance',
  },
}

export default function CrossChannelAdPerformancePage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />

      {/* Problem Section */}
      <ProblemSection
        title="Ad Performance Tracking is Fragmented"
        description="Managing campaigns across Meta and Google Ads without unified insights leads to overspending, missed opportunities, and inaccurate ROAS calculations across client accounts."
        problems={[
          {
            icon: <TrendingDown className="w-6 h-6 text-red-600" />,
            title: "Inaccurate ROAS Tracking",
            description: "Without unified attribution across client accounts, you're making decisions based on incomplete data, leading to poor campaign performance."
          },
          {
            icon: <Clock className="w-6 h-6 text-red-600" />,
            title: "Manual Campaign Management",
            description: "Spending hours daily monitoring and adjusting campaigns across multiple client platforms instead of focusing on strategic growth."
          },
          {
            icon: <DollarSign className="w-6 h-6 text-red-600" />,
            title: "Wasted Ad Spend",
            description: "Underperforming campaigns continue running across client accounts because you can't identify them quickly enough across channels."
          }
        ]}
        stats={[
          { number: "40%", label: "ROAS inaccuracy" },
          { number: "5hrs", label: "daily monitoring" },
          { number: "$8K", label: "monthly waste" }
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" style={{
        background: "#ffffff",
        backgroundImage: `
          radial-gradient(
            circle at top center,
            rgba(255, 140, 60, 0.5),
            transparent 70%
          )
        `,
        backgroundRepeat: "no-repeat",
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-secondary-foreground rounded-full text-sm font-medium mb-8 border border-border">
                <TrendingUp className="w-4 h-4" />
                <span className="tracking-tight">Cross-Channel Ad Intelligence</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
                Unify Your Ad Performance
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Across All Channels</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
                Get instant insights into which campaigns across Meta and Google Ads deliver the highest ROAS. Automatically pause underperforming ad sets and optimize your spend.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <TallyButton size="lg" className="group flex">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TallyButton>
                <Link href="/demo" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                  Watch Demo
                </Link>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">3.2x</div>
                  <div className="text-muted-foreground text-sm">Higher ROAS Accuracy</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">15min</div>
                  <div className="text-muted-foreground text-sm">Setup Time</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">24/7</div>
                  <div className="text-muted-foreground text-sm">Performance Monitoring</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Campaign ROAS: 4.2x</div>
                      <div className="text-sm text-muted-foreground">Meta + Google combined</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">3 Ad Sets Paused</div>
                      <div className="text-sm text-muted-foreground">Low performance auto-detected</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">$12.4K Saved</div>
                      <div className="text-sm text-muted-foreground">This month from optimizations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how a marketer gets instant cross-platform insights and takes automated actions to optimize their ad spend.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">AI Assistant Online</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Show me which campaigns last month had the highest ROAS across Meta and Google Ads."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">Here are your top-performing campaigns from last month:</p>
                      <div className="mt-3 space-y-2 bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Meta - Summer Sale Campaign</span>
                          <span className="font-semibold text-green-400">ROAS: 5.2x</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Google - Brand Awareness</span>
                          <span className="font-semibold text-green-400">ROAS: 4.8x</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Meta - Retargeting Campaign</span>
                          <span className="font-semibold text-red-400">ROAS: 1.8x</span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm">I noticed 3 ad sets with ROAS below 2.0x. Would you like me to pause them automatically?</p>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      AI
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Yes, pause the low-performing ad sets and show me the updated performance."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">✅ Done! 3 ad sets paused. Your overall ROAS improved by 18%.</p>
                      <div className="mt-3 p-3 bg-white rounded-lg">
                        <p className="text-sm font-medium text-slate-800">Updated Performance:</p>
                        <p className="text-lg font-bold text-green-600">Overall ROAS: 4.1x (+18%)</p>
                        <p className="text-sm text-slate-600">$2,400 saved this month</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      AI
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Why Cross-Channel Intelligence Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional reporting tools show data in silos. Vautomate connects everything for complete visibility and automated optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Unified Performance View</h3>
                <p className="text-muted-foreground">See Meta and Google Ads performance side-by-side with normalized metrics for accurate comparison.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Optimization</h3>
                <p className="text-muted-foreground">AI identifies underperforming campaigns and can pause them automatically, saving you time and money.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Alerts</h3>
                <p className="text-muted-foreground">Get notified instantly when performance drops or opportunities arise across any advertising channel.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Audience Insights</h3>
                <p className="text-muted-foreground">Understand which audiences perform best across platforms and optimize targeting accordingly.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Budget Optimization</h3>
                <p className="text-muted-foreground">Automatically redistribute budget from low-performing to high-performing campaigns and channels.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Executive Reporting</h3>
                <p className="text-muted-foreground">Generate comprehensive reports showing cross-channel performance and ROI for stakeholders.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
            Ready to Unify Your Ad Performance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have transformed their advertising with AI-powered cross-channel insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TallyButton size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </TallyButton>
            <Link href="https://calendly.com/ashishbindal4/demo-automate-your-shopify-store-with-vautomate" className="text-white hover:text-white/80 underline">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

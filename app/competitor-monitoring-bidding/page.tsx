import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import { ArrowRight, Eye, Target, TrendingUp, Zap, CheckCircle, AlertTriangle, DollarSign, Activity, Shield } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'Competitor Monitoring with Automated Bidding | AI-Powered Competitive Intelligence',
  description: 'Monitor competitor ad prices and performance trends. Automatically adjust Google Ads bids to maintain competitive advantage with 24/7 adaptive campaign management.',
  keywords: [
    'competitor monitoring',
    'automated bidding',
    'competitive intelligence',
    'Google Ads optimization',
    'price monitoring',
    'bid adjustments',
    'competitive analysis',
    'automated campaign management',
    'AI competitive intelligence',
    'ad performance monitoring'
  ],
  openGraph: {
    title: 'Competitor Monitoring with Automated Bidding | Competitive Intelligence',
    description: 'Stay ahead of competitors with AI-powered monitoring and automated bid adjustments for optimal ad performance.',
    type: 'website',
    url: 'https://vautomate.ai/competitor-monitoring-bidding',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Competitor Monitoring Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Competitor Monitoring with Automated Bidding | Competitive Intelligence',
    description: 'Stay ahead of competitors with AI-powered monitoring and automated bid adjustments.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://vautomate.ai/competitor-monitoring-bidding',
  },
}

export default function CompetitorMonitoringBiddingPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />

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
                <Eye className="w-4 h-4" />
                <span className="tracking-tight">Competitive Intelligence</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
                Monitor & Adapt
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">to Competition</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
                Track competitor pricing and ad performance in real-time. Automatically adjust Google Ads bids to maintain your competitive edge with 24/7 adaptive campaign management.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <TallyButton size="lg" className="group flex">
                  Monitor Competition
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TallyButton>
                <Link href="/demo" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                  See Demo
                </Link>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">37%</div>
                  <div className="text-muted-foreground text-sm">Better CPC Performance</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">24/7</div>
                  <div className="text-muted-foreground text-sm">Competitor Tracking</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">5min</div>
                  <div className="text-muted-foreground text-sm">Response Time</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Competitors Monitored</div>
                      <div className="text-sm text-muted-foreground">47 active competitors</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Bids Auto-Adjusted</div>
                      <div className="text-sm text-muted-foreground">12 campaigns optimized</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">$2.3K Saved</div>
                      <div className="text-sm text-muted-foreground">This month vs manual</div>
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
              See Adaptive Bidding in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how AI monitors competitor pricing and performance trends, then automatically adjusts your Google Ads bids for optimal results.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">Competitive Monitor Active</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Monitor competitor ad prices and adjust my Google Ads bids to maintain a 10% CPC advantage."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">🔍 Monitoring competitor landscape and analyzing pricing trends...</p>

                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                            <div>
                              <p className="font-medium text-slate-800">Competitor A - Aggressive Pricing</p>
                              <p className="text-sm text-slate-600">CPC increased 23% in last 48 hours</p>
                            </div>
                          </div>
                          <div className="bg-red-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">⚠️ Price War Alert:</p>
                            <p className="text-sm text-slate-600">Competitor A raised bids significantly. Recommend increasing our bids by 15% to maintain position.</p>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                            <div>
                              <p className="font-medium text-slate-800">Competitor B - Performance Drop</p>
                              <p className="text-sm text-slate-600">CTR decreased 18% this week</p>
                            </div>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">📉 Opportunity:</p>
                            <p className="text-sm text-slate-600">Competitor B showing weakness. Can reduce bids by 8% while maintaining position.</p>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                            <div>
                              <p className="font-medium text-slate-800">Market Trend Analysis</p>
                              <p className="text-sm text-slate-600">Overall CPC inflation: +12%</p>
                            </div>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">📊 Market Intelligence:</p>
                            <p className="text-sm text-slate-600">Market-wide CPC increase detected. Adjust strategy to maintain 10% advantage.</p>
                          </div>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-slate-200">✅ Competitive analysis complete. Ready to implement bid adjustments?</p>
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
                      <p className="">"Yes, implement the recommended bid adjustments and maintain my 10% CPC advantage."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-green-500 rounded-2xl">
                      <p className="text-white">✅ Competitive bidding strategy implemented!</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Increased bids vs Competitor A: +15%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Reduced bids vs Competitor B: -8%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Maintained 10% CPC advantage overall</span>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-green-600 rounded-lg">
                        <p className="text-sm font-medium text-white">📊 Performance Impact:</p>
                        <p className="text-sm text-green-100">Est. 23% better ad position | $1,200 monthly savings</p>
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

      {/* Monitoring Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Always-On Competitive Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From real-time monitoring to autonomous bid adjustments, maintain your competitive edge with intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">Continuously tracks competitor pricing, ad performance, and market trends across all channels.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Analysis</h3>
                <p className="text-muted-foreground">Analyzes competitor strategies and identifies opportunities for bid optimization and positioning.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Bidding</h3>
                <p className="text-muted-foreground">Automatically adjusts Google Ads bids to maintain your desired competitive advantage.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Alerts</h3>
                <p className="text-muted-foreground">Notifies you when competitors make aggressive moves or when opportunities arise.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trend Analysis</h3>
                <p className="text-muted-foreground">Identifies market trends and seasonal patterns to optimize long-term bidding strategies.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                <p className="text-muted-foreground">Prevents overbidding while ensuring you never lose position to aggressive competitors.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
            Ready to Stay Ahead of Competition?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of advertisers who have transformed their competitive strategy with AI-powered monitoring and automated bidding.
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

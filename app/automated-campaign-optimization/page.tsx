import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import { ArrowRight, TrendingUp, Target, BarChart3, Zap, CheckCircle, Users, DollarSign, Settings, Brain, Clock } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'Automated Campaign Optimization | AI-Powered Ad Optimization & Suggestions',
  description: 'Let AI analyze your campaign performance and suggest optimizations. Get automated bid adjustments, creative improvements, and ROI-boosting recommendations across all channels.',
  keywords: [
    'automated campaign optimization',
    'AI ad optimization',
    'campaign performance analysis',
    'bid optimization',
    'creative optimization',
    'ROAS improvement',
    'automated bidding',
    'campaign suggestions',
    'AI marketing optimization',
    'advertising automation'
  ],
  openGraph: {
    title: 'Automated Campaign Optimization | AI-Powered Ad Intelligence',
    description: 'Transform your campaign performance with AI-powered optimization suggestions. Get automated bid adjustments and creative improvements.',
    type: 'website',
    url: 'https://vautomate.ai/automated-campaign-optimization',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Automated Campaign Optimization Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated Campaign Optimization | AI-Powered Ad Intelligence',
    description: 'Transform your campaign performance with AI-powered optimization suggestions and automated improvements.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://vautomate.ai/automated-campaign-optimization',
  },
}

export default function AutomatedCampaignOptimizationPage() {
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
                <Brain className="w-4 h-4" />
                <span className="tracking-tight">AI Campaign Intelligence</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
                Optimize Campaigns
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Automatically</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
                Let AI analyze your campaign performance and suggest optimizations. From bid adjustments to creative improvements, get data-driven recommendations that boost ROI.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <TallyButton size="lg" className="group flex">
                  Start Optimizing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TallyButton>
            
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">47%</div>
                  <div className="text-muted-foreground text-sm">Avg Performance Improvement</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">5min</div>
                  <div className="text-muted-foreground text-sm">Time to First Insight</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">∞</div>
                  <div className="text-muted-foreground text-sm">Optimization Possibilities</div>
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
                      <div className="font-semibold text-foreground mb-1">CTR Improved +32%</div>
                      <div className="text-sm text-muted-foreground">Ad creative optimization</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">CPA Reduced -28%</div>
                      <div className="text-sm text-muted-foreground">Bid strategy refinement</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">$8.5K Saved</div>
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
              See AI Optimization in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how AI analyzes campaign performance and provides actionable optimization suggestions in real-time.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">AI Campaign Optimizer Active</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Which ads are overspending but not converting well?"</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">I found 3 campaigns that need attention:</p>
                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Meta - Summer Sale Retargeting</span>
                            <span className="text-red-400 font-semibold">CPA: $47 (↑23%)</span>
                          </div>
                          <p className="text-sm text-slate-800">CTR dropped 18% this week. Consider refreshing creative or adjusting audience targeting.</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Google - Brand Awareness</span>
                            <span className="text-yellow-400 font-semibold">Spend: $2.1K (↑31%)</span>
                          </div>
                          <p className="text-sm text-slate-800">Low conversion rate (0.8%). Consider lowering bids or refining keywords.</p>
                        </div>
                      </div>
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
                      <p className="">"Create a new campaign variant with 10% lower CPC."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">✅ Campaign variant created! Here are the optimizations I made:</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Reduced bids by 12% for better efficiency</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Updated ad copy for higher relevance score</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Refined audience targeting parameters</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded-lg">
                        <p className="text-sm font-medium text-slate-800">Expected Results:</p>
                        <p className="text-lg font-bold text-green-600">CPC: $2.34 (-11%) | Est. ROI: +24%</p>
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

      {/* Optimization Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Comprehensive Campaign Optimization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI analyzes every aspect of your campaigns and provides specific, actionable improvements across all channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Bid Optimization</h3>
                    <p className="text-muted-foreground">AI adjusts bids in real-time based on performance data, auction dynamics, and conversion probability.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Dynamic bid adjustments based on time of day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Audience-based bid modifiers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Conversion probability scoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Creative Optimization</h3>
                    <p className="text-muted-foreground">AI analyzes ad creative performance and suggests improvements to copy, images, and calls-to-action.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">A/B testing recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Copy optimization suggestions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Visual performance analysis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Audience Targeting</h3>
                    <p className="text-muted-foreground">AI identifies high-performing audience segments and suggests expansions or refinements.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Lookalike audience optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Demographic performance analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Interest targeting refinement</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Budget Allocation</h3>
                    <p className="text-muted-foreground">AI automatically redistributes budget from underperforming to high-performing campaigns and channels.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Cross-channel budget optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Daily budget recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Seasonal budget adjustments</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
            Ready to Automate Your Campaign Optimization?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have transformed their advertising performance with AI-powered optimization.
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

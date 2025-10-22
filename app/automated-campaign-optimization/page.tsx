import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import CombinedUseCaseSection from "@/components/CombinedUseCaseSection";
import { ArrowRight, TrendingUp, Target, BarChart3, Zap, CheckCircle, Users, DollarSign, Settings, Brain, Clock, AlertTriangle, TrendingDown } from 'lucide-react';
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
    url: 'https://growth.vautomate.ai/automated-campaign-optimization',
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
    canonical: 'https://growth.vautomate.ai/automated-campaign-optimization',
  },
}

export default function AutomatedCampaignOptimizationPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />

      <CombinedUseCaseSection
        badgeIcon={<Brain className="w-4 h-4" />}
        badgeText="AI Campaign Intelligence"
        title="Optimize Campaigns"
        titleAccent="Automatically"
        description="Let AI analyze your campaign performance and suggest optimizations. From bid adjustments to creative improvements, get data-driven recommendations that boost ROI."
        ctaText="Start Optimizing"
        problemsTitle="The Problem"
        problemsDescription="Most marketing teams and agencies spend hours manually analyzing campaign performance across client accounts, making optimization decisions based on gut feeling rather than data-driven insights."
        problems={[
          {
            icon: <Clock className="w-6 h-6 text-red-600" />,
            title: "Time-Consuming Analysis",
            description: "Hours spent daily reviewing performance metrics across multiple client campaigns instead of strategic planning."
          },
          {
            icon: <TrendingDown className="w-6 h-6 text-red-600" />,
            title: "Suboptimal Performance",
            description: "Missed opportunities for bid adjustments, creative improvements, and targeting optimizations that could boost ROI across client portfolios."
          },
          {
            icon: <Brain className="w-6 h-6 text-red-600" />,
            title: "Gut-Based Decisions",
            description: "Making optimization choices without comprehensive data analysis across client accounts leads to inconsistent results and wasted budget."
          }
        ]}
        stats={[
          { number: "8hrs", label: "daily analysis time" },
          { number: "23%", label: "missed optimizations" },
          { number: "$15K", label: "monthly budget waste" }
        ]}
        illustrations={[
          { icon: <TrendingUp className="w-6 h-6 text-primary-foreground" />, title: "CTR Improved +32%", subtitle: "Ad creative optimization" },
          { icon: <Target className="w-6 h-6 text-accent-foreground" />, title: "CPA Reduced -28%", subtitle: "Bid strategy refinement", tone: 'secondary' },
          { icon: <DollarSign className="w-6 h-6 text-primary-foreground" />, title: "$8.5K Saved", subtitle: "This month from optimizations" },
        ]}
      />

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

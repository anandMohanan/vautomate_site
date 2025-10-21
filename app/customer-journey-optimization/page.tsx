import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import { ArrowRight, TrendingUp, Funnel, Eye, ShoppingCart, CreditCard, Users, Target, Lightbulb, Zap, CheckCircle, MousePointer, AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'Customer Journey Optimization | Funnel Analysis & Conversion Optimization',
  description: 'Identify where users drop off in your conversion funnel and get AI-powered recommendations to fix them. Optimize every step from traffic to post-purchase.',
  keywords: [
    'customer journey optimization',
    'conversion funnel analysis',
    'drop-off analysis',
    'conversion optimization',
    'user behavior analysis',
    'funnel optimization',
    'customer experience',
    'conversion rate optimization',
    'user journey mapping',
    'ecommerce optimization'
  ],
  openGraph: {
    title: 'Customer Journey Optimization | Conversion Funnel Intelligence',
    description: 'Optimize every step of your customer journey with AI-powered analysis and actionable recommendations for maximum conversions.',
    type: 'website',
    url: 'https://growth.vautomate.ai/customer-journey-optimization',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Customer Journey Optimization Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Journey Optimization | Conversion Funnel Intelligence',
    description: 'Optimize every step of your customer journey with AI-powered analysis and recommendations.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://growth.vautomate.ai/customer-journey-optimization',
  },
}

export default function CustomerJourneyOptimizationPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />

      {/* Problem Section */}
      <ProblemSection
        title="Customer Journey is Complex & Opaque"
        description="Most e-commerce stores struggle to understand how customers navigate their site, leading to poor conversion rates and missed revenue opportunities."
        problems={[
          {
            icon: <Funnel className="w-6 h-6 text-red-600" />,
            title: "Conversion Leaks",
            description: "Customers abandon carts and exit pages without clear understanding of why or where in the journey it happens."
          },
          {
            icon: <Eye className="w-6 h-6 text-red-600" />,
            title: "Invisible Customer Behavior",
            description: "Traditional analytics provide surface-level data but miss the nuanced paths customers take through your store."
          },
          {
            icon: <TrendingDown className="w-6 h-6 text-red-600" />,
            title: "Generic Optimization",
            description: "Making changes based on assumptions rather than actual customer journey data leads to ineffective improvements."
          }
        ]}
        stats={[
          { number: "68%", label: "avg cart abandonment" },
          { number: "73%", label: "bounce rate" },
          { number: "$2.1T", label: "lost e-commerce revenue" }
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
                <Funnel className="w-4 h-4" />
                <span className="tracking-tight">Journey Intelligence</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
                Optimize Every Step
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">of the Journey</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
                Identify where users drop off before checkout and get AI-powered suggestions to fix them. From traffic sources to conversion funnels, optimize the entire customer experience.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <TallyButton size="lg" className="group flex">
                  Analyze Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TallyButton>
              
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">34%</div>
                  <div className="text-muted-foreground text-sm">Avg Conversion Improvement</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">127%</div>
                  <div className="text-muted-foreground text-sm">More Insights vs Manual</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">24/7</div>
                  <div className="text-muted-foreground text-sm">Journey Monitoring</div>
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
                      <div className="font-semibold text-foreground mb-1">Traffic Analysis</div>
                      <div className="text-sm text-muted-foreground">User behavior insights</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Cart Abandonment Fix</div>
                      <div className="text-sm text-muted-foreground">Drop-off solutions ready</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Conversion +34%</div>
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
              See Journey Optimization in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how AI analyzes user behavior data and provides specific, actionable recommendations to improve conversion rates.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">Journey Analyzer Active</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Show me where users drop off before checkout and suggest fixes."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">🔍 Journey Analysis Complete! Here are the critical drop-off points:</p>
                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-slate-800">📱 Mobile Product Pages</span>
                            <span className="text-red-400 font-semibold">42% drop-off</span>
                          </div>
                          <p className="text-sm text-slate-800">🔴 High abandonment on mobile - slow loading times detected</p>
                          <div className="mt-2 text-xs text-slate-600">
                            Impact: -23% conversion rate on mobile
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-slate-800">🛒 Cart Page</span>
                            <span className="text-yellow-400 font-semibold">28% drop-off</span>
                          </div>
                          <p className="text-sm text-slate-800">🟡 Users abandoning after adding items - shipping costs concern</p>
                          <div className="mt-2 text-xs text-slate-600">
                            Impact: -$12,400 lost revenue this month
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-slate-800">💳 Checkout Form</span>
                            <span className="text-green-400 font-semibold">8% drop-off</span>
                          </div>
                          <p className="text-sm text-slate-800">✅ Performing well - minimal abandonment</p>
                          <div className="mt-2 text-xs text-slate-600">
                            Best practice: Keep this streamlined
                          </div>
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
                      <p className="">"What specific fixes should I implement?"</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">✅ Here are my prioritized recommendations with expected impact:</p>
                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <p className="text-sm font-medium mb-2 text-slate-800">🚨 Priority 1: Mobile Performance</p>
                          <p className="text-sm text-slate-700">• Optimize images for mobile (est. +15% conversion)</p>
                          <p className="text-sm text-slate-700">• Implement lazy loading (est. +8% conversion)</p>
                          <p className="text-sm text-slate-700">• Add mobile-specific CTA buttons</p>
                          <p className="text-xs text-slate-600 mt-1">Expected impact: +23% mobile conversion rate</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <p className="text-sm font-medium mb-2 text-slate-800">⚡ Priority 2: Cart Abandonment</p>
                          <p className="text-sm text-slate-700">• Add free shipping threshold banner (est. +12% completion)</p>
                          <p className="text-sm text-slate-700">• Show security badges (est. +7% completion)</p>
                          <p className="text-sm text-slate-700">• Implement exit-intent popup with discount</p>
                          <p className="text-xs text-slate-600 mt-1">Expected impact: -$8,200 recovered monthly</p>
                        </div>
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

      {/* Journey Stages Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Complete Journey Optimization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI analyzes every touchpoint from initial visit to post-purchase, identifying bottlenecks and optimization opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Traffic & Awareness</h3>
                    <p className="text-muted-foreground">Analyze which channels bring the best quality traffic and identify optimization opportunities.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Channel performance analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Landing page effectiveness</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">First-touch attribution</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center">
                    <MousePointer className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Engagement & Interest</h3>
                    <p className="text-muted-foreground">Track user behavior on site and identify pages or elements that drive or hinder engagement.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Page performance analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Content engagement tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Navigation flow optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Conversion & Purchase</h3>
                    <p className="text-muted-foreground">Identify friction points in the checkout process and get specific recommendations for improvement.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">Checkout flow analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">Form optimization suggestions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">Cart abandonment recovery</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Retention & Advocacy</h3>
                    <p className="text-muted-foreground">Understand post-purchase behavior and identify opportunities for repeat business and referrals.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">Customer lifetime value analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">Repeat purchase prediction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">Referral program optimization</span>
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
            Ready to Optimize Your Customer Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of e-commerce businesses that have transformed their conversion rates with AI-powered journey optimization.
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

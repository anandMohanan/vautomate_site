import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import CombinedUseCaseSection from "@/components/CombinedUseCaseSection";
import { ArrowRight, TrendingUp, BarChart3, FileText, ShoppingBag, Users, DollarSign, Calendar, Clock, Zap, CheckCircle, AlertTriangle, TrendingDown } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'Fast Ecommerce Analytics Reporting | GA4 + Shopify Automated Reports',
  description: 'Generate comprehensive weekly ecommerce reports in seconds with multi-source data integration. Get automated reports with beautiful visualizations and AI insights.',
  keywords: [
    'ecommerce analytics reporting',
    'GA4 Shopify integration',
    'automated reporting',
    'ecommerce dashboards',
    'business intelligence',
    'analytics automation',
    'Shopify reporting',
    'GA4 reporting',
    'automated business reports',
    'ecommerce insights'
  ],
  openGraph: {
    title: 'Fast Ecommerce Analytics Reporting | Automated Business Intelligence',
    description: 'Generate comprehensive ecommerce reports in seconds with multi-source data integration and AI-powered insights.',
    type: 'website',
    url: 'https://growth.vautomate.ai/fast-ecommerce-analytics',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ecommerce Analytics Reporting Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fast Ecommerce Analytics Reporting | Automated Business Intelligence',
    description: 'Generate comprehensive ecommerce reports in seconds with multi-source data integration.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://growth.vautomate.ai/fast-ecommerce-analytics',
  },
}

export default function FastEcommerceAnalyticsPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />

      <CombinedUseCaseSection
        badgeIcon={<BarChart3 className="w-4 h-4" />}
        badgeText="Automated Analytics Reporting"
        title="Generate Reports"
        titleAccent="In Seconds"
        description="Get comprehensive weekly ecommerce reports with revenue, customers, ad ROI, and top SKUs. Automatically sent to teams or clients with beautiful visualizations."
        ctaText="Generate Report"
        problemsTitle="The Problem"
        problemsDescription="Most e-commerce teams and agencies spend hours compiling reports from multiple client sources, missing real-time insights that could drive immediate growth opportunities across portfolios."
        problems={[
          { icon: <Clock className="w-6 h-6 text-red-600" />, title: "Time-Consuming Reports", description: "Manual compilation of data from Shopify, Google Analytics, and ad platforms across client accounts takes hours each week." },
          { icon: <TrendingDown className="w-6 h-6 text-red-600" />, title: "Delayed Insights", description: "By the time reports are ready, the data is often outdated and opportunities for quick wins across client portfolios are missed." },
          { icon: <BarChart3 className="w-6 h-6 text-red-600" />, title: "Scattered Data Sources", description: "Critical business metrics live across disconnected platforms and client accounts, making comprehensive analysis nearly impossible." },
        ]}
        stats={[
          { number: "95%", label: "Time Saved on Reporting" },
          { number: "30sec", label: "Report Generation Time" },
          { number: "∞", label: "Customization Options" },
        ]}
        illustrations={[
          { icon: <TrendingUp className="w-6 h-6 text-primary-foreground" />, title: "Revenue: $47.3K", subtitle: "+23% vs last week" },
          { icon: <Users className="w-6 h-6 text-accent-foreground" />, title: "New Customers: 142", subtitle: "Highest weekly count", tone: 'secondary' },
          { icon: <DollarSign className="w-6 h-6 text-primary-foreground" />, title: "Ad ROI: 4.2x", subtitle: "Meta + Google combined" },
        ]}
      />

      {/* Demo Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              See Automated Reporting in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how AI generates comprehensive ecommerce reports in seconds, complete with charts, insights, and automated distribution.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">Report Generator Active</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Generate my weekly ecommerce report — include total revenue, new customers, ad ROI, and top 5 SKUs."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">🎯 Weekly Ecommerce Report Generated! Here's your comprehensive overview:</p>
                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-slate-800">📈 Key Metrics</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-slate-600">Total Revenue:</span>
                              <span className="font-bold text-green-600 ml-2">$47,300</span>
                              <span className="text-green-600 text-xs ml-1">(+23%)</span>
                            </div>
                            <div>
                              <span className="text-slate-600">New Customers:</span>
                              <span className="font-bold text-blue-600 ml-2">142</span>
                              <span className="text-blue-600 text-xs ml-1">(+18%)</span>
                            </div>
                            <div>
                              <span className="text-slate-600">Ad ROI:</span>
                              <span className="font-bold text-purple-600 ml-2">4.2x</span>
                            </div>
                            <div>
                              <span className="text-slate-600">Conversion Rate:</span>
                              <span className="font-bold text-orange-600 ml-2">3.4%</span>
                              <span className="text-green-600 text-xs ml-1">(+0.8%)</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-slate-800">🏆 Top 5 SKUs</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-700">Premium Yoga Mat</span>
                              <span className="font-bold text-green-600">$12,400</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-700">Eco Water Bottle</span>
                              <span className="font-bold text-green-600">$8,700</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-700">Resistance Bands Set</span>
                              <span className="font-bold text-green-600">$6,200</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-700">Meditation Cushion</span>
                              <span className="font-bold text-green-600">$5,100</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-700">Yoga Blocks (2-pack)</span>
                              <span className="font-bold text-green-600">$4,800</span>
                            </div>
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
                      <p className="">"Send this report to my team and schedule it for every Monday morning."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">✅ Report automation configured!</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Report sent to team@company.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Google Sheet created for data access</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Automated for every Monday 9 AM</span>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-white rounded-lg">
                        <p className="text-sm font-medium text-slate-800">📊 Next Report:</p>
                        <p className="text-sm text-slate-700">Monday, 9:00 AM - Auto-generated and distributed</p>
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

      {/* Report Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Complete Analytics Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From data collection to visualization to distribution, automate your entire reporting workflow with AI-powered insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Source Integration</h3>
                <p className="text-muted-foreground">Automatically pulls data from Shopify, GA4, Meta Ads, and Google Ads for comprehensive reporting.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Beautiful Visualizations</h3>
                <p className="text-muted-foreground">Creates stunning charts, graphs, and dashboards that make complex data easy to understand.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Scheduling</h3>
                <p className="text-muted-foreground">Set it and forget it - reports are generated and distributed automatically on your schedule.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
                <p className="text-muted-foreground">Share reports with your team, add comments, and collaborate on insights and action items.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ecommerce Focus</h3>
                <p className="text-muted-foreground">Tailored specifically for ecommerce metrics - revenue, customers, product performance, and more.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
                <p className="text-muted-foreground">Not just data - get AI-generated insights, trends, and actionable recommendations in every report.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
            Ready to Automate Your Analytics Reporting?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of e-commerce businesses that have transformed their reporting with AI-powered automation.
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

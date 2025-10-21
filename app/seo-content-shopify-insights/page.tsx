import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import { ArrowRight, TrendingUp, Search, FileText, ShoppingBag, BarChart3, Zap, CheckCircle, Target, Lightbulb, Globe } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'SEO & Content Insights | Shopify Store Data Analysis & Content Strategy',
  description: 'Bridge SEO and e-commerce data to discover content gaps and opportunities. Get AI-generated keyword recommendations and blog briefs to drive organic traffic growth.',
  keywords: [
    'SEO content insights',
    'Shopify SEO analysis',
    'content gap analysis',
    'keyword research',
    'blog content strategy',
    'organic traffic growth',
    'SEO content optimization',
    'e-commerce SEO',
    'Shopify content marketing',
    'AI content strategy'
  ],
  openGraph: {
    title: 'SEO & Content Insights | Shopify Store Intelligence',
    description: 'Transform your Shopify store with AI-powered SEO insights. Discover content opportunities and drive organic traffic growth.',
    type: 'website',
    url: 'https://vautomate.ai/seo-content-shopify-insights',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'SEO Content Insights Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Content Insights | Shopify Store Intelligence',
    description: 'Transform your Shopify store with AI-powered SEO insights and content strategy recommendations.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://vautomate.ai/seo-content-shopify-insights',
  },
}

export default function SEOContentShopifyInsightsPage() {
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
                <Search className="w-4 h-4" />
                <span className="tracking-tight">SEO & Content Intelligence</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
                Bridge SEO & Ecommerce
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Data Insights</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
                Discover which products have massive sales potential but low organic traffic. Get AI-generated keyword recommendations and blog briefs to drive organic growth.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <TallyButton size="lg" className="group flex">
                  Unlock SEO Insights
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TallyButton>
              
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">67%</div>
                  <div className="text-muted-foreground text-sm">Avg Organic Traffic Increase</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">200+</div>
                  <div className="text-muted-foreground text-sm">Keywords per Product</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">3hrs</div>
                  <div className="text-muted-foreground text-sm">Research Time Saved</div>
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
                      <div className="font-semibold text-foreground mb-1">Organic Traffic +156%</div>
                      <div className="text-sm text-muted-foreground">Content gap analysis</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">47 High-Potential Keywords</div>
                      <div className="text-sm text-muted-foreground">Identified for top products</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">12 Blog Posts Created</div>
                      <div className="text-sm text-muted-foreground">AI-generated briefs ready</div>
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
              See SEO Intelligence in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how AI analyzes your Shopify data and GA4 metrics to uncover content opportunities that drive organic traffic.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">SEO Content Analyzer Active</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4  rounded-2xl">
                      <p className="">"Which products have low organic traffic compared to their sales potential?"</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">I analyzed your top 50 products and found significant content gaps:</p>
                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Premium Yoga Mat</span>
                            <span className="text-green-400 font-semibold">$12.4K sales</span>
                          </div>
                          <p className="text-sm text-slate-800">🔴 Only 234 organic visits vs $12.4K in sales. Massive content opportunity!</p>
                          <div className="mt-2 text-xs text-slate-400">
                            Search volume: 8,100/mo | Competition: Medium
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Eco-Friendly Water Bottle</span>
                            <span className="text-green-400 font-semibold">$8.7K sales</span>
                          </div>
                          <p className="text-sm text-slate-800">🟡 456 organic visits vs $8.7K in sales. Good potential for content expansion.</p>
                          <div className="mt-2 text-xs text-slate-400">
                            Search volume: 12,400/mo | Competition: Low
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
                    <div className="flex-1 p-4 bg-slate-800 rounded-2xl">
                      <p className="text-slate-200">"Generate keyword recommendations and a new blog brief to drive more organic visits."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">✅ Perfect! Here's your content strategy for the Premium Yoga Mat:</p>
                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <p className="text-sm font-medium mb-2 text-slate-800">🎯 Target Keywords:</p>
                          <div className="space-y-1 text-sm text-slate-700">
                            <div>"best yoga mats 2024" (2,400 searches/mo)</div>
                            <div>"premium yoga mats for hot yoga" (890 searches/mo)</div>
                            <div>"eco-friendly yoga mats" (1,200 searches/mo)</div>
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <p className="text-sm font-medium mb-2 text-slate-800">📝 Blog Brief Generated:</p>
                          <p className="text-sm text-slate-700">"Ultimate Guide to Choosing the Best Yoga Mats for Your Practice - Cover mat types, thickness, materials, and include product showcases"</p>
                          <p className="text-xs text-slate-600 mt-1">Est. traffic potential: 1,200+ monthly visitors</p>
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

      {/* Insights Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Comprehensive SEO & Content Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI combines your Shopify sales data with GA4 and SEO analytics to surface content gaps and actionable strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sales vs Traffic Analysis</h3>
                <p className="text-muted-foreground">Identify products with high sales potential but low organic visibility and prioritize content creation.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Keyword Research</h3>
                <p className="text-muted-foreground">Get data-driven keyword recommendations based on search volume, competition, and relevance to your products.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Briefs</h3>
                <p className="text-muted-foreground">AI generates detailed blog post briefs with target keywords, outlines, and SEO optimization strategies.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Product Page Optimization</h3>
                <p className="text-muted-foreground">Get suggestions for improving product descriptions, titles, and meta tags based on top-performing content.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
                <p className="text-muted-foreground">Understand what content strategies are working for competitors and identify gaps in your content coverage.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Technical SEO Audit</h3>
                <p className="text-muted-foreground">Identify technical issues that might be hindering your organic search performance and get actionable fixes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
            Ready to Bridge SEO & Ecommerce Data?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of e-commerce businesses that have transformed their organic traffic with AI-powered content insights.
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

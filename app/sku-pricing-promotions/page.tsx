import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import { ArrowRight, DollarSign, Package, TrendingDown, Zap, CheckCircle, Target, ShoppingCart, Percent, AlertTriangle, Clock } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'SKU-Level Pricing & Promotion Adjustments | Dynamic Ecommerce Pricing',
  description: 'Automate inventory-based pricing and promotions. Identify products with high inventory and low sell-through, then create targeted discount campaigns automatically.',
  keywords: [
    'SKU-level pricing',
    'dynamic pricing',
    'promotion automation',
    'inventory-based discounts',
    'sell-through optimization',
    'automated promotions',
    'price adjustments',
    'ecommerce pricing strategy',
    'inventory management',
    'discount campaigns'
  ],
  openGraph: {
    title: 'SKU-Level Pricing & Promotion Adjustments | Dynamic Pricing Intelligence',
    description: 'Transform your pricing strategy with AI-powered inventory analysis and automated discount campaigns.',
    type: 'website',
    url: 'https://growth.vautomate.ai/sku-pricing-promotions',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'SKU-Level Pricing Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKU-Level Pricing & Promotion Adjustments | Dynamic Pricing Intelligence',
    description: 'Transform your pricing strategy with AI-powered inventory analysis and automated discount campaigns.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://growth.vautomate.ai/sku-pricing-promotions',
  },
}

export default function SKU_PricingPromotionsPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />

      {/* Problem Section */}
      <ProblemSection
        title="Pricing & Promotions are Complex & Risky"
        description="Most e-commerce stores struggle with dynamic pricing strategies, seasonal promotions, and inventory management that directly impact profitability."
        problems={[
          {
            icon: <Package className="w-6 h-6 text-red-600" />,
            title: "Inventory Management Complexity",
            description: "Managing thousands of SKUs with different pricing rules, seasonal demands, and stock levels creates operational chaos."
          },
          {
            icon: <TrendingDown className="w-6 h-6 text-red-600" />,
            title: "Revenue Leakage",
            description: "Static pricing misses opportunities for dynamic adjustments based on demand, competition, and market conditions."
          },
          {
            icon: <Clock className="w-6 h-6 text-red-600" />,
            title: "Manual Promotion Planning",
            description: "Creating and managing promotions across multiple channels requires extensive manual work and coordination."
          }
        ]}
        stats={[
          { number: "23%", label: "missed pricing opportunities" },
          { number: "18%", label: "inventory inefficiency" },
          { number: "12hrs", label: "weekly planning time" }
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
                <DollarSign className="w-4 h-4" />
                <span className="tracking-tight">Dynamic Pricing Intelligence</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
                Automate Pricing
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">& Promotions</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
                Identify products with high inventory and low sell-through rates. Create targeted discount campaigns and adjust pricing automatically to optimize inventory turnover.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <TallyButton size="lg" className="group flex">
                  Optimize Inventory
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TallyButton>
                <Link href="/demo" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                  See Demo
                </Link>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">43%</div>
                  <div className="text-muted-foreground text-sm">Faster Inventory Turnover</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">$127K</div>
                  <div className="text-muted-foreground text-sm">Avg Monthly Savings</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">24/7</div>
                  <div className="text-muted-foreground text-sm">Price Monitoring</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Inventory Analyzed</div>
                      <div className="text-sm text-muted-foreground">247 SKUs processed</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Percent className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">12 Discount Campaigns</div>
                      <div className="text-sm text-muted-foreground">Created automatically</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Inventory Turnover +43%</div>
                      <div className="text-sm text-muted-foreground">This month improvement</div>
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
              See Dynamic Pricing in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how AI analyzes inventory levels and sales velocity to create targeted discount campaigns and pricing adjustments.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">Pricing Intelligence Active</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Identify products with high inventory and low sell-through. Create a 10% discount campaign targeting those."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">📦 Analyzing inventory and sales data across 247 SKUs...</p>

                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                            <div>
                              <p className="font-medium text-slate-800">Premium Yoga Mats</p>
                              <p className="text-sm text-slate-600">Inventory: 847 units | Sell-through: 23%</p>
                            </div>
                          </div>
                          <div className="bg-red-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">🔴 High Risk:</p>
                            <p className="text-sm text-slate-600">847 units in stock with only 23% sell-through rate. Recommend 15% discount to accelerate sales.</p>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                            <div>
                              <p className="font-medium text-slate-800">Eco Water Bottles</p>
                              <p className="text-sm text-slate-600">Inventory: 623 units | Sell-through: 31%</p>
                            </div>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">🟡 Medium Risk:</p>
                            <p className="text-sm text-slate-600">623 units with 31% sell-through. 10% discount recommended to improve turnover.</p>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                            <div>
                              <p className="font-medium text-slate-800">Meditation Cushions</p>
                              <p className="text-sm text-slate-600">Inventory: 234 units | Sell-through: 67%</p>
                            </div>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">✅ Healthy:</p>
                            <p className="text-sm text-slate-600">234 units with 67% sell-through. No discount needed - performing well.</p>
                          </div>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-slate-200">✅ Analysis complete. Ready to create discount campaigns for high-risk items?</p>
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
                      <p className="">"Yes, create discount campaigns for the high-risk products and push them to Google Shopping."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-green-500 rounded-2xl">
                      <p className="text-white">✅ Discount campaigns created and deployed!</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Premium Yoga Mats: 15% off - Code: YOGA15</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Eco Water Bottles: 10% off - Code: ECO10</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Promotions pushed to Google Shopping</span>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-green-600 rounded-lg">
                        <p className="text-sm font-medium text-white">📊 Expected Impact:</p>
                        <p className="text-sm text-green-100">Est. $12,400 additional revenue | 43% faster inventory turnover</p>
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

      {/* Pricing Strategies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Intelligent Pricing Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From inventory analysis to multi-platform deployment, automate every aspect of your pricing and promotion strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inventory Analysis</h3>
                <p className="text-muted-foreground">AI monitors stock levels and sales velocity to identify products that need pricing intervention.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dynamic Discounts</h3>
                <p className="text-muted-foreground">Automatically calculates optimal discount percentages based on inventory levels and market conditions.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Campaign Creation</h3>
                <p className="text-muted-foreground">Generates targeted discount campaigns with custom codes, duration, and customer segments.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Platform Integration</h3>
                <p className="text-muted-foreground">Automatically syncs promotions across Shopify, Google Shopping, Meta Catalog, and other platforms.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Alerts</h3>
                <p className="text-muted-foreground">Monitors campaign performance and alerts you when inventory levels require pricing adjustments.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Execution</h3>
                <p className="text-muted-foreground">Executes pricing changes and promotion deployments without manual intervention.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
            Ready to Automate Your Pricing Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of e-commerce businesses that have transformed their inventory management with AI-powered pricing automation.
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

import { Card, CardContent } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  TrendingUp,
  Target,
  Search,
  Workflow,
  BarChart3,
  Funnel,
  ArrowRight,
  Zap,
  Palette,
  DollarSign,
  Eye
} from 'lucide-react';

const useCases = [
  {
    title: 'Cross-Channel Ad Performance',
    description: 'Get unified ROAS tracking across Meta and Google Ads with AI-powered insights and automated optimization.',
    href: '/cross-channel-ad-performance',
    icon: TrendingUp,
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Automated Campaign Optimization',
    description: 'Let AI analyze your campaign performance and suggest optimizations with automated bid adjustments.',
    href: '/automated-campaign-optimization',
    icon: Target,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'SEO & Content Insights',
    description: 'Bridge SEO and e-commerce data to discover content gaps and get AI-generated keyword recommendations.',
    href: '/seo-content-shopify-insights',
    icon: Search,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Marketing Project Orchestration',
    description: 'Coordinate complex campaigns across channels with specialized AI agents for automated execution.',
    href: '/marketing-project-orchestration',
    icon: Workflow,
    color: 'bg-orange-500',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Fast Ecommerce Analytics',
    description: 'Generate comprehensive reports in seconds with multi-source data integration and AI insights.',
    href: '/fast-ecommerce-analytics',
    icon: BarChart3,
    color: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Customer Journey Optimization',
    description: 'Identify drop-off points and get AI-powered recommendations to optimize every step of the funnel.',
    href: '/customer-journey-optimization',
    icon: Funnel,
    color: 'bg-red-500',
    gradient: 'from-red-500 to-red-600'
  },
  {
    title: 'Automated Creative Generation',
    description: 'Generate and deploy Meta ad creatives automatically using top-performing content and brand tone.',
    href: '/automated-creative-generation',
    icon: Palette,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    title: 'SKU-Level Pricing & Promotions',
    description: 'Automate inventory-based pricing and create targeted discount campaigns for optimal inventory turnover.',
    href: '/sku-pricing-promotions',
    icon: DollarSign,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'Competitor Monitoring & Bidding',
    description: 'Monitor competitor pricing and automatically adjust Google Ads bids to maintain competitive advantage.',
    href: '/competitor-monitoring-bidding',
    icon: Eye,
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600'
  }
];

export default function UseCasesSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-secondary-foreground rounded-full text-sm font-medium mb-6 border border-border">
            <Zap className="w-4 h-4" />
            <span className="tracking-tight">Use Cases</span>
          </div>

          <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
            Powerful AI Solutions for Every Marketing Challenge
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how Vautomate's AI-powered platform solves specific marketing challenges with intelligent automation and actionable insights.
          </p>

       
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-muted/50">
                <CardContent className="p-6">
                  <Link href={useCase.href} className="block">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {useCase.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to transform your marketing with AI-powered automation?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://calendly.com/ashishbindal4/demo-automate-your-shopify-store-with-vautomate"
              className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90")}
            >
              Schedule Demo
            </Link>
            <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

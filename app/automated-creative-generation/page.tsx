import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import { ArrowRight, Palette, Image, Zap, CheckCircle, Target, Bot, Download, Upload, TrendingUp, AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'Automated Creative Generation & Deployment | AI-Powered Ad Creative Creation',
  description: 'Generate and deploy Meta ad creatives automatically using top-performing content. Create variations with brand tone and launch them instantly across platforms.',
  keywords: [
    'automated creative generation',
    'AI ad creative creation',
    'Meta ads automation',
    'creative deployment',
    'ad copy generation',
    'brand tone optimization',
    'creative performance analysis',
    'automated campaign creation',
    'AI marketing creative',
    'creative asset management'
  ],
  openGraph: {
    title: 'Automated Creative Generation & Deployment | AI Creative Intelligence',
    description: 'Transform your creative workflow with AI-powered generation and deployment. Create winning ad creatives automatically.',
    type: 'website',
    url: 'https://growth.vautomate.ai/automated-creative-generation',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Automated Creative Generation Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated Creative Generation & Deployment | AI Creative Intelligence',
    description: 'Transform your creative workflow with AI-powered generation and deployment.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://growth.vautomate.ai/automated-creative-generation',
  },
}

export default function AutomatedCreativeGenerationPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />

      {/* Problem Section */}
      <ProblemSection
        title="Creative Production is Slow & Expensive"
        description="Creating effective ad creatives, social media posts, and email campaigns takes days of design work and thousands in creative costs."
        problems={[
          {
            icon: <Clock className="w-6 h-6 text-red-600" />,
            title: "Time-Intensive Process",
            description: "Designers spend days creating variations and iterating based on performance data, slowing campaign launches."
          },
          {
            icon: <TrendingDown className="w-6 h-6 text-red-600" />,
            title: "High Creative Costs",
            description: "Professional design services and stock imagery eat into marketing budgets, especially for testing multiple variants."
          },
          {
            icon: <Palette className="w-6 h-6 text-red-600" />,
            title: "Inconsistent Branding",
            description: "Maintaining brand consistency across all channels becomes challenging with manual creative processes."
          }
        ]}
        stats={[
          { number: "3-5", label: "days per creative" },
          { number: "$2K", label: "avg creative cost" },
          { number: "40%", label: "brand inconsistency" }
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
                <Palette className="w-4 h-4" />
                <span className="tracking-tight">AI Creative Intelligence</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
                Generate & Deploy
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Ad Creatives</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
                Create winning Meta ad creatives automatically using top-performing content from previous campaigns. Generate variations with your brand tone and deploy them instantly.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <TallyButton size="lg" className="group flex">
                  Generate Creatives
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TallyButton>
                <Link href="/demo" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                  See Demo
                </Link>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">85%</div>
                  <div className="text-muted-foreground text-sm">Faster Creative Production</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">3.2x</div>
                  <div className="text-muted-foreground text-sm">Higher Engagement Rate</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">24/7</div>
                  <div className="text-muted-foreground text-sm">Creative Generation</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Palette className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">3 Creatives Generated</div>
                      <div className="text-sm text-muted-foreground">Based on top performers</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Upload className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Deployed to Meta</div>
                      <div className="text-sm text-muted-foreground">Draft mode active</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Performance Tracking</div>
                      <div className="text-sm text-muted-foreground">A/B testing enabled</div>
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
              See Creative Generation in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how AI analyzes top-performing content and generates new ad creatives with your brand tone, then deploys them automatically.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">Creative Generator Active</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Create three new Meta ad creatives for our top-selling product using last month's best-performing copy and images."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">🎨 Analyzing your top-performing content and generating new creatives...</p>

                      <div className="mt-3 space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                            <div>
                              <p className="font-medium text-slate-800">Premium Yoga Mat - Urgency Variant</p>
                              <p className="text-sm text-slate-600">Based on "Limited Time: 40% Off" top performer</p>
                            </div>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">Generated Copy:</p>
                            <p className="text-sm text-slate-600">"⏰ Only 24 Hours Left! Get your Premium Yoga Mat at 40% off. Don't miss this limited-time offer - shop now before it's gone!"</p>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                            <div>
                              <p className="font-medium text-slate-800">Eco-Friendly Water Bottle - Social Proof</p>
                              <p className="text-sm text-slate-600">Inspired by "5-Star Rated" campaign</p>
                            </div>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">Generated Copy:</p>
                            <p className="text-sm text-slate-600">"⭐ Join 10,000+ happy customers! Our eco-friendly water bottle is rated 4.9/5 stars. Stay hydrated sustainably - order yours today!"</p>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                            <div>
                              <p className="font-medium text-slate-800">Meditation Cushion - Benefit Focus</p>
                              <p className="text-sm text-slate-600">Using "Comfort Guarantee" messaging</p>
                            </div>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-lg mt-2">
                            <p className="text-sm text-slate-700 font-medium mb-1">Generated Copy:</p>
                            <p className="text-sm text-slate-600">"🧘‍♀️ Experience ultimate comfort with our premium meditation cushion. 30-day comfort guarantee - find your perfect zen position today!"</p>
                          </div>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-slate-200">✅ Creatives generated and ready for deployment. Launch in draft mode or activate immediately?</p>
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
                      <p className="">"Deploy all three to Meta Ads Manager in draft mode."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-green-500 rounded-2xl">
                      <p className="text-white">✅ All 3 creatives deployed to Meta Ads Manager!</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Premium Yoga Mat creative uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Eco Water Bottle creative uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-200" />
                          <span className="text-sm text-white">Meditation Cushion creative uploaded</span>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-green-600 rounded-lg">
                        <p className="text-sm font-medium text-white">📊 Ready for Testing:</p>
                        <p className="text-sm text-green-100">All creatives are in draft mode. Performance tracking enabled.</p>
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

      {/* Creative Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Complete Creative Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From performance analysis to deployment, automate every step of your creative workflow with AI-powered intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Analysis</h3>
                <p className="text-muted-foreground">AI analyzes your best-performing ads to identify winning copy, images, and messaging patterns.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Brand Tone Matching</h3>
                <p className="text-muted-foreground">Generates new creatives that perfectly match your brand voice and communication style.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Image className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visual Generation</h3>
                <p className="text-muted-foreground">Creates multiple creative variations using your existing assets and performance data.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Platform Deployment</h3>
                <p className="text-muted-foreground">Automatically uploads creatives to Meta Ads Manager, Google Ads, or other platforms.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">A/B Testing Setup</h3>
                <p className="text-muted-foreground">Automatically configures A/B tests and performance tracking for new creatives.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Asset Management</h3>
                <p className="text-muted-foreground">Organizes and catalogs all generated creatives for easy access and future use.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
            Ready to Automate Your Creative Workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have transformed their creative production with AI-powered generation and deployment.
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

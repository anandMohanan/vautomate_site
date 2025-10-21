import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import { ArrowRight, Users, Workflow, Bot, CheckCircle, Target, Calendar, BarChart3, Zap, MessageSquare, Settings, AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export const metadata: Metadata = {
  title: 'Marketing Project Orchestration | Multi-Agent Campaign Collaboration',
  description: 'Coordinate complex marketing campaigns across Meta, Google, and Email with specialized AI agents. Launch comprehensive projects with automated execution and tracking.',
  keywords: [
    'marketing project orchestration',
    'multi-agent collaboration',
    'campaign coordination',
    'AI marketing agents',
    'cross-channel campaigns',
    'marketing automation',
    'project management',
    'campaign execution',
    'marketing workflow',
    'AI marketing tools'
  ],
  openGraph: {
    title: 'Marketing Project Orchestration | Multi-Agent Campaign Management',
    description: 'Launch comprehensive marketing campaigns with coordinated AI agents across all channels. Automate execution and tracking.',
    type: 'website',
    url: 'https://growth.vautomate.ai/marketing-project-orchestration',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Marketing Project Orchestration Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Project Orchestration | Multi-Agent Campaign Management',
    description: 'Launch comprehensive marketing campaigns with coordinated AI agents across all channels.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://growth.vautomate.ai/marketing-project-orchestration',
  },
}

export default function MarketingProjectOrchestrationPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />

      {/* Problem Section */}
      <ProblemSection
        title="Marketing Projects Lack Coordination"
        description="Most marketing teams and agencies struggle with project fragmentation, unclear priorities, and inconsistent execution across client campaigns and channels."
        problems={[
          {
            icon: <Workflow className="w-6 h-6 text-red-600" />,
            title: "Fragmented Execution",
            description: "Marketing projects span multiple tools, team members, and client accounts, leading to coordination challenges and missed deadlines."
          },
          {
            icon: <Users className="w-6 h-6 text-red-600" />,
            title: "Unclear Priorities",
            description: "Without centralized project visibility across client portfolios, teams often work on low-impact tasks while high-value opportunities slip away."
          },
          {
            icon: <Clock className="w-6 h-6 text-red-600" />,
            title: "Inefficient Resource Use",
            description: "Team members often duplicate work across client accounts or wait for approvals, wasting valuable time and creative energy."
          }
        ]}
        stats={[
          { number: "23%", label: "project delays" },
          { number: "40%", label: "resource waste" },
          { number: "5", label: "tools per project" }
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
                <Workflow className="w-4 h-4" />
                <span className="tracking-tight">Multi-Agent Collaboration</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
                Orchestrate Complex
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Marketing Projects</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl">
                Create comprehensive marketing campaigns across multiple channels with AI agents that coordinate Meta ads, Google Search, email sequences, and track everything in one place.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <TallyButton size="lg" className="group flex">
                  Launch Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </TallyButton>
              
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">5x</div>
                  <div className="text-muted-foreground text-sm">Faster Campaign Setup</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">92%</div>
                  <div className="text-muted-foreground text-sm">Project Success Rate</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 font-serif">24/7</div>
                  <div className="text-muted-foreground text-sm">Agent Monitoring</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Meta Agent Active</div>
                      <div className="text-sm text-muted-foreground">Remarketing campaign ready</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Google Agent Active</div>
                      <div className="text-sm text-muted-foreground">Search ads optimized</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email Agent Active</div>
                      <div className="text-sm text-muted-foreground">Sequence automation ready</div>
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
              See Multi-Agent Collaboration in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how specialized AI agents coordinate across different marketing channels to execute a comprehensive holiday campaign.
            </p>
          </div>

          <Card className="rounded-3xl p-8 bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-white rounded-2xl p-8 text-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-green-800">Project Orchestration Active</span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <div className="flex-1 p-4 rounded-2xl">
                      <p className="">"Create a 'Holiday Sales Campaign' project that includes Meta remarketing, Google Search ads, and an email sequence."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">🎯 Holiday Sales Campaign project created! Here's how our specialized agents will collaborate:</p>
                      <div className="mt-3 space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">M</div>
                          <div>
                            <p className="font-medium text-blue-600">Meta Agent</p>
                            <p className="text-sm text-slate-800">Creating remarketing audiences and ad sets for cart abandoners</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
                          <div>
                            <p className="font-medium text-green-600">Google Agent</p>
                            <p className="text-sm text-slate-800">Optimizing search campaigns for holiday shopping keywords</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">E</div>
                          <div>
                            <p className="font-medium text-purple-600">Email Agent</p>
                            <p className="text-sm text-slate-800">Building automated email sequence for holiday promotions</p>
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
                      <p className="">"Show me the project status and performance."</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 p-4 bg-primary rounded-2xl">
                      <p className="text-white">📊 Holiday Campaign Status - Day 3 of 14:</p>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        <div className="p-3 bg-white rounded-lg text-center">
                          <p className="text-lg font-bold text-green-600">Meta</p>
                          <p className="text-sm text-slate-700">ROAS: 4.2x</p>
                          <p className="text-xs text-slate-600">✅ On track</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg text-center">
                          <p className="text-lg font-bold text-green-600">Google</p>
                          <p className="text-sm text-slate-700">CTR: 3.1%</p>
                          <p className="text-xs text-slate-600">✅ Optimized</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg text-center">
                          <p className="text-lg font-bold text-green-600">Email</p>
                          <p className="text-sm text-slate-700">OR: 24%</p>
                          <p className="text-xs text-slate-600">✅ Sequence active</p>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-white rounded-lg">
                        <p className="text-sm font-medium text-slate-800">🎯 Overall Performance:</p>
                        <p className="text-lg font-bold text-green-600">$47,300 revenue (+156% vs last holiday)</p>
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

      {/* Agent Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-serif">
              Specialized AI Agents for Every Channel
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each agent is trained specifically for their platform, ensuring expert-level execution and optimization across all marketing channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Meta Ads Agent</h3>
                    <p className="text-muted-foreground">Expert in Facebook and Instagram advertising, audience targeting, and creative optimization.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Lookalike audience creation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Creative A/B testing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Remarketing automation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Google Ads Agent</h3>
                    <p className="text-muted-foreground">Specialized in search campaigns, keyword optimization, and performance max strategies.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Smart bidding strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Keyword expansion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Shopping campaign management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Email Agent</h3>
                    <p className="text-muted-foreground">Focused on email marketing automation, segmentation, and personalized campaign creation.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">Automated email sequences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">Customer segmentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">Personalization at scale</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Analytics Agent</h3>
                    <p className="text-muted-foreground">Dedicated to cross-channel attribution, performance tracking, and ROI optimization.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">Multi-touch attribution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">Performance dashboards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">ROI optimization alerts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Project Manager Agent</h3>
                    <p className="text-muted-foreground">Coordinates all agents, manages timelines, and ensures project objectives are met.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm">Timeline management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm">Cross-agent coordination</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm">Milestone tracking</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                    <Bot className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Creative Agent</h3>
                    <p className="text-muted-foreground">Generates and optimizes ad copy, images, and creative assets across all platforms.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm">AI copy generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm">Creative asset optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm">A/B testing automation</span>
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
            Ready to Orchestrate Your Marketing Projects?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join agencies worldwide that have transformed their campaign execution with AI-powered multi-agent collaboration.
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

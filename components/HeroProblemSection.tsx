import { ArrowRight, Zap, Bot, BarChart3, Target, MessageSquare } from 'lucide-react';
import TallyButton from '@/components/ui/TallyButton';

export default function HeroProblemSection() {
  return (
    <section
      className="pt-32 pb-20 px-6 relative overflow-hidden "
      style={{
        background: '#ffffff',
        backgroundImage: `
          radial-gradient(
            circle at top center,
            rgba(255, 140, 60, 0.5),
            transparent 70%
          )
        `,
        backgroundRepeat: 'no-repeat',
      }}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto relative" data-scroll data-scroll-speed="2">
        <div className=" mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-orange-700 rounded-full text-sm font-medium mb-8 border border-orange-200" role="img" aria-label="AI-Powered Growth Intelligence">
            <Zap className="w-4 h-4" aria-hidden="true" />
            <span className="tracking-tight">AI-Powered Growth Intelligence</span>
          </div>

          <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight tracking-tight font-serif lg:whitespace-nowrap">
            <span className="inline-flex items-center justify-center gap-3">
            🤖              <span className="text-orange-600">Nova</span>
            </span>
            <br />your agentic AI growth partner
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">uncover and capture hidden revenue</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            Weekly AI insights from Shopify, Meta & Google Analytics. Actionable projects. Smart execution.
          </p>

          

          <div className="mb-8 px-5 py-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-orange-200 max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <span className="font-semibold text-red-700">The problem:</span> manual optimization, scattered data, and missed opportunities stall growth. <span className="font-semibold text-green-700">Our solution:</span> unified AI insights, auto-generated projects, and 24/7 monitoring to execute fast.
            </p>
          </div>

          <div className="flex items-center justify-center mb-8" role="group" aria-label="Call to action">
            <TallyButton
              size="lg"
              className="group flex text-lg px-8 py-4"
              aria-label="Get your free opportunity audit"
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" aria-hidden="true" />
            </TallyButton>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto" role="region" aria-labelledby="stats-heading">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 font-serif" aria-label="87 percent">87%</div>
              <div className="text-muted-foreground text-xs md:text-sm">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 font-serif" aria-label="12 hours">12hrs</div>
              <div className="text-muted-foreground text-xs md:text-sm">Time Saved per Week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 font-serif" aria-label="24/7">24/7</div>
              <div className="text-muted-foreground text-xs md:text-sm">AI Monitoring</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-4 p-4 bg-muted rounded-xl" role="article">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">Revenue +94%</div>
                <div className="text-sm text-muted-foreground">This month vs last</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl" role="article">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">3 New Projects</div>
                <div className="text-sm text-muted-foreground">Ready for approval</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-muted rounded-xl" role="article">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">AI Insights</div>
                <div className="text-sm text-muted-foreground">23 recommendations</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



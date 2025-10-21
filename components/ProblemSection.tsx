import { AlertTriangle, TrendingDown, Clock, DollarSign, Users, Target, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

interface ProblemSectionProps {
  title: string;
  description: string;
  problems: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  stats?: Array<{
    number: string;
    label: string;
  }>;
}

export default function ProblemSection({ title, description, problems, stats }: ProblemSectionProps) {
  return (
    <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-red-50/50 to-white" data-scroll data-scroll-speed="2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-red-700 rounded-full text-sm font-medium mb-8 border border-red-200">
            <AlertTriangle className="w-4 h-4" />
            <span className="tracking-tight">The Problem</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.05] tracking-tight font-serif">
            {title}
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <TallyButton size="lg" className="group flex">
              See the Solution
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </TallyButton>
            <Link href="/demo" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              Schedule Demo
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 border-red-200/50 bg-red-50/30">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2 font-serif">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

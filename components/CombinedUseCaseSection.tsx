import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import TallyButton from '@/components/ui/TallyButton';

interface ProblemItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface IllustrationItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tone?: 'muted' | 'secondary';
}

interface CombinedUseCaseSectionProps {
  badgeIcon: React.ReactNode;
  badgeText: string;
  title: string;
  titleAccent: string;
  description: string;
  ctaText: string;
  problemsTitle?: string;
  problemsDescription?: string;
  problems: ProblemItem[];
  stats?: StatItem[];
  illustrations?: IllustrationItem[];
}

export default function CombinedUseCaseSection({
  badgeIcon,
  badgeText,
  title,
  titleAccent,
  description,
  ctaText,
  problemsTitle = 'The Problem',
  problemsDescription,
  problems,
  stats,
  illustrations,
}: CombinedUseCaseSectionProps) {
  return (
    <section className="pt-24 pb-16 px-6 relative overflow-hidden" style={{
      background: '#ffffff',
      backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(255, 140, 60, 0.35),
          transparent 70%
        )
      `,
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-secondary-foreground rounded-full text-sm font-medium mb-6 border border-border">
            {badgeIcon}
            <span className="tracking-tight">{badgeText}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 leading-tight tracking-tight font-serif">
            {title}
            <span className="block mt-1">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">{titleAccent}</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            {description}
          </p>

          <div className="mb-8 px-5 py-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-orange-200 max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <span className="font-semibold text-red-700">{problemsTitle}:</span> {problemsDescription}
            </p>
          </div>

          <div className="flex items-center justify-center mb-8" role="group" aria-label="Call to action">
            <TallyButton size="lg" className="group flex text-lg px-8 py-4">
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" aria-hidden="true" />
            </TallyButton>
          </div>
        </div>

        {problems?.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {problems.map((p, i) => (
              <Card key={i} className="p-6 border-red-200/50 bg-red-50/30">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2 font-serif">{s.number}</div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {illustrations && illustrations.length > 0 && (
          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {illustrations.map((ill, i) => (
              <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${ill.tone === 'secondary' ? 'bg-secondary' : 'bg-muted'}`} role="article">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  {ill.icon}
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">{ill.title}</div>
                  <div className="text-sm text-muted-foreground">{ill.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}



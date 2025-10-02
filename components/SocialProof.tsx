import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    rating: 5,
    text: "Vautomate transformed how we approach growth. The weekly insights are spot-on, and the automated campaigns saved us 15+ hours per week. Our revenue is up 94% in 3 months.",
    author: "Sarah Chen",
    role: "Founder, Luxe Beauty Co."
  },
  {
    rating: 5,
    text: "The AI agents feel like having a full marketing team. They catch opportunities we would have missed and execute flawlessly. Best investment we've made this year.",
    author: "Marcus Rodriguez",
    role: "CEO, FitGear Pro"
  }
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl  text-foreground mb-6 tracking-tight font-serif">
            Trusted by Growing D2C Brands
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background p-10 rounded-2xl border border-border shadow-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-8 leading-relaxed text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 bg-muted">
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground font-serif">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

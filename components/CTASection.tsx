import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CTASection() {

  return (
    <section className="py-32 bg-primary relative overflow-hidden"   style={{
      backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ff8c3c 100%)
      `,
      backgroundSize: "100% 100%",
    }}>
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-5xl md:text-6xl text-primary mb-8 tracking-tight font-serif">
          Ready to Automate Your Growth?
        </h2>
        <p className="text-xl text-black mb-12 font-light">
          Join hundreds of D2C brands growing faster with AI-powered insights
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href={"https://app.vautomate.ai/api/auth/register"}>
            Start Now
          </Link>
          </Button>
          <Link href={"https://calendly.com/ashishbindal4/demo-automate-your-shopify-store-with-vautomate"} className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Schedule Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
